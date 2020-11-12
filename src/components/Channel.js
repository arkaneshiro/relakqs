import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Input, List } from '@material-ui/core';
import useStyles from '../styles/ChannelStyles'
import Message from './Message.js'
import ChannelUsers from './ChannelUsers.js'
import { setCurrentChannel, loadAllChannels } from "../actions/channelActions";
import { loadContainers } from "../actions/sessionActions";


export const Channel = props => {
  const dispatch = useDispatch()
  const styles = useStyles();
  const authToken = useSelector(state => state.session.authToken)
  const currentUserId = useSelector(state => state.session.currentUserId)
  const allChannels = useSelector(state => state.channels.allChannels)
  const channelId = useSelector(state => state.channels.currentChannel)
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState({});

  useEffect(() => {
    setMessages([])
    if (channelId) {
      props.socket.emit('join', { channelId, authToken })
      props.socket.emit('get_history', { channelId, authToken })
    }
    return () => {
      if (channelId) {
        props.socket.emit('leave', { channelId, authToken });
        props.socket.off();
      }
    }
  }, [channelId, authToken, props.socket])

  useEffect(() => {
    props.socket.on('history', ({history, userId}) => {
      if (currentUserId === userId) {
        setMessages([...Object.values(history), ...messages])
      }
    })
    props.socket.on('message', ({msg}) => {
      if (msg.username) {
        setMessages([...messages, msg])
      } else {
        setMessages([...messages, msg.message])
      }
    })
    props.socket.on('typing', ({typingUser}) => {
      const typer = typingUser.userId
      if (typingUser.isTyping) {
        setTypingUsers({...typingUsers, typer})
      } else {
        const remove = {typer: undefined}
        setTypingUsers({...typingUsers, ...remove})
      }
    })
    props.socket.on('new_topic', ({channels, update_msg}) => {
      dispatch(loadAllChannels(channels))
      setMessages([...messages, update_msg])
    })
    props.socket.on('new_member', ({channels, containers, new_member_id}) => {
      dispatch(loadAllChannels(channels))
      if (new_member_id === currentUserId) {
        dispatch(loadContainers(containers))
      }
    })
    props.socket.on('member_left', ({channels, containers, old_member_id}) => {
      dispatch(loadAllChannels(channels))
      if (old_member_id === currentUserId) {
        dispatch(loadContainers(containers))
        dispatch(setCurrentChannel(null))
        props.history.push('/channels')
      }
    })
    props.socket.on('channel_deleted', () => {
      dispatch(setCurrentChannel(null))
      props.history.push('/channels')
    })
  }, [messages, currentUserId, typingUsers, dispatch, props.socket, props.history])


  const updateValue = cb => e => cb(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    props.socket.emit('message', { channelId, authToken, message })
    setMessage('')
  }

  const handleEditTopic = e => {
    e.preventDefault();
    const newTopic = e.target.querySelector('input').value
    props.socket.emit('change_topic', { channelId, authToken, newTopic })
    toggleEdit()
  }

  const toggleEdit = e => {
    const form = document.getElementById('editForm')
    const input = document.getElementById('editTopic')
    const topic = document.getElementById('topic')
    if (form.hidden) {
      form.hidden = false
      topic.style.opacity = 0
    } else {
      form.hidden = true
      topic.style.opacity = 100
      input.value = ''
    }
  }

  // const stopTyping = () => {
  //   const filteredTypers = typingUsers.filter(userId => userId !== parseInt(currentUserId));
  //   setTypingUsers(filteredTypers)
  //   debugger
  // }


  return (
    <div className={styles.paper}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          { allChannels && channelId ?
            `${allChannels[channelId].title}`
          :
            'loading...'
          }
        </div>
        <div className={styles.topic}>
          { allChannels && channelId ?
            <span id='topic' >{`${allChannels[channelId].topic}`}</span>
          :
            'loading...'
          }
        </div>
      </div>
      { allChannels && channelId ?
        currentUserId === allChannels[channelId].adminId ?
          <form hidden={true} id="editForm" className={styles.field2} onSubmit={handleEditTopic}>
            <Divider />
            <Input
              className={styles.textInput}
              fullWidth
              autoComplete="off"
              placeholder={`current topic is: ${allChannels[channelId].topic}`}
              id="editTopic"
              name="editTopic"
            />
            <input hidden type="submit"/>
          </form>
        :
          ''
      :
        ''
      }
      <Divider />
      <div className={styles.buttonAndInfoContainer}>
        <div>
          { allChannels && channelId ?
            currentUserId === allChannels[channelId].adminId ?
              <>
                <input
                  className={styles.button}
                  type='button'
                  id='changeTopic'
                  value='Edit Topic'
                  onClick={toggleEdit}
                />
                <input
                  className={styles.button}
                  onClick={() => {
                    props.socket.emit('delete_channel', { authToken, channelId })
                  }}
                  type='button'
                  id='deleteChannel'
                  value='Delete Channel'
                />
              </>
            :
              ''
          :
            ''
          }
        </div>
        <div>
          { allChannels && channelId ?
              currentUserId !== allChannels[channelId].adminId ?
                <input
                  className={styles.button}
                  onClick={() => {
                    props.socket.emit('leave_channel', { authToken, channelId })
                  }}
                  type='button'
                  id='leaveChannel'
                  value='Leave Channel'
                />
              :
                ''
            :
              ''
          }
        </div>
        <div className={styles.channelInfo}>
          { allChannels && channelId ?
              <ChannelUsers
                adminId={allChannels[channelId].adminId}
                users={allChannels[channelId].users}
              />
            :
              ''
          }
        </div>
        <div className={styles.channelInfo}>
          typing:
          { allChannels && channelId ?
            Object.values(typingUsers).map(key => {
              if (allChannels[channelId].users[key]) {
                return ' ' + allChannels[channelId].users[key].username + ','
              } else {
                return ''
              }
            })
          :
            ''
          }
        </div>
      </div>
      <Divider />
      <List className={styles.list}>
        {messages.map((msg, idx) => {
          return (
            <div key={idx}>
              {
                (typeof(msg) === 'string') ?
                <>
                  <span>
                    {`${msg}`}
                  </span>
                  <Divider/>
                </>
                :
                <Message
                  message={msg.message}
                  username={msg.username}
                  aviUrl={msg.avi_url}
                  bio={msg.bio}
                />
              }
            </div>
          )
        })}
      </List>
      <form className={styles.field} onSubmit={handleSubmit}>
        <Divider />
        <Input
          className={styles.textInput}
          fullWidth
          placeholder=" type a message ...  hit enter to send"
          id="message"
          name="message"
          autoComplete="off"
          value={message}
          onChange={updateValue(setMessage)}
          inputProps={{
            'onFocus': () => {
              props.socket.emit('typingOn', { authToken, channelId })
            },
            'onBlur': () => {
              props.socket.emit('typingOff', { authToken, channelId })
            }
          }}
        />
        <input hidden type="submit"/>
      </form>
    </div>
  );
};

export default Channel;

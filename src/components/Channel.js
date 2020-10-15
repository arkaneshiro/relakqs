import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Input, List } from '@material-ui/core';
import useStyles from '../styles/ChannelStyles'
import io from 'socket.io-client'
import Message from './Message.js'
import ChannelUsers from './ChannelUsers.js'
import { leaveChannel, loadAllChannels } from "../actions/channelActions";
const { apiBaseUrl } = require("../config");

let socket

export const Channel = props => {
  const dispatch = useDispatch()
  const styles = useStyles();
  const authToken = useSelector(state => state.session.authToken)
  const currentUserId = useSelector(state => state.session.currentUserId)
  const allChannels = useSelector(state => state.channels.allChannels)
  const channelId = useSelector(state => state.channels.currentChannel)
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([])
    socket = io(`${apiBaseUrl}`)
    if (channelId) {
      socket.emit('join', { channelId, authToken })
      socket.emit('get_history', { channelId, authToken })
    }
    return () => {
      if (channelId) {
        socket.emit('leave', { channelId, authToken });
        socket.off();
      }
    }
  }, [channelId, authToken])

  useEffect(() => {
    socket.on('history', ({history, userId}) => {
      if (currentUserId === userId) {
        setMessages([...Object.values(history), ...messages])
      }
    })
    socket.on('message', ({msg}) => {
      if (msg.username) {
        setMessages([...messages, msg])
      } else {
        setMessages([...messages, msg.message])
      }
    })
    socket.on('new_topic', ({channels, update_msg}) => {
      dispatch(loadAllChannels(channels))
      setMessages([...messages, update_msg])
    })
  }, [messages, currentUserId, dispatch])


  const updateValue = cb => e => cb(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('message', { channelId, authToken, message })
    setMessage('')
  }

  const handleEditTopic = e => {
    e.preventDefault();
    const newTopic = e.target.querySelector('input').value
    socket.emit('change_topic', { channelId, authToken, newTopic })
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
              <input
                className={styles.topicButton}
                type='button'
                id='changeTopic'
                value='Edit Topic'
                onClick={toggleEdit}
              />
            :
              ''
          :
            ''
          }
        </div>
        <div>
          <input
            className={styles.leaveButton}
            onClick={() => {
              dispatch(leaveChannel(authToken, channelId, props.history));
            }}
            type='button'
            id='leaveChannel'
            value='Leave Channel'
          />
        </div>
        <div>
          { allChannels && channelId ?
            <ChannelUsers
              adminId={allChannels[channelId].adminId}
              users={allChannels[channelId].users}
            />
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
        />
        <input hidden type="submit"/>
      </form>
    </div>
  );
};

export default Channel;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Input, List } from '@material-ui/core';
import useStyles from '../styles/ChannelStyles'
import io from 'socket.io-client'
import Message from './Message.js'
import { leaveChannel } from "../actions/channelActions";
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

  const updateValue = cb => e => cb(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('message', { channelId, authToken, message })
    setMessage('')
  }

  useEffect(() => {
    setMessages([])
    socket = io(`${apiBaseUrl}`)
    if (channelId) {
      debugger
      socket.emit('join', { channelId, authToken })
      socket.emit('get_history', { channelId, authToken })
    }
    return () => {
      if (channelId) {
        debugger
        socket.emit('leave', { channelId, authToken });
        socket.off();
      }
    }
  }, [channelId, authToken])

  useEffect(() => {
    // socket.on('message', ({msg}) => {
    //   if (msg.username) {
    //     setMessages([...messages, msg])
    //   } else {
    //     setMessages([...messages, msg.message])
    //   }
    // })
  }, [messages])

  useEffect(() => {
    socket.on('history', ({history, userId}) => {
      debugger
      if (currentUserId === userId) {
        setMessages([...Object.values(history), ...messages])
      }
    })
    socket.on('message', ({msg}) => {
      debugger
      if (msg.username) {
        setMessages([...messages, msg])
      } else {
        setMessages([...messages, msg.message])
      }
    })
  }, [messages, currentUserId])


  return (
    <div className={styles.paper}>
      <div>
        { allChannels ?
        `${allChannels[props.match.params.channelId].title}`
        :
        'loading...'
        }
      </div>
      <div>
        { allChannels ?
        `${allChannels[props.match.params.channelId].topic}`
        :
        'loading...'
        }
        <div>
          { allChannels && channelId ?
          currentUserId === allChannels[channelId].adminId ? '<- edit topic button here ->' : ''
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
            type="button"
            id='leaveChannel'
            value="Leave Channel"
          />
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
          fullWidth
          placeholder=" type a message ...  hit enter to send"
          id="message"
          name="message"
          autoComplete="message"
          value={message}
          onChange={updateValue(setMessage)}
        />
        <input hidden type="submit"/>
      </form>
    </div>
  );
};

export default Channel;

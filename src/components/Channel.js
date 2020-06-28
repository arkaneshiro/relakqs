import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Divider, Input } from '@material-ui/core';
import useStyles from '../styles/ChannelStyles'
import io from 'socket.io-client'

let socket

export const Channel = props => {
  const styles = useStyles();
  const authToken = useSelector(state => state.session.authToken)
  const allChannels = useSelector(state => state.channels.allChannels)
  const channelId = useSelector(state => state.channels.currentChannel)
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const updateValue = cb => e => cb(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('send_message', { channelId, authToken, message })
    setMessage('')
  }

  useEffect(() => {
    setMessages([])
    socket = io('http://127.0.0.1:5000/')
    socket.emit('join', { channelId, authToken })

    return () => {
      socket.emit('leave', { channelId, authToken });
      socket.off();
    }
  }, [channelId, authToken])

  useEffect(() => {
    socket.on('message', ({msg}) => {
      setMessages([...messages, msg])
    })
  }, [messages])

  return (
    <>
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
          </div>
          <Divider />
          <ul>
            {messages.map((msg, idx) => {
              return (
                <div key={idx}>
                  <span >
                    {`${msg}`}
                  </span>
                  <br/>
                </div>
              )
            })}
          </ul>
          <form className={styles.field} onSubmit={handleSubmit}>
            <Divider />
            <Input
              fullWidth
              placeholder=" send a message"
              id="message"
              name="message"
              autoComplete="message"
              value={message}
              onChange={updateValue(setMessage)}
            />
            <input hidden type="submit"/>
          </form>
      </div>
    </>
  );
};

export default Channel;

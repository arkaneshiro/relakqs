import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { Divider, Input, ListItem, Modal, Backdrop, Fade, Button } from '@material-ui/core';
import { setCurrentChannel, createChannel } from "../actions/channelActions";
import useStyles from '../styles/ChannelsStyles'

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

export const Channels = props => {
  const dispatch = useDispatch()
  const styles = useStyles();
  const query = useQuery();
  const authToken = useSelector(state => state.session.authToken)
  const containers = useSelector(state => state.session.containers)
  const allChannels = useSelector(state => state.channels.allChannels)
  const [search, setSearch] = useState('');
  const [openJoin, setOpenJoin] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [channelKey, setChannelKey] = useState(null);
  const [newChannelTitle, setNewChannelTitle] = useState(null);
  const [newChannelTopic, setNewChannelTopic] = useState('');

  useEffect(() => {
    dispatch(setCurrentChannel(null))
  }, [dispatch])

  const handleJoin = channelId => {
    if (!containers.includes(parseInt(channelId))) {
      props.socket.emit('join_channel', { channelId, authToken })
    }
    setOpenJoin(false)
    dispatch(setCurrentChannel(channelId))
    props.history.push(`/channel/${channelId}`)
  }

  const handleCreate = () => {
    if (newChannelTopic) {
      if (newChannelTitle) {
        dispatch(createChannel(authToken, newChannelTitle, newChannelTopic, props.history))
      } else {
        dispatch(createChannel(authToken, query.get("name"), newChannelTopic, props.history))
      }
    } else {
      console.log('plz provide topic plz')
    }
    setOpenCreate(false)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const filteredChannels = Object.keys(allChannels).filter( key => allChannels[key].title.startsWith(`${query.get("name")}`, 1))
    if (filteredChannels.length === 0) {
      setOpenCreate(true)
    } else {
      setChannelKey(parseInt(filteredChannels[0]))
      setOpenJoin(true)
    }
  };

  const updateSearch = e => {
    setSearch(e.target.value)
    props.history.push(`/channels/channel?name=${e.target.value}`)
  };

  const updateNewChannelTitle = e => {
    setNewChannelTitle(e.target.value)
  }

  const updateNewChannelTopic = e => {
    setNewChannelTopic(e.target.value)
  }

  return (
    <div className={styles.paper}>
      <div className={styles.title}>
        Channels
      </div>
      <Divider/>
      <form className={styles.field} onSubmit={handleSubmit}>
          <Input
            fullWidth
            placeholder=" search for a channel ..."
            id="search"
            name="search"
            autoComplete="off"
            value={search}
            onChange={updateSearch}
          />
          <input hidden type="submit"/>
        </form>
        <ul className={styles.list}>
          { allChannels ?
            Object.keys(allChannels).map( key => {
              if (!query.get("name") || allChannels[key].title.startsWith(`${query.get("name")}`, 1)) {
                return (
                  <div key={key}>
                    <Divider />
                    <ListItem
                      button
                      onClick={() => {
                        setChannelKey(key);
                        setOpenJoin(true)
                      }}
                    >
                      {`${allChannels[key].title}`}
                    </ListItem>
                  </div>
                )
              } else {
                return ''
              }
            })
            :
            <ListItem>
              loading ...
            </ListItem>
          }
        </ul>
        <Modal
          className={styles.modal}
          open={openJoin}
          onClose={() => {setOpenJoin(false)}}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openJoin}>
            <div className={styles.back}>
              { allChannels && channelKey ?
                <Button onClick={() => {handleJoin(channelKey)}}>
                  Join Channel: {allChannels[channelKey].title}
                </Button>
                :
                <span></span>
              }

            </div>
          </Fade>
        </Modal>
        <Modal
          className={styles.modal}
          open={openCreate}
          onClose={() => {
            setOpenCreate(false);
            setNewChannelTitle(null);
            setNewChannelTopic('');
          }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openCreate}>
            <div className={styles.back}>
              { allChannels ?
                <>
                  <div>
                    Create a New Channel?
                  </div>
                  <Input
                    fullWidth
                    placeholder="enter channel title"
                    id="newChannelTitle"
                    name="newChannelTitle"
                    autoComplete="off"
                    value={newChannelTitle || newChannelTitle === '' ? newChannelTitle : query.get("name")}
                    onChange={updateNewChannelTitle}
                  />
                  <Input
                    fullWidth
                    placeholder="enter channel topic"
                    id="newChannelTopic"
                    name="newChannelTopic"
                    autoComplete="off"
                    value={newChannelTopic}
                    onChange={updateNewChannelTopic}
                  />
                  <Button
                    className={styles.submitCreateForm}
                    onClick={handleCreate}
                  >
                    Create Channel
                  </Button>
                </>
                :
                <span></span>
              }

            </div>
          </Fade>
        </Modal>
    </div>
  );
};

export default Channels;

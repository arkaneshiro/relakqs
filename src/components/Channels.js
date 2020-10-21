import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { Divider, Input, ListItem, Modal, Backdrop, Fade, Button } from '@material-ui/core';
import { setCurrentChannel } from "../actions/channelActions";
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
  const [channelKey, setChannelKey] = useState(1);

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

  // const handleCreate = (title, topic, admin) => {
  //   console.log('wow')
  // }

  const handleSubmit = e => {
    e.preventDefault();
    const filteredChannels = Object.keys(allChannels).filter( key => allChannels[key].title.startsWith(`${query.get("name")}`, 1))
    if (filteredChannels.length === 0) {
      console.log('todo: create new channel')
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

  return (
    <div className={styles.paper}>
      <div>
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
                      onClick={() => {setChannelKey(key); setOpenJoin(true)}}
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
              { allChannels ?
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
          onClose={() => {setOpenCreate(false)}}
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
                    Create New Channel "{query.get("name")}"?
                  </div>
                  <div>
                    Todo: create channel form
                  </div>
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

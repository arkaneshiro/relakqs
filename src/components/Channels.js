import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { Divider, Input, ListItem, Modal, Backdrop, Fade, Button } from '@material-ui/core';
import { joinChannel } from "../actions/channelActions";
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
  const [open, setOpen] = useState(false);
  const [channelKey, setChannelKey] = useState(1);


  const handleSelectchannel = key => {
    setChannelKey(key)
  }

  const handleModal = bool => {
    setOpen(bool)
  }

  const handleJoin = key => {
    if (!containers.includes(parseInt(key))) {
      dispatch(joinChannel(authToken, key))
    }
    setOpen(false)
    props.history.push(`/channel/${key}`)
  }

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
      <form className={styles.field} >
          <Input
            fullWidth
            placeholder=" search for a channel ..."
            id="search"
            name="search"
            autoComplete="search"
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
                      onClick={() => {handleSelectchannel(key); handleModal(true)}}
                    >
                      {`${allChannels[key].title}`}
                    </ListItem>
                  </div>
                )
              }
              return ''
            })
            :
            <ListItem>
              loading ...
            </ListItem>
          }
        </ul>
        <Modal
          className={styles.modal}
          open={open}
          onClose={() => {handleModal(false)}}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
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
    </div>
  );
};

export default Channels;

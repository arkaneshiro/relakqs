import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Divider, IconButton, Collapse, ListItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { logout, reload } from "../actions/sessionActions";
import { loadChannels, setCurrentChannel } from "../actions/channelActions";
import useStyles from '../styles/SidebarStyles'


export const Sidebar = props => {
  const dispatch = useDispatch()
  const styles = useStyles();
  const authToken = useSelector(state => state.session.authToken)
  const currentUserId = useSelector(state => state.session.currentUserId)
  const username = useSelector(state => state.session.username)
  const aviUrl = useSelector(state => state.session.aviUrl)
  const containers = useSelector(state => state.session.containers)
  const allChannels = useSelector(state => state.channels.allChannels)
  const channelId = useSelector(state => state.channels.currentChannel)
  const [expandedC, setExpandedC] = useState(false)
  const [expandedDM, setExpandedDM] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleSelectchannel = (key) => () => {
    dispatch(setCurrentChannel(key))
    setSelectedIndex(`CH${key}`);
    props.history.push(`/channel/${key}`)
  }

  useEffect(() => {
    if (channelId) {
      setExpandedC(true)
      setSelectedIndex(`CH${channelId}`)
    }
    if (authToken) {
      dispatch(reload(authToken));
      dispatch(loadChannels(authToken));
    }
    if (!authToken) {
      setExpandedC(false);
      setExpandedDM(false);
      setSelectedIndex(null);
    }
  }, [authToken, channelId, dispatch])

  return (
      currentUserId ?
        <div className={styles.paper}>
          <div className={styles.header}>
            <div className={styles.subHeader}>
              <Avatar className={styles.avatar} alt={username + " avi"} src={aviUrl}/>
              <div>
                {username}
              </div>
            </div>
            <input
              className={styles.logoutButton}
              onClick={() => { dispatch(logout()) }}
              type="button"
              id='logout'
              value="Log Out"
            />
          </div>
          <Divider />
          <div>
            <div className={styles.messageTitle}>
            Channels
            </div>
            <div className={styles.messageContainer}>
              <IconButton
                className={clsx(styles.expand, {
                  [styles.expandOpen]: expandedC,
                })}
                onClick={() => {setExpandedC(!expandedC)}}
                aria-expanded={expandedC}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
              <IconButton
                className={styles.expand}
                onClick={() => { props.history.push('/channels'); setSelectedIndex(null) }}
                aria-label="add channel"
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <Collapse in={expandedC} timeout="auto" unmountOnExit>
            <ul className={styles.list}>
              { containers && allChannels ?
                containers.map( key => {
                  return (
                    <div key={key}>
                      <Divider />
                      <ListItem
                        button
                        selected={selectedIndex === `CH${key}`}
                        onClick={handleSelectchannel(key)}
                      >
                        {`${allChannels[key].title}`}
                      </ListItem>
                    </div>
                  )
                })
                :
                <ListItem>
                  loading ...
                </ListItem>
              }
            </ul>
          </Collapse>
          <Divider />
          <div>
            <div className={styles.messageTitle}>
            Direct Messages
            </div>
            <div className={styles.messageContainer}>
              <IconButton
                className={clsx(styles.expand, {
                  [styles.expandOpen]: expandedDM,
                })}
                onClick={() => {setExpandedDM(!expandedDM)}}
                aria-expanded={expandedDM}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
              <IconButton
                className={styles.expand}
                // onClick={() => { props.history.push('/message'); setSelectedIndex(null) }}
                aria-label="add message"
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <Collapse in={expandedDM} timeout="auto" >
            <div>
              Under Construction! *********
            </div>
          </Collapse>
        </div>
        :
        <div>
        </div>

    // </div>
  );
};

export default Sidebar;

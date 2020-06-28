import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Divider, IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { logout, reload } from "../actions/sessionActions";
import { loadChannels } from "../actions/channelActions";
import useStyles from '../styles/SidebarStyles'


export const Sidebar = props => {
  const dispatch = useDispatch()
  const styles = useStyles();
  const authToken = useSelector(state => state.session.authToken)
  const currentUserId = useSelector(state => state.session.currentUserId)
  const username = useSelector(state => state.session.username)
  const aviUrl = useSelector(state => state.session.aviUrl)
  const [expandedC, setExpandedC] = useState(false)
  const [expandedDM, setExpandedDM] = useState(false)

  useEffect(() => {
    dispatch(reload(authToken));
    dispatch(loadChannels(authToken));
  }, [])

  return (
    <div className={styles.paper}>
      {currentUserId ?
        <div>
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
                onClick={() => { props.history.push('/channels')}}
                aria-label="add message"
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <Collapse in={expandedC} timeout="auto" >
            <div>
              epic channel
            </div>
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
                aria-label="add message"
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <Collapse in={expandedDM} timeout="auto" >
            <div>
              epic message
            </div>
          </Collapse>
        </div>
        :
        <div>
          NotLoggedIn
        </div>
      }
    </div>
  );
};

export default Sidebar;

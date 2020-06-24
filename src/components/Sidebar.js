import React, { } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/sessionActions";
import useStyles from '../styles/SidebarStyles'


export const Sidebar = props => {
  const dispatch = useDispatch()
  const styles = useStyles();
  const currentUserId = useSelector(state => state.session.currentUserId)

  return (
    <div className={styles.paper}>
      {currentUserId ?
        <div>
          <div>
            Avi
          </div>
          <div>
            current Id: {currentUserId}
          </div>
          <input
            onClick={() => { dispatch(logout()) }}
            type="button"
            id='logout'
            value="Log Out"
          />
          <div>
            Channels
          </div>
          <div>
            Direct Messages
          </div>
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

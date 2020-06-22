import React, { } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/sessionActions";
import styles from '../styles/Sidebar.module.css';

export const Sidebar = props => {
    const dispatch = useDispatch()
  const currentUserId = useSelector(state => state.session.currentUserId)

  return (
    <div>
      {currentUserId ?
        <div>
          <div>
            LoggedIn
          </div>
          <input
            className={styles.logout}
            onClick={() => { dispatch(logout()) }}
            type="button"
            id='logout'
            value="Log Out"
          />
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

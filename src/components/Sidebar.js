import React, { } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/sessionActions";

export const Sidebar = props => {
    const dispatch = useDispatch()
  const currentUserId = useSelector(state => state.session.currentUserId)

  return (
    <div>
      {currentUserId ?
        <div>
          <div>
            Avi
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

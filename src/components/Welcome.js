import React, { } from "react";
import { useSelector } from "react-redux";
import LoginRegister from './LoginRegister.js'

export const Welcome = props => {
  const currentUserId = useSelector(state => state.session.currentUserId)

  return (
    <div>
      <ul>
        <li>current id: {`${currentUserId}`}</li>
      </ul>
      {currentUserId ?
        <div>
          <div>
            Welcome Text
          </div>
        </div>
        :
        <div>
          <LoginRegister/>
        </div>
      }
    </div>
  );
};

export default Welcome;

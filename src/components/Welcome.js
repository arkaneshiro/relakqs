import React, { useState, } from "react";
import { connect, useDispatch } from "react-redux";
import { login } from "../actions/authActions";
import styles from '../styles/Welcome.module.css';

const Welcome = ({ authToken, currentUserId, }) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateValue = cb => e => cb(e.target.value);

  const handlesubmit = e => {
    e.preventDefault();
    dispatch(login(username, password))
  }

  const loginGuest = () => {
    dispatch(login('Guest', 'guestPassword'))
  }

  return (
    <div>
      <ul>
        <li>authToken: {authToken}</li>
        <li>currentUserId: {currentUserId}</li>
      </ul>
      <form className={styles.form} onSubmit={handlesubmit}>
        <label className={styles.label} htmlFor="username" >Username:
          <input
            type="text"
            id="username"
            value={username}
            onChange={updateValue(setUsername)}
          />
        </label>
        <label className={styles.label} htmlFor="password" >Password:
          <input
            type="text"
            id="password"
            value={password}
            onChange={updateValue(setPassword)}
          />
        </label>
        <input className={styles.submitInput} type="submit" id='submit-login' value="Sign In" />
        <input className={styles.submitInput} onClick={loginGuest} type="button" id='submit-login-guest' value="Sign In as Guest" />
      </form>
    </div>
  );
};

const mstp = (state) => ({
  authToken: state.auth.authToken,
  currentUserId: state.auth.currentUserId
});

export default connect(mstp)(Welcome);

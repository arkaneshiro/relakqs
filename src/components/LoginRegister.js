import React, { useState, } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../actions/sessionActions";
import styles from '../styles/LoginRegister.module.css';

export const LoginRegister = props => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [registerMode, setRegisterMode] = useState(false);

  const updateValue = cb => e => cb(e.target.value);

  const handlesubmit = e => {
    e.preventDefault();
    if (registerMode) {
      dispatch(register(username, email, password, bio))
    } else {
      dispatch(login(username, password))
    }
  }

  const loginGuest = () => {
    dispatch(login('Guest', 'password'))
  }

  return (
    <>
      {registerMode ?
        // Register Form
        <form className={styles.form} onSubmit={handlesubmit}>
          <label className={styles.label} htmlFor="username" >Username:
            <input
              type="text"
              id="username"
              value={username}
              onChange={updateValue(setUsername)}
            />
          </label>
          <label className={styles.label} htmlFor="email" >Email:
            <input
              type="text"
              id="email"
              value={email}
              onChange={updateValue(setEmail)}
            />
          </label>
          <label className={styles.label} htmlFor="password" >Password:
            <input
              type="password"
              id="password"
              value={password}
              onChange={updateValue(setPassword)}
            />
          </label>
          <label className={styles.label} htmlFor="bio" >Bio:
            <textarea
              id="bio"
              value={bio}
              onChange={updateValue(setBio)}
            />
          </label>
          <input className={styles.submitInput} type="submit" id='submit-login' value="Register" />
          <div className={styles.switchForm} onClick={() => { setRegisterMode(false) }} id='switch-to-login'>
            Already have an account?
            Click Here To Login!
          </div>
        </form>
        :
        // Login Form
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
              type="password"
              id="password"
              value={password}
              onChange={updateValue(setPassword)}
            />
          </label>
          <input className={styles.submitInput} type="submit" id='submit-login' value="Sign In" />
          <input className={styles.submitInput} onClick={loginGuest} type="button" id='submit-login-guest' value="Sign In as Guest" />
          <div className={styles.switchForm} onClick={() => { setRegisterMode(true) }} id='switch-to-register'>
            Don't have an account?
            Click Here To Register!
          </div>
        </form>
      }
    </>
  );
};

export default LoginRegister;

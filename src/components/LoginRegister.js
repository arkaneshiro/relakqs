import React, { useState, } from "react";
import { useDispatch } from "react-redux";
import { Button, CssBaseline, TextField, Link, Typography, Container } from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { makeStyles } from '@material-ui/core/styles';
import { login, register } from "../actions/sessionActions";
// import styles from '../styles/LoginRegister.module.css';
import useStyles from '../styles/LoginRegisterStyles'

export const LoginRegister = props => {
  const dispatch = useDispatch()
  const styles = useStyles();
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

  const switchMode = () => {
    setRegisterMode(!registerMode)
    setUsername('')
    setEmail('')
    setPassword('')
    setBio('')
  }

  return (
    <>
      {registerMode ?
        // Register Form
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={styles.paper}>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <form className={styles.form} onSubmit={handlesubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                className={styles.field}
                onChange={updateValue(setUsername)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                className={styles.field}
                onChange={updateValue(setPassword)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                multiline
                fullWidth
                rows={4}
                name="bio"
                label="Bio"
                id="bio"
                autoComplete="current-bio"
                value={bio}
                className={styles.field}
                onChange={updateValue(setBio)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                className={styles.field}
                onChange={updateValue(setEmail)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.submit}
              >
                Register
              </Button>
              <Link className={styles.form_change} onClick={() => { switchMode() }} href="#" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </form>
          </div>
        </Container>
        :
        // Login Form
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={styles.paper}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={styles.form} onSubmit={handlesubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                className={styles.field}
                onChange={updateValue(setUsername)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                className={styles.field}
                onChange={updateValue(setPassword)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.submit}
              >
                Sign In
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={styles.submit_guest}
                onClick={loginGuest}
              >
                Sign In as Guest
              </Button>
              <Link className={styles.form_change} onClick={() => { switchMode() }} href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </form>
          </div>
        </Container>
      }
    </>
  );
};

export default LoginRegister;

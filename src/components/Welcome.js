import React, { } from "react";
import { useSelector } from "react-redux";
import LoginRegister from './LoginRegister.js'
import useStyles from '../styles/WelcomeStyles'


export const Welcome = props => {
  const styles = useStyles();
  const currentUserId = useSelector(state => state.session.currentUserId)

  return (
    <div className={styles.paper}>
      {currentUserId ?
        <div>
          <div>
            Welcome Text
          </div>
        </div>
        :
        <div className={styles.login}>
          <div className={styles.logoContainer}>
            <span className={styles.logo + ' ' + styles.logoEffect}>
              R
            </span>
            <span className={styles.logo + ' ' + styles.logoEffect}>
              e
            </span>
            <span className={styles.logo + ' ' + styles.logoEffect}>
              l
            </span>
            <span className={styles.logo + ' ' + styles.logoEffect}>
              a
            </span>
            <span className={styles.logo + ' ' + styles.logoEffect}>
              k
            </span>
            <span className={styles.logo + ' ' + styles.logoEffect}>
              q
            </span>
            <span className={styles.logo + ' ' + styles.logoEffect}>
              s
            </span>
          </div>
          <span className={styles.subtitle}>
            a chatting app
          </span>
          <div className={styles.form}>
            <LoginRegister />
          </div>
        </div>
      }
    </div>
  );
};

export default Welcome;

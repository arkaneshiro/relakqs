import React, { } from "react";
import { Divider } from '@material-ui/core';
import useStyles from '../styles/GettingStartedStyles'


export const GettingStarted = props => {
  const styles = useStyles();

  return (
    <div className={styles.paper}>
      <div className={styles.title}>
        Getting Started
      </div>
      <Divider/>
    </div>
  )
};

export default GettingStarted;

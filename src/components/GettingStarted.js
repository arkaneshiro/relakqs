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
      <div>
        <div className={styles.subtitle}>
          Welcome to Relakqs!
        </div>
        <div className={styles.copy}>
          Relakqs is a chatting application with separate channels, each with their own topic!
        </div>
        <Divider/>
        <div className={styles.subtitle}>
          Creating a channel
        </div>
        <div className={styles.copy}>
          To create a new channel, click the plus icon next to the 'Channels' tab on the sidebar and enter the name of your new channel.
          <br/>
          This channel name must be different from previous channels, or you will be prompted to join the original.
          <br/>
          When you create a channel you become the admin of that channel and you have the ability to set the topic!
          <br/>
          If you are the admin of a channel a 'Edit Topic' button will appear and you wil be able to change the topic!
        </div>
        <Divider/>
        <div className={styles.subtitle}>
          Changing your avatar or bio
        </div>
        <div className={styles.copy}>
          To change your avatar or bio, simply click on the avatar in the upper left hand corner and edit your info on the popover!
        </div>
      </div>
    </div>
  )
};

export default GettingStarted;

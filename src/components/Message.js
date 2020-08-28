import React, { useState } from "react";
import { Avatar, Popover, ListItem, ListItemText, Card, CardMedia, Typography, Divider } from '@material-ui/core';
import useStyles from '../styles/MessageStyles'


export const Message = props => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openPopover = e => {
    setOpen(true)
    setAnchorEl(e.currentTarget)
  }

  const closePopover = () => {
    setOpen(false)
    setAnchorEl(null)
  }

  return (
    <>
      <ListItem className={styles.message}>
        <Avatar
          alt={props.username + " avi"}
          src={props.aviUrl}
          className={styles.small + ' ' + styles.hoverPointer}
          onClick={openPopover}
        />
        <Typography className={styles.username}>
          {props.username + ' - '}
        </Typography>
        <ListItemText
          primary={props.message}
        />
      </ListItem>
      <Divider/>
      <Popover
        open={open}
        onClose={closePopover}
        anchorEl={anchorEl}
        anchorOrigin={{vertical: 'center', horizontal: 'center'}}
      >
        <Card className={styles.cardRoot}>
          <CardMedia
            component='img'
            alt="avatar"
            height="120"
            image={props.aviUrl}
          />
          <Typography className={styles.text}>{props.username + ' - ' + props.bio}</Typography>
        </Card>
      </Popover>
    </>
  );
};

export default Message;

import React from "react";
// import useStyles from '../styles/ChannelUsersStyles'


export const ChannelUsers = props => {
  // const styles = useStyles();

  return (
    <>
      <span>{`admin: ${props.users[props.adminId].username}`}</span>
      <div>members:
        {Object.keys(props.users).map((key) => {
          if (parseInt(key) !== props.adminId) {
            return ` ${props.users[key].username},`
          } else {
            return ''
          }
        })}
      </div>
    </>
  )
}

export default ChannelUsers;

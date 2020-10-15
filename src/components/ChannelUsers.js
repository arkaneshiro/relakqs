import React from "react";
// import useStyles from '../styles/ChannelUsersStyles'


export const ChannelUsers = props => {
  // const styles = useStyles();

  return (
    <>
      <span>{`admin: ${props.users[props.adminId].username}`}</span>
      <div>members:
        {Object.keys(props.users).map((key, idx) => {
          const name = props.users[key].username
          if (parseInt(key) !== props.adminId) {
            if (Object.keys(props.users).length - 1 === idx) {
              return ' ' + name
            } else {
              return ' ' + name + ','
            }
          } else {
            return ''
          }
        })}
      </div>
    </>
  )
}

export default ChannelUsers;

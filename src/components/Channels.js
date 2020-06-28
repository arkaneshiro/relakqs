import React, { } from "react";
import { useSelector } from "react-redux";

export const Channels = props => {
  const currentUserId = useSelector(state => state.session.currentUserId)

  return (
    <div>
      user {currentUserId} Channels
    </div>
  );
};

export default Channels;

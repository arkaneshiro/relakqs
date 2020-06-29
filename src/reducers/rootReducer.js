import { combineReducers } from "redux";
import session from "./sessionReducer";
import channels from "./channelReducer";
import message from "./messageReducer";

export default combineReducers({
  session,
  channels,
  message
});

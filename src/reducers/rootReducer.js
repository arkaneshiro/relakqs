import { combineReducers } from "redux";
import session from "./sessionReducer";
import channels from "./channelReducer";

export default combineReducers({
  session,
  channels,
});

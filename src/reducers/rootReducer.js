import { combineReducers } from "redux";
import session from "./sessionReducer";
import channels from "./channelsReducer";

export default combineReducers({
  session,
  channels
});

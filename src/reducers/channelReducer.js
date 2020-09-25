import { LOAD_CHANNELS, SET_CURRENT_CHANNEL } from "../actions/channelActions";
import { LOGOUT } from "../actions/sessionActions";

export default function reducer(state = {}, action) {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case LOAD_CHANNELS: {
      return Object.assign(
        newState,
        {
          allChannels: action.data,
        }
      )
    }
    case SET_CURRENT_CHANNEL: {
      return Object.assign(
        newState,
        {
          currentChannel: action.id,
        }
      )
    }
    case LOGOUT: {
      return {}
    }
    default:
      return state;
  }
}

import { SET_TOKEN, LOGOUT, LOAD_USER, LOAD_CONTAINERS } from "../actions/sessionActions";

const defaultSessionState = {
  authToken: null,
  currentUserId: null,
}

export default function reducer(state = {}, action) {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_TOKEN: {
      return Object.assign(
        newState,
        {
          authToken: action.authToken,
          currentUserId: action.currentUserId,
        }
      )
    }
    case LOAD_USER: {
      return Object.assign(
        newState,
        {
          username: action.username,
          aviUrl: action.aviUrl,
          bio: action.bio,
          containers: action.containers,
        }
      )
    }
    case LOAD_CONTAINERS: {
      return Object.assign(
        newState,
        {
          containers: action.containers,
        }
      )
    }
    case LOGOUT: {
      return defaultSessionState
    }
    default:
      return state;
  }
}

import { SET_TOKEN, LOGOUT, LOAD_USER } from "../actions/sessionActions";

const defaultSessionState = {
  authToken: null,
  currentUserId: null,
}

export default function reducer(state = defaultSessionState, action) {
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
        }
      )
    }
    case LOGOUT: {
      return Object.assign(
        newState,
        defaultSessionState
      )
    }
    default:
      return state;
  }
}

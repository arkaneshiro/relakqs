import { SET_TOKEN, LOGOUT, LOAD_USER, LOAD_CONTAINERS, AVI_UPDATER, BIO_UPDATER, SET_LOGIN_ERROR, CLEAR_LOGIN_ERROR } from "../actions/sessionActions";

const defaultSessionState = {
  authToken: null,
  currentUserId: null,
  sessionErrorMessage: null,
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
    case AVI_UPDATER: {
      return Object.assign(
        newState,
        {
          aviUrl: action.newAvi
        }
      )
    }
    case BIO_UPDATER: {
      return Object.assign(
        newState,
        {
          bio: action.newBio
        }
      )
    }
    case SET_LOGIN_ERROR: {
      return Object.assign(
        newState,
        {
          sessionErrorMessage: action.sessionErrorMessage,
        }
      )
    }
    case CLEAR_LOGIN_ERROR: {
      return Object.assign(
        newState,
        {
          sessionErrorMessage: null,
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

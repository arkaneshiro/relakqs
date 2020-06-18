import { SET_TOKEN, LOGOUT } from "../actions/authActions";

const defaultAuthState = {
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
    case LOGOUT: {
      return Object.assign(
        newState,
        defaultAuthState
      )
    }
    default:
      return state;
  }
}

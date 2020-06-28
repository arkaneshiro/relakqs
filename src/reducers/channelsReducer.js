import { } from "../actions/channelActions";


export default function reducer(state = {}, action) {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    // case SET_TOKEN: {
    //   return Object.assign(
    //     newState,
    //     {
    //       authToken: action.authToken,
    //       currentUserId: action.currentUserId,
    //     }
    //   )
    // }
    default:
      return state;
  }
}

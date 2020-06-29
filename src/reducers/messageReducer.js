import { } from "../actions/messageActions";


export default function reducer(state = {}, action) {
  // Object.freeze(state);
  // const newState = Object.assign({}, state);

  switch (action.type) {
    // case NEW_MESSAGE: {
    //   return Object.assign(
    //     newState,
    //     {
    //       currentMessages: action.msg,
    //     }
    //   )
    // }
    default:
      return state;
  }
}

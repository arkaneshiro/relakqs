// const { apiBaseUrl } = require("../config");

// ACTIONS
// export const NEW_MESSAGE = 'relakqs/message/NEW_MESSAGE';

// ACTION CREATORS
// export const updateMessages = (msg) => {
//   return {
//     type: NEW_MESSAGE,
//     msg
//   }
// };

// THUNKS

// export const loadChannels = (token) => async (dispatch) => {
//   try {
//     const res = await fetch(`${apiBaseUrl}/channel/all`, {
//     headers: {
//         "x-access-token": `${token}`,
//     },
//     });
//     if (!res.ok) throw res;
//     const {data} = await res.json();
//     dispatch(loadAllChannels(data))
//   } catch (err) {
//     console.error(err);
//   }
// }

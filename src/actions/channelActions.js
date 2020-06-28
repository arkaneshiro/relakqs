const { apiBaseUrl } = require("../config");

// ACTIONS
export const LOAD_CHANNELS = 'relakqs/channel/LOAD_CHANNELS';
export const SET_CURRENT_CHANNEL = 'relakqs/channel/SET_CURRENT_CHANNEL';

// ACTION CREATORS
export const loadAllChannels = (data) => {
  return {
    type: LOAD_CHANNELS,
    data,
  }
};

export const setCurrentChannel = (id) => {
  return {
    type: SET_CURRENT_CHANNEL,
    id,
  }
};

// THUNKS

export const loadChannels = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${apiBaseUrl}/channel/all`, {
    headers: {
        "x-access-token": `${token}`,
    },
    });
    if (!res.ok) throw res;
    const {data} = await res.json();
    dispatch(loadAllChannels(data))
  } catch (err) {
    console.error(err);
  }
}

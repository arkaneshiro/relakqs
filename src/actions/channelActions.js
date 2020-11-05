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

export const createChannel = (token, title, topic, history) => async (dispatch) => {
  try {
    const body = JSON.stringify({ title, topic })
    const res = await fetch(`${apiBaseUrl}/channel/`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${token}`,
      },
    });
    if (!res.ok) throw res;
    const {channels, newChannelId} = await res.json()
    dispatch(loadAllChannels(channels))
    dispatch(setCurrentChannel(newChannelId))
    history.push(`/channel/${newChannelId}`)
  } catch (err) {
    console.error(err)
  }
}

export const deleteChannel = (token, channelId, history) => async (dispatch) => {
  try {
    const body = JSON.stringify({ channelId });
    const res = await fetch(`${apiBaseUrl}/channel/delete`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${token}`,
      },
    });
    if (!res.ok) throw res;
  } catch (err) {
    const {message} = await err.json()
    alert(message)
  }
}

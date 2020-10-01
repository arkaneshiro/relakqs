import { loadContainers } from "./sessionActions"
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


export const joinChannel = (token, channelId) => async (dispatch) => {
  try {
    const res = await fetch(`${apiBaseUrl}/channel/${channelId}`, {
      method: "POST",
      headers: {
        "x-access-token": `${token}`,
      },
    });
    if (!res.ok) throw res;
    const {data} = await res.json();
    dispatch(loadContainers(data))
    dispatch(setCurrentChannel(channelId))
  } catch (err) {
    console.error(err);
  }
}


export const leaveChannel = (token, channelId, history) => async (dispatch) => {
  try {
    const res = await fetch(`${apiBaseUrl}/channel/leave/${channelId}`, {
      method: "DELETE",
      headers: {
        "x-access-token": `${token}`,
      },
    });
    if (!res.ok) throw res;
    const {data} = await res.json();
    dispatch(loadContainers(data))
    dispatch(setCurrentChannel(null))
    history.push('/')
  } catch (err) {
    console.error(err)
  }
}


export const editChannelTopic = (token, channelId, topic) => async (dispatch) => {
  try {
    const body = JSON.stringify({topic})
    const res = await fetch(`${apiBaseUrl}/channel/editTopic/${channelId}`, {
      method: "PUT",
      body,
      headers: {
        "x-access-token": `${token}`,
        "Content-Type": "application/json"
      },
    });
    if (!res.ok) throw res;
    const {data} = await res.json();
    dispatch(loadAllChannels(data))
  } catch (err) {
    console.error(err)
  }
}

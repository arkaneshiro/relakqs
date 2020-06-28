const { apiBaseUrl } = require("../config");

// ACTIONS

// ACTION CREATORS

// THUNKS

export const loadChannels = (token) => async (dispatch) => {
    try {
      const res = await fetch(`${apiBaseUrl}/channel/all`, {
        headers: {
          "x-access-token": `${token}`,
        },
      });
      if (!res.ok) throw res;
      const result = await res.json();
      console.log(result)
    } catch (err) {
      console.error(err);
    }
  }

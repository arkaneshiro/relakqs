const { apiBaseUrl } = require("../config");

// ACTIONS
export const SET_TOKEN = 'relakqs/authentication/SET_TOKEN';
export const LOAD_USER = 'relakqs/authentication/LOAD_USER';
export const LOGOUT = 'relakqs/authentication/LOGOUT';

// ACTION CREATORS
export const persistUser = (token, id) => {
  localStorage.setItem('relakqs-credentials', token)
  localStorage.setItem('relakqs-user', id)
};

export const removeUser = () => {
  localStorage.removeItem('relakqs-credentials');
  localStorage.removeItem('relakqs-user');
};

export const setToken = (authToken, currentUserId) => {
  persistUser(authToken, currentUserId)
  return {
    type: SET_TOKEN,
    authToken,
    currentUserId,
  }
};

export const loadUser = (username, aviUrl, bio) => {
  return {
    type: LOAD_USER,
    username,
    aviUrl,
    bio,
  }
};

export const logout = () => {
  removeUser();
  return {
    type: LOGOUT,
  }
};

// THUNKS
export const login = (username, password) => async (dispatch) => {
  try {
    const body = JSON.stringify({ username, password })
    const res = await fetch(`${apiBaseUrl}/user/token`, {
      method: "POST",
      body,
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw res;
    const { authToken, currentUserId: id, username: currentUsername, aviUrl, bio } = await res.json();
    dispatch(setToken(authToken, id));
    dispatch(loadUser(currentUsername, aviUrl, bio))
  } catch (err) {
    console.error(err);
  }
};

export const register = (username, email, password, bio) => async (dispatch) => {
  try {
    const body = JSON.stringify({ username, email, password, bio })
    const res = await fetch(`${apiBaseUrl}/user/`, {
      method: "POST",
      body,
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw res;
    const { authToken, currentUserId: id, username: currentUsername, aviUrl, bio: currentBio } = await res.json();
    dispatch(setToken(authToken, id));
    dispatch(loadUser(currentUsername, aviUrl, currentBio))
  } catch (err) {
    console.error(err);
  }
};

export const reload = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${apiBaseUrl}/user/`, {
      headers: {
        "x-access-token": `${token}`,
      },
    });
    if (!res.ok) throw res;
    const { aviUrl, username, bio } = await res.json();
    dispatch(loadUser(username, aviUrl, bio))
  } catch (err) {
    console.error(err);
  }
}
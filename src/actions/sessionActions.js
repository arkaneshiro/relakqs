const { apiBaseUrl } = require("../config");

// ACTIONS
export const SET_TOKEN = 'relakqs/authentication/SET_TOKEN';
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
    const { authToken, currentUserId: id } = await res.json();
    persistUser(authToken, id);
    dispatch(setToken(authToken, id));
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
    const { authToken, currentUserId: { id } } = await res.json();
    persistUser(authToken, id);
    dispatch(setToken(authToken, id));
  } catch (err) {
    console.error(err);
  }
};

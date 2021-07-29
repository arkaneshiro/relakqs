const { apiBaseUrl, cloudinaryPreset, cloudinaryUrl } = require("../config");

// ACTIONS
export const SET_TOKEN = 'relakqs/authentication/SET_TOKEN';
export const LOAD_USER = 'relakqs/authentication/LOAD_USER';
export const LOAD_CONTAINERS = 'relakqs/authentication/LOAD_CONTAINERS';
export const AVI_UPDATER = 'relakqs/authentication/AVI_UPDATER';
export const BIO_UPDATER = 'relakqs/authentication/BIO_UPDATER';
export const LOGOUT = 'relakqs/authentication/LOGOUT';
export const SET_LOGIN_ERROR = 'relakqs/authentication/SET_LOGIN_ERROR';
export const CLEAR_LOGIN_ERROR = 'relakqs/authentication/CLEAR_LOGIN_ERROR';


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

export const loadUser = (username, aviUrl, bio, containers) => {
  return {
    type: LOAD_USER,
    username,
    aviUrl,
    bio,
    containers,
  }
};

export const loadContainers = (containers) => {
  return {
    type: LOAD_CONTAINERS,
    containers,
  }
};

export const aviUpdater = (newAvi) => {
  return {
    type: AVI_UPDATER,
    newAvi,
  }
}

export const bioUpdater = (newBio) => {
  return {
    type: BIO_UPDATER,
    newBio,
  }
}

export const logout = () => {
  removeUser();
  return {
    type: LOGOUT,
  }
};

export const setLoginError = (message) => {
  return {
    type: SET_LOGIN_ERROR,
    sessionErrorMessage: message,
  }
};

export const clearLoginError = () => {
  return {
    type: CLEAR_LOGIN_ERROR,
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
    if (res.status === 401) {
      const { message } = await res.json();
      dispatch(setLoginError(message))
    }
    if (!res.ok) throw res;
    const { authToken, currentUserId: id, username: currentUsername, aviUrl, bio, containers } = await res.json();
    dispatch(setToken(authToken, id));
    dispatch(loadUser(currentUsername, aviUrl, bio, containers))
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
    const { authToken, currentUserId: id, username: currentUsername, aviUrl, bio: currentBio, containers } = await res.json();
    dispatch(setToken(authToken, id));
    dispatch(loadUser(currentUsername, aviUrl, currentBio, containers))
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
    const { aviUrl, username, bio, containers } = await res.json();
    dispatch(loadUser(username, aviUrl, bio, containers))
  } catch (err) {
    console.error(err);
  }
}

export const updateUserInfo = (token, bio, avi) => async (dispatch) => {
  try {
    let imgObj
    if (avi) {
      const data = new FormData();
      data.append('file', avi);
      data.append('upload_preset', cloudinaryPreset);
      const res = await fetch(`${cloudinaryUrl}/image/upload`, {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw res;
      imgObj = await res.json();
    }
    let body
    if (imgObj) {
      body = JSON.stringify({bio, aviUrl: imgObj.secure_url})
    } else {
      body = JSON.stringify({bio, aviUrl: null})
    }
    const res2 = await fetch(`${apiBaseUrl}/user/update`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${token}`,
      }
    });
    if (!res2.ok) throw res2;
    const resData = await res2.json();
    if (resData.aviUrl) {
      dispatch(aviUpdater(resData.aviUrl))
    }
    if (resData.bio) {
      dispatch(aviUpdater(resData.bio))
    }

  } catch (err) {
    console.error(err)
  }
}

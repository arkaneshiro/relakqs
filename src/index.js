import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
import configureStore from "./configureStore";


const preloadedState = {
  session: {
    authToken: localStorage.getItem('relakqs-credentials'),
    currentUserId: parseInt(localStorage.getItem('relakqs-user')),
  },
  // channels: {
  //   currentChannel: window.location.pathname.includes('channel') ? window.location.pathname.split('/')[2] : null,
  // },
}

const store = configureStore(preloadedState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

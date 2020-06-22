import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./configureStore";

const preloadedState = {
  session: {
      authToken: localStorage.getItem('relakqs-credentials'),
      currentUserId: localStorage.getItem('relakqs-user'),
  },
}

const store = configureStore(preloadedState);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

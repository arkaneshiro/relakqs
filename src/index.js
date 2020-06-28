import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
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
    <Provider store={store} >
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

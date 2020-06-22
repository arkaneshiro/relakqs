import React from "react";
import { Provider } from "react-redux";
import Welcome from "./components/Welcome";
import Sidebar from "./components/Sidebar";

function App({ store }) {

  return (
    <Provider store={store}>
      <Sidebar />
      <Welcome />
    </Provider>
  );
}

export default App;

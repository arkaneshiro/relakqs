import React from "react";
import { Provider } from "react-redux";
import Divider from '@material-ui/core/Divider';
import Welcome from "./components/Welcome";
import Sidebar from "./components/Sidebar";
import useStyles from './styles/AppStyles';


function App({ store }) {
  const styles = useStyles();

  return (
    <Provider store={store}>
      <div className={styles.paper}>
        <Sidebar />
        <Divider orientation="vertical" flexItem />
        <Welcome />
      </div>
    </Provider>
  );
}

export default App;

import React from "react";
// import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Divider from '@material-ui/core/Divider';
// import { ProtectedRoute, AuthRoute } from './Auth'
import Welcome from "./components/Welcome";
import Channels from "./components/Channels";
import Sidebar from "./components/Sidebar";
import useStyles from './styles/AppStyles';


function App({ store }) {
  const styles = useStyles();
  // const currentUserId = useSelector(state => state.session.currentUserId)

  return (
      <div className={styles.paper}>
        <BrowserRouter>
          <Route
            path='/'
            component={Sidebar}
          />
          <Divider orientation="vertical" flexItem />
          <Switch>
            <Route
              exact
              path='/'
              component={Welcome}
            />
            <Route
              path='/channels'
              component={Channels}
            />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;

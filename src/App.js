import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ProtectedRoute } from './Auth'
import Welcome from "./components/Welcome";
import Channels from "./components/Channels";
import Channel from "./components/Channel";
import Sidebar from "./components/Sidebar";
import useStyles from './styles/AppStyles';


function App(props) {
  const styles = useStyles();
  const currentUserId = useSelector(state => state.session.currentUserId)


  return (
    <CssBaseline>
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
            <ProtectedRoute
              path='/channels'
              component={Channels}
              currentUserId={currentUserId}
            />
            <ProtectedRoute
              exact
              path='/channel/:channelId'
              component={Channel}
              currentUserId={currentUserId}
              // socket={socket}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </CssBaseline>
  );
}

export default App;

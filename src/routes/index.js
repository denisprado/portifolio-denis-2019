import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch } from "react-router-dom";
import history from "./history";
import MainNavigation from "../pages/MainNavigation";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import Private from "./private";
import Guest from "./guest";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest exact path="/" component={MainNavigation} />
      <Guest path="/signin" component={SignIn} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;

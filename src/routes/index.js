import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch } from "react-router-dom";
import history from "./history";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import Private from "./private";
import Guest from "./guest";
import Sobre from "../pages/Sobre";
import GraphicDesign from "../pages/GraphicDesign";
import Works from "../pages/Works";
import Home from "../pages/Home";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest exact path="/" component={Home} />
      <Guest path="/signin" component={SignIn} />
      <Guest path="/about" component={Sobre} />
      <Guest path="/graphic-design" component={GraphicDesign} />
      <Guest path="/work" component={Works} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;

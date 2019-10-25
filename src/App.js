import React from "react";

import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";
import Grid from "./components/Grid";

const App = () => {
  return (
    <Provider store={store}>
      <Grid />
      <Routes />
      <GlobalStyle />
    </Provider>
  );
};

export default App;

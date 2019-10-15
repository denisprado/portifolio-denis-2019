import React from "react";

import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
};

export default App;

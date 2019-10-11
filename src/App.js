import React from "react";
import MainNavigation from "./pages/MainNavigation";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <>
        <MainNavigation />
        <GlobalStyle />
      </>
    </Provider>
  );
};

export default App;

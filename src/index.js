import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ReactDOM from "react-dom/client";
import UserContainer from "./components/UserContainer";
import App2Container from "./components/App2Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <UserContainer />
  </Provider>
);

const other = ReactDOM.createRoot(document.getElementById("other"));
other.render(
  <Provider store={store}>
    <App2Container />
  </Provider>
);

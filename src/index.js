import React from "react";
import ReactDOM from "react-dom";
import "./Styles/reset.scss";
import "./Styles/common.scss";
import Route from "./Route";
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./Styles/reset.scss";
import "./Styles/common.scss";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import Route from "./Route";
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Nav />
    <Route />
    <Footer />
  </Provider>,
  document.getElementById("root")
);

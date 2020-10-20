import React from "react";
import ReactDOM from "react-dom";
import "./Styles/reset.scss";
import "./Styles/common.scss";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import Route from "./Route";

ReactDOM.render(
  <>
    <Nav />
    <Route />
    <Footer />
  </>,
  document.getElementById("root")
);

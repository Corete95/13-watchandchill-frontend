import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Rating from "./pages/Rating/Rating";
import Users from "./pages/Users/Users";
import Contents from "./pages/Contents/Contents";
import Nav from "./components/Nav/Nav";
// import Footer from "./components/";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/rating" component={Rating} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/contents" component={Contents} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;

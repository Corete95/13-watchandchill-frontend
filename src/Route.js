import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./components/Nav/Profile";
import Rating from "./pages/Rating/Rating";
import Profile from "./components/Nav/Profile";
import Contents from "./pages/Contents/Contents";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/rating" component={Rating} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/:name" component={Profile} />
          <Route exact path="/contents" component={Contents} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Rating from "./pages/Rating/Rating";
import Users from "./pages/Users/Users";
import Contents from "./pages/Contents/Contents";
import Analysis from "./pages/Analysis/Analysis";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/users/analysis" component={Analysis} />
          <Route exact path="/" component={Main} />
          <Route exact path="/rating" component={Rating} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/contents" component={Contents} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

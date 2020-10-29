import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Main from "./pages/Main/Main";
import Rating from "./pages/Rating/Rating";
import Users from "./pages/Users/Users";
import Contents from "./pages/Contents/Contents";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import Analysis from "./pages/Analysis/Analysis";
import People from "./pages/People/People";

class Routes extends Component {
  state = {
    navHidden: false,
    footerHidden: false,
    transparent: true,
  };

  isFooterHidden = props => {
    this.setState({
      navHidden: !props,
      footerHidden: props
    });
  };

  isNavFooterHidden = props => {
    this.setState({
      navHidden: props,
      footerHidden: props
    });
  };


  isTransparent = props => {
    this.setState({
      transparent: props
    })
  }

  render() {
    const { navHidden, footerHidden, transparent } = this.state;
    const { isNavFooterHidden, isFooterHidden, isTransparent } = this;
    return (
      <Router>
        {!navHidden && <Nav transparent={transparent}  />}
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route
            exact
            path="/users/analysis"
            render={() => <Analysis hidden={isNavFooterHidden} />}
          />
          <Route
            exact
            path="/rating"
            render={() => <Rating hidden={isFooterHidden} />}
          />
          <Route exact path="/users" component={Users} />
          <Route 
          exact 
          path="/contents"
          render={() => <Contents 
          transparent={transparent}
          isTransparent={isTransparent} />} />

          <Route exact path="/people/:id" render={
            () => <People hidden={isFooterHidden} />
          } />
          <Route exact path="/contents/:id" component={Contents} />
        </Switch>
        {!footerHidden && <Footer />}
      </Router>
    );
  }
}

export default Routes;

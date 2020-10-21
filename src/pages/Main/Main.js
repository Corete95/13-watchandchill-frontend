import React, { Component } from "react";
import "./Main.scss";
import Login from "../../components/Nav/Login";
import Signup from "../../components/Nav/Signup";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalOpen: false,
      signupModalOpen: false
    };
  }

  loginOpen = () => {
    this.setState({ loginModalOpen: true });
  };

  loginClose = () => {
    this.setState({ loginModalOpen: false });
  };

  signupOpen = () => {
    this.setState({ signupModalOpen: true });
  };

  signupClose = () => {
    this.setState({ signupModalOpen: false });
  };

  render() {
    const { loginModalOpen, signupModalOpen } = this.state;
    const { loginOpen, loginClose, signupOpen, signupClose } = this;
    return (
      <>
        <button onClick={loginOpen}>login</button>
        <button onClick={signupOpen}>signup</button>

        <Login open={loginModalOpen} close={loginClose} />
        <Signup open={signupModalOpen} close={signupClose} />
      </>
    );
  }
}

export default Main;

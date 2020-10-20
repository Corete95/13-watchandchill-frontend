import React, { Component } from "react";
import "./Main.scss";
import Login from "../../components/Nav/Login";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    return (
      <>
        <button onClick={this.openModal}>Check</button>
        <button onClick={this.openModal}>signup</button>

        <Login open={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}

export default Main;

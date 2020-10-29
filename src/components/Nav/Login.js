import React, { Component } from "react";
import "./Login.scss";
import Password from "./Password";
import FacebookLogin from "react-facebook-login";
import Signup from "./Signup";
import { Redirect } from "react-router-dom";
const API = "http://10.58.5.88:8000/user/login";

class Login extends Component {
  constructor(props) {
    super(props);

    let loggedIn = false;
    this.state = {
      passWordModal: false,
      signupModalOpen: false,
      email: "",
      passWord: "",
      loggedIn
    };
  }

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  signupOpen = () => {
    this.setState({ signupModalOpen: true });
  };

  signupClose = () => {
    this.setState({ signupModalOpen: false });
  };

  passWordOpen = () => {
    this.setState({ passWordModal: true });
  };

  passWordClose = () => {
    this.setState({ passWordModal: false });
  };

  loginClose = (event) => {
    if (event.target.className === "loginOutLine") {
      this.props.close();
    }
  };

  signupMove = () => {
    this.props.close();
    this.signupOpen();
  };

  mainMove = () => {
    this.props.isLogin(true);
  };

  goToMain = () => {
    const { email, passWord } = this.state;
    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        email,
        password: passWord
      })
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.MESSAGE === "SUCCESS") {
          localStorage.setItem("token", result.AUTHORIZATION);
          this.props.isLogin(true);
          this.setState({ loggedIn: true });
          alert("로그인을 축하드립니다!");
        } else if (result.MESSAGE === "EMAIL_OVERLAP") {
          alert("로그인 불가");
        }
      });
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/" />;
    }
    const responseFacebook = (response) => {};
    return (
      <>
        {this.props.open ? (
          <div className="loginModal" onClick={this.loginClose}>
            <div className="loginOutLine">
              <div className="loginBox">
                <div className="modalContents">
                  <img className="loginLogo" src="watcha.png" />
                  <h2>로그인</h2>
                  <div className="loginInput">
                    <input
                      onChange={this.handleInput}
                      className="loginId"
                      name="email"
                      type="email"
                      placeholder="이메일"
                    />
                    <input
                      onChange={this.handleInput}
                      className="loginPw"
                      name="passWord"
                      type="password"
                      placeholder="비밀번호"
                    />
                  </div>
                  <div className="loginButton">
                    <button onClick={this.mainMove}>로그인</button>
                  </div>
                  <div className="pwButton">
                    <button onClick={this.passWordOpen}>
                      비밀번호를 잊어버리셨나요?
                    </button>
                  </div>
                  <div className="signUp">
                    계정이 없으신가요?
                    <button onClick={this.signupMove}>회원가입</button>
                  </div>
                  <hr className="or"></hr>
                  <FacebookLogin
                    appId="398023271207171"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="faceBookBtn"
                    textButton="Facebook 으로 로그인"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {this.state.passWordModal && (
          <Password
            open={this.state.passWordModal}
            close={this.passWordClose}
          />
        )}

        {this.state.signupModalOpen && (
          <Signup open={this.state.signupModalOpen} close={this.signupClose} />
        )}
      </>
    );
  }
}

export default Login;

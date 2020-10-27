import React, { Component } from "react";
import "./Signup.scss";
import FacebookLogin from "react-facebook-login";
import Login from "../Nav/Login";

const API = "http://10.58.5.88:8000/user";

class Signup extends Component {
  state = {
    loginModalOpen: false,
    name: "",
    email: "",
    passWord: "",
    isNameValid: false,
    isEmailValid: false,
    isPasswordValid: false
  };

  loginOpen = () => {
    this.setState({ loginModalOpen: true });
  };

  loginClose = () => {
    this.setState({ loginModalOpen: false });
  };

  signClose = (event) => {
    if (event.target.className === "signUpOutLine") {
      this.props.close();
    }
  };

  loginMove = () => {
    this.props.close();
    this.loginOpen();
  };

  valiDateName = (name) => {
    const isNameValid = name.length > 1;
    this.setState({
      isNameValid,
      name
    });
  };

  isNameValid = () => {
    const { name, isNameValid } = this.state;
    if (name) return isNameValid;
  };

  valiDateEmail = (email) => {
    const emailRegp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = email.match(emailRegp) ? true : false;
    this.setState({
      isEmailValid,
      email
    });
  };

  isEmailValid = () => {
    const { email, isEmailValid } = this.state;
    if (email) return isEmailValid;
  };

  valiDatePassword = (passWord) => {
    const passwordRegp = /^[A-Za-z0-9]{6,12}$/;
    const isPasswordValid = passWord.match(passwordRegp) ? true : false;
    this.setState({
      isPasswordValid,
      passWord
    });
  };

  isPasswordValid = () => {
    const { passWord, isPasswordValid } = this.state;
    if (passWord) return isPasswordValid;
  };

  allValid = () => {
    const { isNameValid, isEmailValid, isPasswordValid } = this.state;
    return isNameValid && isEmailValid && isPasswordValid;
  };

  inputClassName = (boolean) => {
    switch (boolean) {
      case true:
        return "inputGreen";
      case false:
        return "inputRed";
      default:
        return "";
    }
  };

  signupComplete = (e) => {
    const { name, email, passWord } = this.state;

    if (this.allValid) {
      fetch(API, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password: passWord
        })
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.MESSAGE === "SUCCESS") {
            alert("회원가입을 축하드립니다!");
          } else if (result.MESSAGE === "EMAIL_OVERLAP") {
            alert("이미 가입된 계정입니다.");
          }
        });
    }
  };

  render() {
    const responseFacebook = (response) => {};
    return (
      <>
        {this.props.open ? (
          <div className="signUpModal">
            <div
              className="signUpOutLine"
              name="signup"
              onClick={this.signClose}
            >
              <div className="signUpBox">
                <div className="modalContents">
                  <img src="watcha.png" />
                  <h2>회원가입</h2>
                  <div className="signUpInput">
                    <input
                      className={`input ${this.inputClassName(
                        this.isNameValid()
                      )}`}
                      type="text"
                      placeholder="이름"
                      onChange={(e) => this.valiDateName(e.target.value)}
                    />
                    <input
                      className={`input ${this.inputClassName(
                        this.isEmailValid()
                      )}`}
                      type="email"
                      placeholder="이메일"
                      onChange={(e) => this.valiDateEmail(e.target.value)}
                    />
                    <input
                      className={`input ${this.inputClassName(
                        this.isPasswordValid()
                      )}`}
                      type="password"
                      placeholder="비밀번호"
                      onChange={(e) => this.valiDatePassword(e.target.value)}
                    />
                  </div>
                  <button className="language" type="button">
                    <span className="iconEarth"></span>한국어(대한민국)
                    <span className="iconArrow"></span>
                  </button>
                  <div className="signUpButton">
                    <button onClick={this.signupComplete}>회원가입</button>
                  </div>
                  <div className="signUp">
                    이미 가입하셨나요?
                    <button onClick={this.loginMove}>로그인</button>
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
        {this.state.loginModalOpen && (
          <Login open={this.state.loginModalOpen} close={this.loginClose} />
        )}
      </>
    );
  }
}

export default Signup;

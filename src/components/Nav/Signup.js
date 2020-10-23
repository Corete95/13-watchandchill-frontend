import React, { Component } from "react";
import "./Signup.scss";
import FacebookLogin from "react-facebook-login";
import Login from "../Nav/Login";

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

  signClose = ({ target }) => {
    if (target.className === "signup_outline") {
      this.props.close();
    }
  };

  loginMove = () => {
    this.props.close();
    this.loginOpen();
  };

  valiDateName = name => {
    if (name.length > 1) {
      this.setState({
        isNameValid: true,
        name
      });
    } else {
      this.setState({
        isNameValid: false,
        name
      });
    }
  };

  isNameValid = () => {
    const { name, isNameValid } = this.state;
    if (name) return isNameValid;
  };

  valiDateEmail = email => {
    const emailRegp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(emailRegp)) {
      this.setState({
        isEmailValid: true,
        email
      });
    } else {
      this.setState({
        isEmailValid: false,
        email
      });
    }
  };

  isEmailValid = () => {
    const { email, isEmailValid } = this.state;
    if (email) return isEmailValid;
  };

  valiDatePassword = passWord => {
    const passwordRegp = /^[A-Za-z0-9]{6,12}$/;
    if (passWord.match(passwordRegp)) {
      this.setState({
        isPasswordValid: true,
        passWord
      });
    } else {
      this.setState({
        isPasswordValid: false,
        passWord
      });
    }
  };

  isPasswordValid = () => {
    const { passWord, isPasswordValid } = this.state;
    if (passWord) return isPasswordValid;
  };

  allValid = () => {
    const { isNameValid, isEmailValid, isPasswordValid } = this.state;
    return isNameValid && isEmailValid && isPasswordValid;
  };

  inputClassName = boolean => {
    switch (boolean) {
      case true:
        return "input_green";
      case false:
        return "input_red";
      default:
        return "";
    }
  };

  signupComplete = e => {
    const { name, email, passWord } = this.state;

    if (this.allValid) {
      const API = "http://ip/user/signup";
      fetch(API, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password: passWord
        })
      })
        .then(response => response.json())
        .then(result => {
          if (result.message == "SUCCESS") {
            alert("회원가입을 축하드립니다!");
            console.log("백엔드에서 오는 응답 메세지:", result);
          } else if (result.message == "NOOO") {
            alert("이미 가입된 계정입니다.");
          }
        });
    }
  };

  render() {
    const responseFacebook = response => {};
    return (
      <>
        {this.props.open ? (
          <div className="signup_modal">
            <div className="signup_outline" onClick={this.signClose}>
              <div className="signup_box">
                <div className="modal_contents">
                  <img src="watcha.png" />
                  <h2>회원가입</h2>
                  <div className="signup_input">
                    <input
                      className={`input ${this.inputClassName(
                        this.isNameValid()
                      )}`}
                      type="text"
                      placeholder="이름"
                      onChange={e => this.valiDateName(e.target.value)}
                    />
                    <input
                      className={`input ${this.inputClassName(
                        this.isEmailValid()
                      )}`}
                      type="email"
                      placeholder="이메일"
                      onChange={e => this.valiDateEmail(e.target.value)}
                    />
                    <input
                      className={`input ${this.inputClassName(
                        this.isPasswordValid()
                      )}`}
                      type="password"
                      placeholder="비밀번호"
                      onChange={e => this.valiDatePassword(e.target.value)}
                    />
                  </div>
                  <button className="language" type="button">
                    <span className="icon_earth"></span>한국어(대한민국)
                    <span className="icon_arrow"></span>
                  </button>
                  <div className="signup_button">
                    <button onClick={this.signupComplete}>회원가입</button>
                  </div>
                  <div className="signup">
                    이미 가입하셨나요?
                    <button onClick={this.loginMove}>로그인</button>
                  </div>
                  <hr className="or"></hr>
                  <FacebookLogin
                    appId="398023271207171"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="facebook_btn"
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

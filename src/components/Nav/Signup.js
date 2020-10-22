import React, { Component } from "react";
import "./Signup.scss";
import FacebookLogin from "react-facebook-login";
import Login from "../Nav/Login";

class Signup extends Component {
  state = {
    loginModalOpen: false,
    name: "",
    email: "",
    passWord: ""
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
                      className="signup_name"
                      type="text"
                      placeholder="이름"
                    />
                    <input
                      className="signup_id"
                      type="email"
                      placeholder="이메일"
                    />
                    <input
                      className="signup_pw"
                      type="password"
                      placeholder="비밀번호"
                    />
                  </div>
                  <button className="language" type="button">
                    <span className="icon_earth"></span>한국어(대한민국)
                    <span className="icon_arrow"></span>
                  </button>
                  <div className="signup_button">
                    <button>회원가입</button>
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

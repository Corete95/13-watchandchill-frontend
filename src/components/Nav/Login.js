import React, { Component } from "react";
import "./Login.scss";
import Password from "./Password";
import FacebookLogin from "react-facebook-login";
import Signup from "./Signup";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passWordModal: false,
      signupModalOpen: false,
      email: "",
      passWord: ""
    };
  }

  handeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handePw = event => {
    this.setState({ passWord: event.target.value });
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

  loginClose = ({ target }) => {
    if (target.className === "login_outline") {
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

    const API = "http://ip/user/";
    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        email,
        password: passWord
      })
    })
      .then(response => response.json())
      .then(result => {
        if (result.message == "SUCCESS") {
          localStorage.setItem("token", result.token);
          alert("로그인을 축하드립니다!");
          console.log("백엔드에서 오는 응답 메세지:", result);
          this.mainMove();
        } else if (result.message == "NOOO") {
          alert("로그인 불가");
        }
      });
  };

  render() {
    const responseFacebook = response => {};
    return (
      <>
        {this.props.open ? (
          <div className="login_modal" onClick={this.loginClose}>
            <div className="login_outline">
              <div className="login_box">
                <div className="modal_contents">
                  <img className="login_logo" src="watcha.png" />
                  <h2>로그인</h2>
                  <div className="login_input">
                    <input
                      onChange={this.handeEmail}
                      className="login_id"
                      type="email"
                      placeholder="이메일"
                    />
                    <input
                      onChange={this.handePw}
                      className="login_pw"
                      type="password"
                      placeholder="비밀번호"
                    />
                  </div>
                  <div className="login_button">
                    <button onClick={this.mainMove}>로그인</button>
                  </div>
                  <div className="pw_button">
                    <button onClick={this.passWordOpen}>
                      비밀번호를 잊어버리셨나요?
                    </button>
                  </div>
                  <div className="signup">
                    계정이 없으신가요?
                    <button onClick={this.signupMove}>회원가입</button>
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

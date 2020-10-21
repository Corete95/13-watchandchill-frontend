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

  asdasddsa = () => {};

  render() {
    const responseFacebook = response => {};
    return (
      <>
        {this.props.open ? (
          <div className="login_modal">
            <div>
              <div className="login_box">
                <div className="modal_contents">
                  <img className="login_logo" src="watcha.png" />
                  <h2>로그인</h2>
                  <div className="login_input">
                    <input
                      className="login_id"
                      type="email"
                      placeholder="이메일"
                    />
                    <input
                      className="login_pw"
                      type="password"
                      placeholder="비밀번호"
                    />
                  </div>
                  <div className="login_button">
                    <button>로그인</button>
                  </div>
                  <div className="pw_button">
                    <button onClick={this.passWordOpen}>
                      비밀번호를 잊어버리셨나요?
                    </button>
                  </div>
                  <div className="signup">
                    계정이 없으신가요?
                    <button onClick={this.signupOpen}>회원가입</button>
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

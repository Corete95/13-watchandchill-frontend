import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  state = {
    email: "",
    passWord: ""
  };

  render() {
    return (
      <>
        {this.props.open ? (
          <div className="login_modal">
            <div onClick={this.props.close}>
              <div className="login_modal">
                <div className="modalContents" onClick={this.props.open}>
                  <img className="login_logo" src="watcha.png" />
                  <h2>로그인</h2>
                  <div className="login_input">
                    <input
                      className="login_id"
                      type="text"
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
                    <button>비밀번호를 잊어버리셨나요?</button>
                  </div>
                  <div className="signup">
                    계정이 없으신가요?
                    <button>회원가입</button>
                  </div>
                  <hr className="or"></hr>
                  <button className="facebook_btn">Facebook 으로 로그인</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Login;

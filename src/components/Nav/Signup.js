import React, { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    passWord: ""
  };

  render() {
    return (
      <>
        {this.props.open ? (
          <div className="signup_modal">
            <div onClick={this.props.close}>
              <div className="login_modal">
                <div className="modalContents" onClick={this.props.open}>
                  <img className="login_logo" src="watcha.png" />
                  <h2>회원가입</h2>
                  <div className="login_input">
                    <input
                      className="login_name"
                      type="text"
                      placeholder="이름"
                    />
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
                  <button className="language" type="button">
                    <span className="icon_earth"></span>한국어(대한민국)
                    <span className="icon_arrow"></span>
                  </button>
                  <div className="login_button">
                    <button>회원가입</button>
                  </div>
                  <div className="signup">
                    이미 가입하셨나요?
                    <button>로그인</button>
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

export default Signup;

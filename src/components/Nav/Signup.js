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
              <div className="signup_box">
                <div className="modal_contents" onClick={this.props.open}>
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

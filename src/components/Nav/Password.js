import React, { Component } from "react";
import "./Password.scss";

class Password extends Component {
  passWordClose = ({ target }) => {
    if (target.className === "pwModal") {
      this.props.close();
    }
  };

  render() {
    return (
      <>
        <div className="pwModal" onClick={this.passWordClose}>
          <div className="pwBox">
            <div className="pwContents">
              <button onClick={this.props.close}></button>
              <div className="pwText">비밀번호 재설정</div>
            </div>
            <div className="centerText">
              <h2>비밀번호를 잊으셨나요?</h2>
              <p>가입했던 이메일을 적어주세요.</p>
              <p>입력하신 이메일 주소로 비밀번호 변경 메일을 보낼게요</p>
            </div>
            <div className="emailInput">
              <input type="email" placeholder="이메일(example@gmail.com)" />
              <button>비밀번호 변경 이메일 보내기</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Password;

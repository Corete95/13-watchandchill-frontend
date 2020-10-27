import React, { Component } from "react";
import "./Button.scss";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      addBtnClicked: false,
      dropdownBtnClicked: false,
      dropdownBtnColorChanged: false,
      commentBtnClicked: false
    };
  }
  render() {
    const { actorInfo } = this.props;
    return (
      <div className="Button">
        {this.state.addBtnClicked && (
          <div className="commentBox">
            <span>김지안 님의 생각을 글로 적어보세요.</span>
            <button
              onClick={() => {
                this.setState({
                  commentBtnClicked: true
                });
              }}
            >
              코멘트 남기기
            </button>
            {this.state.commentBtnClicked && <div>comment modal</div>}
          </div>
        )}
      </div>
    );
  }
}

export default Button;

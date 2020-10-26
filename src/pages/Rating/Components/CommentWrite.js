import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../../store";

class CommentWrite extends Component {
  componentDidMount() {
    window.addEventListener("click", this.props.handleClickOutside);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.props.handleClickOutside);
  }

  commentValueChanges = e => {
    this.props.CommentValueChange(e.target.value);
  };

  render() {
    const { title, handleClickOutside, commentValue } = this.props;
    return (
      <div className="CommentWrite">
        <div className="CommentWriteHeader">
          <div className="CloseBtn" onClick={handleClickOutside}>
            X
          </div>
          <span className="MovieTitle">{title}</span>
          <span
            className="CommentBtn"
            disabled={commentValue.length > 0 ? false : true}
          >
            코멘트 작성
          </span>
        </div>
        <div className="CommentWriteDesc">
          <textarea
            value={commentValue}
            onChange={this.commentValueChanges}
            placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
          ></textarea>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    commentValue: state.commentValue
  };
}

function mapDispatchToProps(dispatch) {
  return {
    CommentValueChange: comment =>
      dispatch(actionCreators.CommentValueChange(comment))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentWrite);

import React, { Component } from "react";
import { connect } from "react-redux";
import CommentWrite from "./CommentWrite";
import { actionCreators } from "../../../store";
import {
  pinkFlag,
  normalFlag,
  blueEye,
  normalEye,
  talkIcon,
  banIcon
} from "./Datas.js";

class MovieInfo extends Component {
  handleModal = () => {
    this.props.ChangeMovieInfo(false);
    this.props.ChangeCommentWrite(false);
  };

  handleClickOutside = ({ target }) => {
    if (target.className === "MovieInfo" || target.className === "close_btn") {
      this.handleModal();
      this.props.CommentValueChange("");
    }
  };

  componentDidMount() {
    window.addEventListener("click", this.handleClickOutside);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.handleClickOutside);
  }

  render() {
    const { title, poster_url, premier_date, status } = this.props.currentMovie;
    const { isCommentWrite, ChangeCommentWrite } = this.props;
    return (
      <div className="MovieInfo">
        <div className="movie_info_wrap">
          <div className="movie_info_header">
            <div className="info_image">
              <span style={{ backgroundImage: `url(${poster_url})` }}></span>
            </div>
            <div className="info_desc">
              <div>{title}</div>
              <span>영화・{premier_date}</span>
            </div>
          </div>
          <div className="movie_info_icon">
            <div>
              <img src={status === "wished" ? pinkFlag : normalFlag} alt="wished" />
              <span>보고싶어요</span>
            </div>
            <div>
              <img src={status === "watching" ? blueEye : normalEye} alt="watching" />
              <span>보는중</span>
            </div>
          </div>
          <div className="movie_info_btn">
            <div onClick={() => ChangeCommentWrite(!isCommentWrite)}>
              <span>코멘트 작성하기</span>
              <img src={talkIcon} alt="comment" />
            </div>
            <div>
              <span>관심없어요</span>
              <img src={banIcon} />
            </div>
          </div>
          <div className="close_btn" onClick={this.handleClickOutside}>
            취소
          </div>
        </div>
        {isCommentWrite && (
          <CommentWrite
            handleClickOutside={this.handleClickOutside}
            title={title}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentMovie: state.currentMovie,
    isMovieInfo: state.isMovieInfo,
    isCommentWrite: state.isCommentWrite,
    commentValue: state.commentValue
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ChangeMovieInfo: movie => dispatch(actionCreators.ChangeMovieInfo(movie)),
    ChangeCommentWrite: comment =>
      dispatch(actionCreators.ChangeCommentWrite(comment)),
    CommentValueChange: value =>
      dispatch(actionCreators.CommentValueChange(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);

import React, { Component } from 'react'
import { connect } from "react-redux";
import { actionCreators } from "../../store";

export class CommentWriteWrap extends Component {

  handleModal = (props) => {

    const {
      id,
      title,
      poster,
      date,
      country,
      genre,
      rating,
      status
    } = this.props;
    this.props.CurrentMovie({ id, title, poster, date, genre, rating, status, country });
    this.props.ChangeMovieInfo(props);
    this.props.ChangeCommentWrite(props);
  };

  handleClickOutside = ({ target }) => {
    console.log(target)
    if (target.className === "MovieInfo" || target.className === "CloseBtn") {
      this.handleModal();
      this.props.CommentValueChange("");
    }
  };

  render() {
    const { isCommentWrite } = this.props;
    return (
      <div onClick={() => this.handleModal(!isCommentWrite)}>
      {this.props.render()}
    </div>
    )
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
    CurrentMovie: movie => dispatch(actionCreators.CurrentMovie(movie)),
    ChangeMovieInfo: movie => dispatch(actionCreators.ChangeMovieInfo(movie)),
    ChangeCommentWrite: comment =>
      dispatch(actionCreators.ChangeCommentWrite(comment)),
    CommentValueChange: value =>
      dispatch(actionCreators.CommentValueChange(value))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentWriteWrap);
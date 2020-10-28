import React, { Component } from 'react'
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

export class InfoModal extends Component {

  
  movieInfoInq = () => {
    const { CurrentMovie, ChangeMovieInfo, handleMovieInfo } = this.props;
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
    CurrentMovie({ id, title, poster, date, genre, rating, status, country });
    ChangeMovieInfo(true);
    handleMovieInfo();
  };
  render() {
    return (
      <div onClick={() => this.movieInfoInq()}>
        {this.props.render()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { isMovieInfo: state.isMovieInfo };
}

function mapDispatchToProps(dispatch) {
  return {
    CurrentMovie: movie => dispatch(actionCreators.CurrentMovie(movie)),
    ChangeMovieInfo: boolean =>
      dispatch(actionCreators.ChangeMovieInfo(boolean))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoModal);

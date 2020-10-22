import React, { Component } from "react";
import "./MovieList.scss";

class MovieList extends Component {
  render() {
    return (
      <>
        <div className="poster_box">
          <div className="poster_image">
            <img href="https://img.movist.com/?img=/x00/05/34/55_p1.jpg"></img>
          </div>
          <div className="movie_info">
            <div className="movie_name">삼진그룹 영어토익반</div>
            <div className="movie_year">2020</div>
            <div className="movie_country">한국</div>
            <divc className="movie_type">장르</divc>
          </div>
        </div>
      </>
    );
  }
}

export default MovieList;

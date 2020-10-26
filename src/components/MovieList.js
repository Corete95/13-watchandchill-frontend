import React, { Component } from "react";
import "./MovieList.scss";

class MovieList extends Component {
  render() {
    return (
      // 컴포넌트 작업 확인차 남겨놓은 주석입니다.
      // <div>
      //   <div className="movie_img">
      //     <div className="movie_poster">
      //       <div className="poster_img">
      //         <img src="/poster.jpeg" alt="poster" />
      //         <div className="movie_title">삼진그룹 영어토익반</div>
      //         <div className="opening_date">10/25/20</div>
      //         <div className="country">한국</div>
      //         <div className="genre">드라마</div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div>
        <div className="movie_img">
          <div className="movie_poster">
            <div className="poster_img">
              <img src={this.props.poster} alt="poster" />
              <div className="movie_title">{this.props.title}</div>
              <div className="opening_date">{this.props.date}</div>
              <div className="country">{this.props.country}</div>
              <div className="genre">{this.props.genre}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;

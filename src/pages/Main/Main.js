import React, { Component } from "react";
import "./Main.scss";
import MovieList from "../../components/MovieList";

// 백엔드와 맞춰보기 위해서 남겨놓은 주석입니다.
// const API = "http://10.58.1.148/movie/list";
const API = "http://localhost:3000/Data/mock.json";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      theater: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(response =>
        this.setState({
          theater: response.movies
        })
      );
  }

  render() {
    return (
      <>
        <div className="movie_list">
          <div className="list_title"> 현재 상영작</div>
          <div className="movie_img">
            {this.state.theater.slice(0, 5).map(movie => {
              return (
                <MovieList
                  key={movie.id}
                  poster={movie.poster}
                  title={movie.title}
                  country={movie.country}
                  date={movie.date}
                  genre={movie.genre}
                />
              );
            })}
          </div>

          <div className="list_title"> 왓챠 인기 영화</div>
          <div className="movie_img">
            {this.state.theater.slice(6, 11).map(movie => {
              return (
                <MovieList
                  key={movie.id}
                  poster={movie.poster}
                  title={movie.title}
                  country={movie.country}
                  date={movie.date}
                  genre={movie.genre}
                />
              );
            })}
          </div>
          <div className="list_title"> 넷플릭스 인기 영화</div>
          <div className="movie_img"></div>
          <div className="list_title"> 한국 인기 영화</div>
          <div className="movie_img"></div>
          <div className="list_title"> 미국 인기 영화</div>
          <div className="movie_img"></div>
          <div className="list_title"> 심장뛰는 액션 영화</div>
          <div className="movie_img"></div>
        </div>
      </>
    );
  }
}

export default Main;

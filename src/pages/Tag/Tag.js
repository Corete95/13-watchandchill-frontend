import React, { Component } from "react";
import "./Tag.scss";
import "./Main.scss";
import Login from "../../components/Nav/Login";
import Signup from "../../components/Nav/Signup";
import MovieList from "../../components/MovieList";

// 백엔드와 맞춰보기 위해서 남겨놓은 주석입니다.
// const API = "http://10.58.4.235:8000/movie/list";
// const API = "http://localhost:3000/Data/mock.json";

class Tag extends Component {
  constructor() {
    super();
    this.state = {
      theater: [],
      watcha: [],
      movies: {}
    };
  }

  // `API`${this.props.match.params.id}
  componentDidMount() {
    fetch(`http://localhost:3000/Data/mock.json`)
      .then((res) => res.json())
      .then((res) => this.setState({ movies: { ...res } }));
  }

  render() {
    return (
      <div className="Tag">
        <div className="listTitle"> 현재 상영작</div>
        <div className="movieImg">
          {this.state.movies.theater &&
            this.state.movies.theater.slice(0, 5).map((movie) => {
              return (
                <MovieList
                  id={movie.id}
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
        <div className="listTitle"> 왓챠 인기 영화</div>
        <div className="movieImg">
          {this.state.movies.watcha &&
            this.state.movies.watcha.slice(0, 5).map((movie) => {
              return (
                <MovieList
                  id={movie.id}
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
        <div className="listTitle"> 넷플릭스 인기 영화</div>
        <div className="movieImg"></div>
        <div className="listTitle"> 한국 인기 영화</div>
        <div className="movieImg"></div>
        <div className="listTitle"> 미국 인기 영화</div>
        <div className="movieImg"></div>
        <div className="listTitle"> 심장뛰는 액션 영화</div>
        <div className="movieImg"></div>
      </div>
    );
  }
}

export default Tag;

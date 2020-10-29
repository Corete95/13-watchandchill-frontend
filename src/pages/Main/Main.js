import React, { Component } from "react";
import "./Main.scss";
// import Login from "../../components/Nav/Login";
// import Signup from "../../components/Nav/Signup";
import MovieList from "../../components/MovieList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// 백엔드와 맞춰보기 위해서 남겨놓은 주석입니다.
const API = "http://10.58.5.157:8000/info/front";
// const API = "http://localhost:3000/Data/mock.json";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      movies: {}
    };
  }
  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((res) => this.setState({ movies: res }));
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2
    };
    return (
      <div className="Main">
        <div className="listTitle"> 현재 상영작</div>
        <div className="movieImg">
          <Slider {...settings} className="sliderContainer">
            {this.state.movies.theater &&
              this.state.movies.theater.map((movie) => {
                return (
                  <MovieList
                    id={movie.id}
                    key={movie.id}
                    poster={movie.poster}
                    title={movie.title}
                    country={movie.country}
                    date={movie.date.slice(0, 4)}
                    genre={movie.genre.join(" ")}
                  />
                );
              })}
          </Slider>
        </div>
        <div className="listTitle"> 왓챠 인기 영화</div>
        <div className="movieImg">
          <Slider {...settings} className="sliderContainer">
            {this.state.movies.watcha &&
              this.state.movies.watcha.slice(0, 11).map((movie) => {
                return (
                  <MovieList
                    id={movie.id}
                    key={movie.id}
                    poster={movie.poster}
                    title={movie.title}
                    country={movie.country}
                    date={movie.date.slice(0, 4)}
                    genre={movie.genre.join(" ")}
                  />
                );
              })}
          </Slider>
        </div>
        <div className="listTitle"> 넷플릭스 인기 영화</div>
        <div className="movieImg">
          <Slider {...settings} className="sliderContainer">
            {this.state.movies.netflix &&
              this.state.movies.netflix.slice(0, 11).map((movie) => {
                return (
                  <MovieList
                    id={movie.id}
                    key={movie.id}
                    poster={movie.poster}
                    title={movie.title}
                    country={movie.country}
                    date={movie.date.slice(0, 4)}
                    genre={movie.genre.join(" ")}
                  />
                );
              })}
          </Slider>
        </div>
        <div className="listTitle"> 한국 인기 영화</div>
        <div className="movieImg">
          <Slider {...settings} className="sliderContainer">
            {this.state.movies.kr &&
              this.state.movies.kr.slice(0, 11).map((movie) => {
                return (
                  <MovieList
                    id={movie.id}
                    key={movie.id}
                    poster={movie.poster}
                    title={movie.title}
                    country={movie.country}
                    date={movie.date.slice(0, 4)}
                    genre={movie.genre.join(" ")}
                  />
                );
              })}
          </Slider>
        </div>
        <div className="listTitle"> 미국 인기 영화</div>
        <div className="movieImg">
          <Slider {...settings} className="sliderContainer">
            {this.state.movies.us &&
              this.state.movies.us.slice(0, 11).map((movie) => {
                return (
                  <MovieList
                    id={movie.id}
                    key={movie.id}
                    poster={movie.poster}
                    title={movie.title}
                    country={movie.country}
                    date={movie.date.slice(0, 4)}
                    genre={movie.genre.join(" ")}
                  />
                );
              })}
          </Slider>
        </div>
        <div className="listTitle"> 심장뛰는 액션 영화</div>
        <div className="movieImg">
          <Slider {...settings} className="sliderContainer">
            {this.state.movies.action &&
              this.state.movies.action.slice(0, 11).map((movie) => {
                return (
                  <MovieList
                    id={movie.id}
                    key={movie.id}
                    poster={movie.poster}
                    title={movie.title}
                    country={movie.country}
                    date={movie.date.slice(0, 4)}
                    genre={movie.genre.join(" ")}
                  />
                );
              })}
          </Slider>
        </div>
      </div>
    );
  }
}
export default Main;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MovieList.scss";

class MovieList extends Component {
  render() {
    console.log(`this.props.title=>${this.props.title}`);
    console.log(`this.props.id=>${this.props.id}`);
    return (
      <div className="MovieList">
        <Link to={`/contents/${this.props.id}`}>
          <div className="movieImg">
            <div className="moviePoster">
              <img className="posterImg" src={this.props.poster} alt="poster" />
              <div className="movieTitle">{this.props.title}</div>
              <div className="openingDate">{this.props.date}</div>
              <div className="country">{this.props.country}</div>
              <div className="genre">{this.props.genre}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default MovieList;

import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import "./MovieList.scss";

class MovieList extends Component {
  render() {
    // console.log(this.props.id);
    return (
      <div
        className="MovieList"
        onClick={() => this.props.history.push(`/contents/${this.props.id}`)}
      >
        <div className="movieImg">
          <div className="moviePoster">
            <div className="posterImg">
              <img src={this.props.poster} alt="poster" />
              <div className="movieTitle">{this.props.title}</div>
              <div className="openingDate">{this.props.date}</div>
              <div className="country">{this.props.country}</div>
              <div className="genre">{this.props.genre}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieList);

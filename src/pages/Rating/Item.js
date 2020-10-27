import React, { Component } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import RatingStar from "./Components/RatingStar";
import { pinkFlag, blueEye } from "./Components/Datas";
import { Link } from "react-router-dom";
import { actionCreators } from "../../store";
import "./Rating.scss";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

class Item extends Component {
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

  isStatus = status => {
    const { date, country } = this.props;
    switch (status) {
      case "Wished": {
        return (
          <div className="Wished">
            <span style={{ backgroundImage: `url(${pinkFlag})` }}></span>
            보고싶어요
          </div>
        );
      }
      case "Watching": {
        return (
          <div className="Watching">
            <span style={{ backgroundImage: `url(${blueEye}) ` }}></span>
            보는중
          </div>
        );
      }
      default: {
        return `${date} ・ ${country}`;
      }
    }
  };

  render() {
    const { title, poster, rating, status } = this.props;
    return (
      <li className="Item">
        <div className="Poster">
          <Link to={`/contents/${id}`}>
            <img src={poster} alt={title} />
          </Link>
        </div>
        <div className="Description">
          <h3>
            {title}
            <div className="Threedot" onClick={() => this.movieInfoInq()}>
              <MoreOutlined />
            </div>
          </h3>
          <div className="DateLeng">{this.isStatus(status)}</div>
          <div className="star">
            <RatingStar rating={rating} />
          </div>
        </div>
      </li>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Item);

import React, { Component } from "react";
import { connect } from "react-redux";
import RatingBox from "./RatingBox";
import Items from "./Items";
import Category from "./Components/Category";
import MovieInfo from "./Components/MovieInfo";
import "./Rating.scss";

class Rating extends Component {
  constructor() {
    super();
    this.state = {
      isModalOn: false
    };
  }

  componentDidMount() {
    this.props.hidden(true);
  }
  handleModal = () => {
    this.setState(
      prevState => {
        return {
          isModalOn: !prevState.isModalOn
        };
      },
      () => {
        if (this.state.isModalOn) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      }
    );
  };
  handleMovieInfo = () => {
    this.setState(prevState => {
      return {
        isMovieInfo: !prevState.isMovieInfo
      };
    });
  };
  handleClickOutside = ({ target }) => {
    if (target.className === "Category") {
      this.handleModal();
    }
  };

  render() {
    const { handleModal, handleClickOutside, handleMovieInfo } = this;
    const { isModalOn } = this.state;
    const { isMovieInfo } = this.props;
    return (
      <section className="Rating">
        <div className="RatingWrap">
          {isModalOn && (
            <Category
              isModalOn={isModalOn}
              handleModal={handleModal}
              handleClickOutside={handleClickOutside}
            />
          )}
          {isMovieInfo && <MovieInfo />}
          <RatingBox handleModal={handleModal} />
          <Items handleMovieInfo={handleMovieInfo} />
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    isMovieInfo: state.isMovieInfo
  };
}

export default connect(mapStateToProps)(Rating);

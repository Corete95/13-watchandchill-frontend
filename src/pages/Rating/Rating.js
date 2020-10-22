import React, { Component, createRef } from "react";
import "./Rating.scss";
import RatingBox from "./RatingBox";
import Items from "./Items";
import Category from "./Components/Category";
import MovieInfo from "./Components/MovieInfo";
import { connect } from 'react-redux';

class Rating extends Component {
  constructor() {
    super()
    this.state = {
      isModalOn: false
    }
  }

  handleModal = () => {
    this.setState((prevState) => {
      return {
      isModalOn: !prevState.isModalOn
      }
    }, () =>  {
      if(this.state.isModalOn) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    })

  }
  handleMovieInfo = () => {
    this.setState((prevState) => {
      return {
        isMovieInfo: !prevState.isMovieInfo
      }
    })
  }
  handleClickOutside = ({target}) =>  {
    if(target.className==="Category") {
      this.handleModal()
    }
  }

  render() {
    const { handleModal, handleClickOutside, handleMovieInfo } = this;
    const { isModalOn } = this.state;
    const { isMovieInfo } = this.props;
    return (
      <section className="Rating">
        <div className="rating_wrap">
          {isModalOn && <Category 
          isModalOn={isModalOn} 
          handleModal={handleModal} 
          handleClickOutside={handleClickOutside}
          />}
          {isMovieInfo && 
          <MovieInfo 
          />}
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
  }
}

export default connect(mapStateToProps)(Rating);

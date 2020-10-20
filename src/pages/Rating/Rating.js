import React, { Component, createRef } from "react";
import "./Rating.scss";
import RatingBox from "./RatingBox";
import Items from "./Items";
import Category from "./Category";
import MovieInfo from "./MovieInfo";
import { connect } from 'react-redux';

class Rating extends Component {
  constructor() {
    super()
    this.state = {
      isModalOn: false
    }
  }

  handleModal = () => {
    console.log('Modal',this.state.isModalOn)
    this.setState((prevState) => {
      return {
      isModalOn: !prevState.isModalOn
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
  modalEl = createRef();

  handleClickOutside = ({target}) =>  {
    console.log(target.innerText)
    if(!this.modalEl.current.contains((target)) && target.className==="Category") {
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
          modalEl={this.modalEl} 
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
  return {isMovieInfo: state.isMovieInfo}
}

export default connect(mapStateToProps)(Rating);

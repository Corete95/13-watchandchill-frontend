import React, { Component } from "react";
import "./Rating.scss";
import RatingBox from "./RatingBox";
import Items from "./Items";
import Category from "./Category";

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

  render() {
    const { handleModal } = this;
    const { isModalOn } = this.state;
    return (
      <section className="Rating">
        <div className="rating_wrap">
          {isModalOn && <Category />}
          <RatingBox handleModal={handleModal} />
          <Items />
        </div>
      </section>
    );
  }
}

export default Rating;

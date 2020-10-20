import React, { Component, createRef } from "react";
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

  modalEl = createRef();

  handleClickOutside = ({target}) =>  {
    if(!this.modalEl.current.contains((target)) && target.className==="Category") {
      this.handleModal()
    }
  }

  render() {
    const { handleModal, handleClickOutside } = this;
    const { isModalOn } = this.state;
    return (
      <section className="Rating">
        <div className="rating_wrap">
          {isModalOn && <Category 
          modalEl={this.modalEl} 
          isModalOn={isModalOn} 
          handleModal={handleModal} 
          handleClickOutside={handleClickOutside}
          />}
          <RatingBox handleModal={handleModal} />
          <Items />
        </div>
      </section>
    );
  }
}

export default Rating;

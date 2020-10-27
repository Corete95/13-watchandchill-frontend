import React, { Component } from "react";
import { CaretDownOutlined, PlusOutlined } from "@ant-design/icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pinkFlag } from "../ActorProfile/data";
import "./Section.scss";
// import Button from "./Button/Button";
// import Rating from "../../Rating/Rating";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      addBtnClicked: false,
      dropdownBtnClicked: false,
      dropdownBtnColorChanged: false,
      commentBtnClicked: false
    };
  }
  render() {
    const { movieInfo } = this.props;

    return (
      <div className="Section">
        <div className="headerBox">
          <div className="background" />
          <img src={movieInfo.coverpic_url} alt="영화 메인 이미지" />
        </div>
        <div className="titleBox">
          <div className="poster">
            <img src={movieInfo.poster_url} />
          </div>
          <div className="info">
            <h1>{movieInfo.title}</h1>
            <div>
              {movieInfo.date} · {movieInfo.genre} · {movieInfo.country}
            </div>
          </div>

          <div className="buttons">
            <button
              onClick={() => {
                this.setState({ addBtnClicked: true });
              }}
              className={
                this.state.addBtnClicked
                  ? "addBtn_clicked dropdownBtn_clicked_color"
                  : "addBtn_not_clicked dropdownBtn_not_clicked_color"
              }
            >
              {this.state.addBtnClicked ? (
                <img src={pinkFlag} className="pinkFlag" />
              ) : (
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              )}
              &nbsp;&nbsp;보고싶어요
            </button>
            <button
              onClick={() => {
                this.setState({ dropdownBtnClicked: true });
              }}
              className="dropdownBtn_not_clicked"
            >
              <CaretDownOutlined className="dropdownIcon" />
            </button>
            {this.state.dropdownBtnClicked && <div>modal</div>}
          </div>
          {/* <span className="rating">평가하기</span> */}
        </div>
      </div>
    );
  }
}

export default Section;

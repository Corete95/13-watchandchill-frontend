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
          <div className="background">
          <img src={movieInfo.coverpic_url} alt="영화 메인 이미지" />
          </div>
        </div>
        <div className="titleBox">
          <div>
          <div className="poster">
            <img src={movieInfo.poster_url} />
          </div>
          <div className="info">
            <h1>{movieInfo.title}</h1>
            <p>
              {movieInfo.date} · {movieInfo.genre} · {movieInfo.country}
            </p>
            <div className="my_rating">평균 ★4.4 (43만명)</div>
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
              )}보고싶어요
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
          </div>
          {/* <span className="rating">평가하기</span> */}
        </div>
        <div className="Button">
        {this.state.addBtnClicked && (
          <div className="commentBox">
            <span>김지안 님의 생각을 글로 적어보세요.</span>
            <button
              onClick={() => {
                this.setState({
                  commentBtnClicked: true
                });
              }}
            >
              코멘트 남기기
            </button>
            {this.state.commentBtnClicked && <div>comment modal</div>}
          </div>
        )}
      </div>
      </div>
          </div>

          
    );
  }
}

export default Section;

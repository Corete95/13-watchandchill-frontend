import React, { Component } from "react";
import { CaretDownOutlined, PlusOutlined } from "@ant-design/icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pinkFlag } from "../ActorProfile/data";
import "./Section.scss";

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
    const { actorInfo } = this.props;

    return (
      <div className="Section">
        <div className="headerBox">
          <div className="darkBox" />
          <img className="mainImage" src={actorInfo.cover} />
        </div>

        <div className="movieTitle">
          <img
            className="poster"
            src="https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1467960957/ywqqu9uz55x8ysn4jupi.jpg"
            alt="인생은 아름다워 poster"
          ></img>

          <div className="desc">
            <h1>인생은 아름다워</h1>
            <div>1997 · 드라마 · 이탈리아</div>
            <div>
              <span>평균 ★4.4(43만명)</span>
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
      </div>
    );
  }
}

export default Section;

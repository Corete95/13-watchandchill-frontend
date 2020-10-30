import React, { Component } from "react";
import "./Info.scss";

class Info extends Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <div className="Info">
        <div className="containerRating">
          <div className="titleRating">내 예상별점</div>
          <div className="descRating">
            <div className="tagDesc">선호하는 태그</div>
            <div className="tagBox">
              <div className="tag">#{movieInfo.tag[0]}</div>
            </div>
          </div>
        </div>
        <div className="containerInfo">
          <div className="titleInfo">
            <div className="titleMain">기본 정보</div>
            <div className="titleMore">더보기</div>
          </div>
          <div className="descInfo">
            <div className="overallInfo">
              <div className="originalName">{movieInfo.title}</div>
              <div className="year">
                {movieInfo.date} · {movieInfo.country} · {movieInfo.genre}
              </div>
              <div className="runningTime">{movieInfo.runtime}</div>
            </div>
            <div className="summary">{movieInfo.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;

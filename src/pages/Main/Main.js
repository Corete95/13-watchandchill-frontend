import React, { Component } from "react";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <>
        <div className="movie_list">
          <div className="box_office_box">
            <div className="box_office">박스오피스</div>
            <div className="movie_poster">
              <div>삼진그룹 영어토익반</div>
            </div>
          </div>
          <div className="">왓챠 영화 순위</div>
          <div></div>
          <div className="">넷플릭스 영화 순위</div>
          <div></div>
          <div className="">평균별점이 높은 작품</div>
          <div></div>
          <div className="">아티스트 그들의 생애</div>
          <div></div>
          <div className="">왓챠피디아 컬렉션</div>
          <div></div>
        </div>
      </>
    );
  }
}

export default Main;

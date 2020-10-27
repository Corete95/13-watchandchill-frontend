import React, { Component } from "react";

import "./Contents.scss";
import ActorProfile from "./ActorProfile/ActorProfile";
// import Collection from "./Collection/Collection";
// import Comment from "./Comment/Comment";
import Section from "./Section/Section";

const API = "http://localhost:3000/data/contents.json";

class Contents extends Component {
  constructor() {
    super();
    this.state = {
      addBtnClicked: false,
      dropdownBtnClicked: false,
      dropdownBtnColorChanged: false,
      commentBtnClicked: false
    };
  }

  componentDidMount() {
    fetch(API, { method: "GET" })
      .then(response => response.json())
      .then(result => {
        this.setState({
          movieInfo: result.movieInformation
        });
      });
  }

  render() {
    const { movieInfo } = this.state;
    
    return (
      <div className="Contents">
        {movieInfo &&  <Section movieInfo={movieInfo}/>}
        <main>
          <article>
            

            <div className="mainContent">
              <div className="containerRating">
                <div className="titleRating">내 예상별점</div>
                <div className="descRating">
                  <div className="tagDesc">선호하는 태그</div>
                  <div className="tags">
                    <div className="firstTag">#명작</div>
                    <div className="secondTag">#가족</div>
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
                    <div className="originalName">La vita è bella</div>
                    <div className="year">1997 · 이탈리아 · 드라마</div>
                    <div className="runningTime">1시간 56분</div>
                  </div>
                  <div className="summary">
                    로마에 갓 상경한 시골 총각 귀도는 운명처럼 만난 여인
                    도라에게 첫눈에 반한다. 넘치는 재치와 유머로 약혼자가 있던
                    그녀를 사로잡은 귀도는 가정을 꾸리며 분신과도 같은 아들
                    조수아를 얻는다. 조수아의 다섯 살 생일, 갑작스레 들이닥친
                    군인들은 귀도와 조수아를 수용소 행 기차에 실어버리고, ...
                  </div>
                </div>
              </div>
              {movieInfo &&
                movieInfo.cast.map(actor => <ActorProfile actorInfo={actor} />)}
              <div className="containerGraph">
                <div className="titleGraph">별점 그래프</div>
                <div className="descGraph">
                  <div>1</div>
                  <div>2</div>
                </div>
              </div>
              <div className="containerComment">
                <div className="titleComment">코멘트</div>
                <div className="descComment"></div>
              </div>
              <div className="containerCollection">
                <div className="titleCollection">이 작품이 담긴 컬렉션</div>
                <div className="descCollection">
                  <div>1</div>
                  <div>2</div>
                </div>
              </div>
              <div className="containerMovie">
                <div className="titleMovie">비슷한 작품</div>
                <div className="descMovie">
                  <div>1</div>
                  <div>2</div>
                </div>
              </div>

              <button>더보기</button>
            </div>
          </article>

          <aside>aside</aside>
        </main>
      </div>
    );
  }
}

export default Contents;

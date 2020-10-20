import React, { Component } from "react";
import "./Contents.scss";

class Contents extends Component {
  render() {
    return (
      <><section>
          <img className="인생은_아름다워_poster"
            src="https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1463551411/mqsgvr-14521.jpg"
            alt="인생은 아름다워 main photo"
          ></img>
          <img
              className="movie_poster"
              src="https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1467960957/ywqqu9uz55x8ysn4jupi.jpg"
              alt="인생은 아름다워 poster"
            ></img>
          <div className="movie_title_section">
            <h1>인생은 아름다워</h1>
            <span>1997 · 드라마 · 이탈리아</span>
            <hr />
            <span>평균 ★4.4 (43만명)</span>
            <hr />
            <button> + 보고싶어요 </button>
            <span className="rating">평가하기</span>
            <span>★★★★★</span>
          </div>
        </section>
      </>
    );
  }
}

export default Contents;

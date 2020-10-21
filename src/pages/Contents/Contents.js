import React, { Component } from "react";
import "./Contents.scss";
import { CaretDownOutlined, PlusOutlined } from "@ant-design/icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contents extends Component {
  render() {
    return (
      <>
        <section>
          <div className="header_box">
            <div className="dark_box-left"></div>
            <div className="dark_box-right"></div>
            <div className="main_image"></div>
          </div>

          <div className="movie_title_section">
            <img
              src="https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1467960957/ywqqu9uz55x8ysn4jupi.jpg"
              alt="인생은 아름다워 poster"
            ></img>

            <div className="movie_title_section-desc">
              <h1>인생은 아름다워</h1>
              <div>1997 · 드라마 · 이탈리아</div>
              <div>
                <span>예상 ★3.6 </span>
                <span>· 평균 ★4.4(43만명)</span>
              </div>
              <div className="buttons">
                <button className="btn_add">
                  <FontAwesomeIcon icon={faPlus} className="plus_icon" />
                  &nbsp;&nbsp;보고싶어요
                </button>
                <button className="btn_dropdown">
                  <CaretDownOutlined />
                </button>
              </div>
              {/* <span className="rating">평가하기</span> */}
            </div>
          </div>
        </section>
        <article>
          <main>
            <div className="my_rating">ddf</div>
            <div className="information"></div>
            <div className="actors"></div>
            <div className="graph"></div>
            <div className="comments"></div>
            <div className="collection"></div>
            <div className="similar_movies">
              <button>더보기</button>
            </div>
          </main>
          <aside></aside>
        </article>
      </>
    );
  }
}

export default Contents;

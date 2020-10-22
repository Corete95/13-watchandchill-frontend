import React, { Component } from "react";
import "./Contents.scss";
import { CaretDownOutlined, PlusOutlined } from "@ant-design/icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pinkFlag } from "./ActorProfile/data";

class Contents extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }
  render() {
    return (
      <>
        <section>
          <div className="header_box">
            <div className="dark_box"></div>
            <div className="main_image"></div>
          </div>

          <div className="movie_title_section">
            <img
              className="movie_title_section-poster"
              src="https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1467960957/ywqqu9uz55x8ysn4jupi.jpg"
              alt="인생은 아름다워 poster"
            ></img>

            <div className="movie_title_section-desc">
              <h1>인생은 아름다워</h1>
              <div>1997 · 드라마 · 이탈리아</div>
              <div>
                <span>평균 ★4.4(43만명)</span>
              </div>
              <div className="buttons">
                <button
                  onClick={() => {
                    this.setState({ clicked: true });
                  }}
                  className={
                    this.state.clicked ? "addBtn-clicked" : "addBtn-not_clicked"
                  }
                >
                  {this.state.clicked ? (
                    <img src={pinkFlag} className="pinkFlag" />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} className="plus_icon" />
                  )}
                  &nbsp;&nbsp;보고싶어요
                </button>
                <button
                  className={
                    this.state.clicked
                      ? "dropdownBtn-clicked"
                      : "dropdownBtn-not_clicked"
                  }
                >
                  <CaretDownOutlined  className="dropdown_icon"/>
                </button>
              </div>
              {/* <span className="rating">평가하기</span> */}
            </div>
          </div>
        </section>
        <main>
          <article>
            {this.state.clicked && (
              <div className="comment_box">
                <span>김지안 님의 생각을 글로 적어보세요.</span>
                <button
                  onClick={() => {
                    this.setState({ clicked: true });
                  }}
                >
                  코멘트 남기기
                  {this.state.added && "코멘트 남기기"}
                </button>
              </div>
            )}
            <div className="main_content">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <button>더보기</button>
            </div>
          </article>

          <aside>aside</aside>
        </main>
      </>
    );
  }
}

export default Contents;

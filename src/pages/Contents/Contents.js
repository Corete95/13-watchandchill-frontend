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
      addBtnClicked: false,
      dropdownBtnClicked: false,
      dropdownBtnColorChanged: false,
      commentBtnClicked: false
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
              className="movie_title_section_poster"
              src="https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1467960957/ywqqu9uz55x8ysn4jupi.jpg"
              alt="인생은 아름다워 poster"
            ></img>

            <div className="movie_title_section_desc">
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
                    <FontAwesomeIcon icon={faPlus} className="plus_icon" />
                  )}
                  &nbsp;&nbsp;보고싶어요
                </button>
                <button
                  onClick={() => {
                    this.setState({ dropdownBtnClicked: true });
                  }}
                  className="dropdownBtn_not_clicked"
                >
                  <CaretDownOutlined className="dropdown_icon" />
                </button>
                {this.state.dropdownBtnClicked && <div>modal</div>}
              </div>
              {/* <span className="rating">평가하기</span> */}
            </div>
          </div>
        </section>
        <main>
          <article>
            {this.state.addBtnClicked && (
              <div className="comment_box">
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

            <div className="main_content">
              <div className="main_content_container_rating">
                <div className="main_content_title_rating">내 예상별점</div>
                <div className="main_content_desc_rating">
                  <div className="tag_desc">선호하는 태그</div>
                  <div className="tags">
                    <div className="first_tag">#명작</div>
                    <div className="second_tag">#가족</div>
                    </div>
                </div>
              </div>
              <div className="main_content_container_info">
                <div className="main_content_title_info">
                  <div className="main_content_title_main">기본 정보</div>
                  <div className="main_content_title_more">더보기</div>
                </div>
                <div className="main_content_desc_info">
                  <div className="overall_info">
                    <div className="original_name">La vita è bella</div>
                    <div className="year">1997 · 이탈리아 · 드라마</div>
                    <div className="running_time">1시간 56분</div>
                  </div>
                  <div className="summary">로마에 갓 상경한 시골 총각 귀도는 운명처럼 만난 여인 도라에게 첫눈에 반한다. 넘치는 재치와 유머로 약혼자가 있던 그녀를 사로잡은 귀도는 가정을 꾸리며 분신과도 같은 아들 조수아를 얻는다. 조수아의 다섯 살 생일, 갑작스레 들이닥친 군인들은 귀도와 조수아를 수용소 행 기차에 실어버리고, ...</div>
                </div>
              </div>
              <div className="main_content_container_actor">
                <div className="main_content_title_actor">출연/제작</div>
                <div className="main_content_desc_actor">
                  <div>1</div>
                  <div>2</div>
                </div>
              </div>
              <div className="main_content_container_graph">
                <div className="main_content_title_graph">별점 그래프</div>
                <div className="main_content_desc_graph">
                  <div>1</div>
                  <div>2</div>
                </div>
              </div>
              <div className="main_content_container_comment">
                <div className="main_content_title_comment">코멘트</div>
                <div className="main_content_desc_comment">
                  <div>1</div>
                  <div>2</div>
                </div>
              </div>
              <div className="main_content_container_collection">
                <div className="main_content_title_collection">
                  이 작품이 담긴 컬렉션
                </div>
                <div className="main_content_desc_collection">
                  <div>1</div>
                  <div>2</div>
                </div>
              </div>
              <div className="main_content_container_movie">
                <div className="main_content_title_movie">비슷한 작품</div>
                <div className="main_content_desc_movie">
                  <div>1</div>
                  <div>2</div>
                </div>
              </div>

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

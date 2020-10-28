import React, { Component, createRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Contents.scss";
import Section from "./Section/Section";
import Info from "./Info/Info";
import ActorProfile from "./ActorProfile/ActorProfile";
import CommentWrite from '../../components/MovieInfo/CommentWrite';
// import Graph from "./Graph/Graph";
// import Comment from "./Comment/Comment";
// import Movies from "./Movies/Movies";

const API = "http://localhost:3000/data/contents.json";

class Contents extends Component {
  constructor() {
    super();
    this.state = {
      slicks: 0,
      addBtnClicked: false,
      dropdownBtnClicked: false,
      dropdownBtnColorChanged: false,
      commentBtnClicked: false,
      currentHandleScroll: 0
    };
  }

  liLength;
  handleScroll = () => {
    this.setState({
      currentHandleScroll: document.documentElement.scrollTop
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    fetch(API, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        this.setState(
          {
            movieInfo: result.movieInformation
          },
          () =>
            (this.liLength =
              parseInt(result.movieInformation.cast.length / 6) * 598)
        );
      });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.querySelector(".Nav").classList.remove("Transpa");
  }
  componentDidUpdate() {
    if (this.state.currentHandleScroll > 0) {
      document.querySelector(".Nav").classList.remove("Transpa");
    } else {
      document.querySelector(".Nav").classList.add("Transpa");
    }
  }

  btnRef = createRef();

  moveRight = () => {
    if (this.state.slicks > -this.liLength) {
      this.setState(
        (prevState) => {
          return { slicks: prevState.slicks - 598 };
        },
        () => {
          this.btnRef.current.style.left = this.state.slicks + "px";
        }
      );
    }
  };

  moveLeft = () => {
    if (this.state.slicks < 0) {
      this.setState(
        (prevState) => {
          return { slicks: prevState.slicks + 598 };
        },
        () => {
          this.btnRef.current.style.left = this.state.slicks + "px";
        }
      );
    }
  };
  handleLike = () => {
    this.setState({
      addBtnClicked: true
    });
  };

  render() {
    const { movieInfo, slicks } = this.state;

    return (
      <div className="Contents">
        {movieInfo && (
          <Section movieInfo={movieInfo} handleLike={this.handleLike} />
        )}

        <body>
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
          <article>
            {movieInfo && <Info movieInfo={movieInfo} />}

            <div className="actors">
              <h2>출연/제작</h2>
              <ul ref={this.btnRef}>
                {movieInfo &&
                  movieInfo.cast.map((actor) => (
                    <ActorProfile actorInfo={actor} />
                  ))}
              </ul>
              {slicks !== 0 && (
                <div className="LeftBar">
                  <div onClick={this.moveLeft}>
                    <LeftOutlined style={{ fontSize: "16px" }} />
                  </div>
                </div>
              )}
              {slicks !== -this.liLength && (
                <div className="RightBar">
                  <div onClick={this.moveRight}>
                    <RightOutlined style={{ fontSize: "16px" }} />
                  </div>
                </div>
              )}
            </div>
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
            <div className="containerMovie">
              <div className="titleMovie">비슷한 작품</div>
              <div className="descMovie">
                <div>1</div>
                <div>2</div>
              </div>
            </div>
          </article>
        </body>
      </div>
    );
  }
}

export default Contents;

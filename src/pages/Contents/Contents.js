import React, { Component, createRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Contents.scss";
import Section from "./Section/Section";
import { withRouter } from 'react-router-dom';
// import CommentBox from "./CommentBox/CommentBox";
// import Tag from "./Tag/Tag";
import Info from "./Info/Info";
import ActorProfile from "./ActorProfile/ActorProfile";
// import Graph from "./Graph/Graph";
// import Comment from "./Comment/Comment";
// import Collection from "./Collection/Collection";
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
    this.props.isTransparent(false);
    window.addEventListener("scroll", this.handleScroll);
    console.log(this.props.history)
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
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentHandleScroll !== this.state.currentHandleScroll) {
      if (this.state.currentHandleScroll > 5) {
        this.props.isTransparent(true);
      } else {
        this.props.isTransparent(false);
      }
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

  render() {
    const { movieInfo, slicks } = this.state;

    return (
      <div className="Contents">
        {movieInfo && <Section movieInfo={movieInfo} />}
        <body>
          <article>
            <div className="Tags"></div>
            {movieInfo && <Info movieInfo={movieInfo} />}

            <h2>출연/제작</h2>
            <div className="actors">
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
          </article>
          <aside>aside</aside>
        </body>
      </div>
    );
  }
}

export default Contents;

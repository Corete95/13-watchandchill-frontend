import React, { Component, createRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Contents.scss";
import Section from "./Section/Section";
import Chart from "../../components/Chart/Chart";
import Info from "./Info/Info";
import ActorProfile from "./ActorProfile/ActorProfile";
import {withRouter} from "react-router-dom";
// import Graph from "./Graph/Graph";
// import Comment from "./Comment/Comment";
// import Movies from "./Movies/Movies";
const API = "http://10.58.5.157:8000/info/movie/";
const API2 = "http://10.58.5.157:8000/info/movies/";
class Contents extends Component {
  constructor() {
    super();
    this.state = {
      slicks: 0,
      addBtnClicked: false,
      dropdownBtnClicked: false,
      dropdownBtnColorChanged: false,
      commentBtnClicked: false,
      currentHandleScroll: 0,
      allMovies: []
    };
  }
  liLength;
  handleScroll = () => {
    this.setState({
      currentHandleScroll: document.documentElement.scrollTop
    });
  };
  componentDidMount() {
    // console.log(this.props.match.params)
    this.props.isTransparent(false)
    window.addEventListener("scroll", this.handleScroll);
    fetch(`${API}${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((result) => {
        this.setState(
          {
            movieInfo: result.movie_information
          },
          () =>
            (this.liLength =
              parseInt(result.movie_information.cast.length / 6) * 598)
        );
      });
    fetch(`${API2}${this.props.match.params.id}/related`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({allMovies: result.relate_movies})
      });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentHandleScroll !== this.state.currentHandleScroll) {
      if (this.state.currentHandleScroll > 5) {
        this.props.isTransparent(true)
      } else {
        this.props.isTransparent(false)
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
          
        <div className="Container">
          <div className="mainArticle">
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
          <article>
            {movieInfo && <Info movieInfo={movieInfo} />}
            <div className="actors">
              <h2>출연/제작</h2>
              <ul ref={this.btnRef}>
                {movieInfo &&
                  movieInfo.cast.map((actor, idx) => (
                    <ActorProfile actorInfo={actor} key={idx} />
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
              <h2>별점 그래프</h2>
              <Chart />
              <div className="descGraph"></div>
            </div>
            <div className="containerMovie">
              <div className="titleMovie">비슷한 작품</div>
              <div className="descMovie">
                {this.state.allMovies
                  .slice(0, 15)
                  .map(({ movieposter_url, title, genre,idx }) => (
                    <div className="movie" key={idx}>
                      <img src={movieposter_url} alt={title} />
                      <span>
                        {title.length > 8 ? title.slice(0, 8) + "..." : title}
                      </span>
                      <p>{genre}</p>
                    </div>
                  ))}
              </div>
            </div>
          </article>
          </div>
          <aside className="aside">
            <div className="galleryTitle">갤러리</div>
            <div className="galleryBox">
              <img
                className="galleryImg"
                src="https://images.unsplash.com/photo-1463595663992-cb0dc1d6403f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1067&q=80"
                alt="movie_image"
              />
              <img
                className="galleryImg"
                src="https://images.unsplash.com/photo-1488693236539-d8f00a91b7ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1058&q=80"
                alt="movie_image"
              />
            </div>
            <div className="videoTitle">동영상</div>
            <div className="videoBox">
              <a href="https://youtu.be/GXs2PXjVcSw">
                <img
                  className="videoImg"
                  src="/thumnail1.jpg"
                  alt="video_thumbnail"
                />
              </a>
              <a href="https://youtu.be/AUIREG5qAQE">
                <img
                  className="videoImg"
                  src="/thumnail2.jpg"
                  alt="video_thumbnail"
                />
              </a>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
export default withRouter(Contents);

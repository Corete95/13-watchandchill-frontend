import React, { Component } from "react";
import { CaretDownOutlined, PlusOutlined } from "@ant-design/icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pinkFlag } from "../ActorProfile/data";
import { connect } from "react-redux";
import InfoModal from '../.././../components/MovieInfo/InfoModal'
import MovieInfo from '../.././../components/MovieInfo/MovieInfo'
import RatingStar from "../../../components/MovieInfo/RatingStar";
import "./Section.scss";
// import Button from "./Button/Button";
// import Rating from "../../Rating/Rating";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      addBtnClicked: false,
      dropdownBtnClicked: false,
      dropdownBtnColorChanged: false,
      commentBtnClicked: false,
    };
  }

  handleMovieInfo = () => {
    this.setState(prevState => {
      return {
        isMovieInfo: !prevState.isMovieInfo
      };
    });
  };

  render() {
    const { id, country, coverpic_url, poster_url, date, genre, title } = this.props.movieInfo;
    const { handleMovieInfo } = this;
    const { isMovieInfo } = this.props;

    return (
      <div className="Section">
        <div className="headerBox">
          <div className="background">
            <img src={coverpic_url} alt="영화 메인 이미지" />
          </div>
        </div>
        <div className="titleBox">
          <div>
            <div className="poster">
              <img src={poster_url} />
            </div>
            <div className="info">
              <h1>{title}</h1>
              <p>
                {date} · {genre} · {country}
              </p>
              <div className="my_rating">평균 ★4.4 (43만명)</div>
              <div className="whatthe">
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
                    <FontAwesomeIcon icon={faPlus} className="plusIcon" />
                  )}
                  보고싶어요
                </button>
                <InfoModal
                  {...this.props.movieInfo}
                  poster={poster_url}
                  handleMovieInfo={handleMovieInfo}
                render={
                  () => (
                    <button                  
                    className="dropdownBtn_not_clicked"
                  >
                    <CaretDownOutlined className="dropdownIcon" />
                  </button>)
                } />               
              </div>
            <span className="star">
             <RatingStar rating={3} />
            </span>
            </div>
            </div>
          </div>
          <div className="Button">

          </div>
        </div>
        {isMovieInfo && <MovieInfo />}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isMovieInfo: state.isMovieInfo
  };
}

export default connect(mapStateToProps)(Section);

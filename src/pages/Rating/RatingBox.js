import React, { Component } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { actionCreators } from "../../store";

class RatingBox extends Component {
  state = {
    ratingCount: 0,
    movieList: {}
  }
  

  API = `http://10.58.5.157:8000/review/get?`

  componentDidMount() {
    const token = localStorage.getItem("token");
    fetch(this.API, {
      headers: {
        AUTHORIZATION: token
      }
    })
    .then((response) => response.json())
    .then((result) => this.setState({
      ratingCount: result.COUNT
    }))
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const token = localStorage.getItem("token");
  //     console.log('왜안받니')
  //     fetch(this.API, {
  //       headers: {
  //         AUTHORIZATION: token
  //       }
  //     })
  //     .then((response) => response.json())
  //     .then((result) => this.setState({
  //       ratingCount: result.COUNT
  //     }))
  // }

  render() {
    const { ratingCount } = this.state;
    const { handleModal, currentCategory } = this.props;
    return (
      <section className="RatingBox">
        <div>
          <h2 className="PickCount">{ratingCount}</h2>
          <p>제가 취향을 알 수 있게, 15개 이상의 작품을 평가해주세요.</p>
          <ul>
            <li className="FocusList">영화</li>
            <li className="NormalList">TV 프로그램</li>
            <li className="NormalList">책</li>
          </ul>
          <div>
            <div className="CategorySelector">
              <button onClick={handleModal}>
                <CaretDownOutlined className="DownBar" />
                <span>{currentCategory}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.category.genre,
    movieList: state.movieList,
    ratingLength: state.ratingLength
  };
}

function mapDispatchToProps(dispatch) {
  return {
    RatingLength: rating => dispatch(actionCreators.RatingLength(rating))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingBox);

import React, { Component } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { actionCreators } from "../../store";

class RatingBox extends Component {
  state = {
    movieList: {}
  }
  //  ratingMessageList = [
  //     {0 : '제가 취향을 알 수 있게, 15개 이상의 작품을 평가해주세요.'},
  //     {2 : '조금씩 당신의 취향을 알아가는 중입니다.'},
  //     {4 : '조금만 더 평가하시면 왓챠가 예측하는 예상별점도 보실 수 있어요.'},
  //     {7 : '이제 조금씩 취향의 윤곽이 드러납니다.'},
  //     {10 : '어떤 작품을 좋아하실지 조금씩 감이 와요.'},
  //     {13 : '평가하신 작품들을 토대로, 좋아하실 작품들을 찾아볼게요.'},
  //     {15 : '15개 달성! 평가를 더 하시면 예상별점이 더 정확해져요.'},
  //     {20 : '더 평가하시기로 마음 먹었군요. 좋아요!'},
  //     {25 : '여기까지 왔으면 30개는 찍어야죠.'},
  //     {30 : '이런 취향이시군요! 알겠어요.'},
  //     {33 : '한번 마음 먹으면 하는 분이시네요.'},
  //     {40 : '기왕 이렇게 된 거 50개까지 달려봐요.'},
  //     {50 : '자 그럼 70개 가볼까요?'},
  //     {60 : '잊힐듯한 그 작품들, 이젠 기록할 때가 되었어요.'},
  //     {70 : '이제 웬만한 친구보다 제가 당신을 더 잘 알걸요?'},
  //     {80 : '제가 무슨 말을 할지 궁금하지 않으세요?'},
  //     {100 : '100개라니! 끈기와 투지에 박수를 보냅니다.'},
  //     {101 : '어떤 작품을 좋아하는지 알면, 어떤 사람인지 알 수 있어요.'}
  //  ]

  componentDidMount() {
    // const { movieList, RatingLength } = this.props;
    // let list = movieList.filter(movie => {
    //   return movie.rating > 0;
    // });
    // RatingLength(list.length);
  }



  render() {
    const { handleModal, ratingLength, currentCategory } = this.props;
    return (
      <section className="RatingBox">
        <div>
          <h2 className="PickCount">{ratingLength}</h2>
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

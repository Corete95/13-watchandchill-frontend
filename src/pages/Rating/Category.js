import React, { Component } from "react";
import { CloseOutlined } from "@ant-design/icons";


class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: {
        event: [
          "랜덤 영화",
          "역대 100만 관객 돌파 영화",
          "왓챠 평균별점 TOP 영화",
          "전세계 흥행 TOP 영화",
          "국내 누적관객수 TOP 영화",
          "전문가 고평점 영화",
          "저예산 독립 영화",
          "스포츠 영화"
        ],
        genre: [
          {
            id:0,
            title:"느와르",
            selected: true,
          },
          {
            id:1,
            title: "슈퍼 히어로",
            selected: false,
          },
          {
            id:2,
            title: "범죄",
            selected: false,
          },
          {
            id:3,
            title: "드라마",
            selected: false,
          },
          {
            id:4,
            title: "코미디",
            selected: false,
          },
          {
            id:5,
            title: "로맨스/멜로",
            selected: false,
          },
          {
            id:6,
            title: "스릴러",
            selected: false,
          },
          {
            id:7,
            title: "로맨틱코미디",
            selected: false,
          },
          {
            id:8,
            title: "전쟁",
            selected: false,
          },
          {
            id:9,
            title: "가족",
            selected: false,
          },
          {
            id:10,
            title: "판타지",
            selected: false,
          },
          {
            id:11,
            title: "액션",
            selected: false,
          },
          {
            id:12,
            title: "SF",
            selected: false,
          },
          {
            id:13,
            title: "애니메이션",
            selected: false,
          },
          {
            id:14,
            title: "다큐멘터리",
            selected: false,
          },
          {
            id:15,
            title: "공포",
            selected: false,
          },
          {
            id:16,
            title: "클래식",
            selected: false,
          }
        ]
      }
    };
  }


  componentDidMount() {
    window.addEventListener('click', this.props.handleClickOutside)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.props.handleClickOutside)
  }

  handleChangeSelected = (id) => {
    this.state.categories.genre.map((category) => {
      if(category.id === id) {
        console.log(category.title)
      }
    })
  }

  render() {
    return (
      <div className="Category">
        <div ref={this.props.modalEl}>
          <header>
            <CloseOutlined
              onClick={this.props.handleModal}
              className="CloseBtn"
            />
            <h3>영화</h3>
          </header>
          <div>
            <ul>
              {/* {this.state.categories.event.map(category => (
                <li>{category}</li>
              ))} */}
              <p>장르</p>
              {this.state.categories.genre.map(category => (
                <li onClick={() => this.handleChangeSelected(category.id)}>{category.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;

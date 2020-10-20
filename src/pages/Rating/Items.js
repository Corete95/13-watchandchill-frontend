import React, { Component } from "react";
import Item from "./Item";

class Items extends Component {
  constructor() {
    super();
    this.state = {
      MovieList: [
        {
          id: 0,
          img:
            "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1602653039/kjdvdyucvpq6mb9kpxbj.jpg",
          name: "삼진그룹 영어 토익반",
          date: 2020,
          leng: "한국"
        },
        {
          id: 0,
          img:
            "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1602653039/kjdvdyucvpq6mb9kpxbj.jpg",
          name: "삼진그룹 영어 토익반",
          date: 2020,
          leng: "한국"
        },
        {
          id: 0,
          img:
            "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1602653039/kjdvdyucvpq6mb9kpxbj.jpg",
          name: "삼진그룹 영어 토익반",
          date: 2020,
          leng: "한국"
        },
        {
          id: 0,
          img:
            "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1602653039/kjdvdyucvpq6mb9kpxbj.jpg",
          name: "삼진그룹 영어 토익반",
          date: 2020,
          leng: "한국"
        },
        {
          id: 0,
          img:
            "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1602653039/kjdvdyucvpq6mb9kpxbj.jpg",
          name: "삼진그룹 영어 토익반",
          date: 2020,
          leng: "한국"
        },
        {
          id: 0,
          img:
            "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1602653039/kjdvdyucvpq6mb9kpxbj.jpg",
          name: "삼진그룹 영어 토익반",
          date: 2020,
          leng: "한국"
        },
        {
          id: 0,
          img:
            "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1602653039/kjdvdyucvpq6mb9kpxbj.jpg",
          name: "삼진그룹 영어 토익반",
          date: 2020,
          leng: "한국"
        }
      ]
    };
  }

  render() {
    return (
      <section className="Items">
        <div>
          <div className="items_wrap">
            <ul>
              {this.state.MovieList.map(movie => (
                <Item {...movie} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Items;

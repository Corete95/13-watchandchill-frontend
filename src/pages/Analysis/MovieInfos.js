import React, { Component, createRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
export class MovieInfo extends Component {
  constructor() {
    super();
    this.state = {
      slicks: 0,
      supervisors: [
        {
          id: 0,
          img:
            "https://images.watcha.net/people/medium/70f163070222e17236c2.jpg?1561521117",
          name: "론 클레멘츠",
          vg: "알라딘"
        },
        {
          id: 1,
          img:
            "https://images.watcha.net/people/medium/a68d932ce122ce92b3c7.jpg?1561521129",
          name: "존 머스커",
          vg: "알라딘"
        },
        {
          id: 2,
          img:
            "https://images.watcha.net/people/medium/7d2d2507658e6b0a68fa.jpg?1574311608",
          name: "수오 마사유키",
          vg: "마이코는 레이디"
        },
        {
          id: 3,
          img:
            "https://images.watcha.net/people/medium/70f163070222e17236c2.jpg?1561521117",
          name: "론 클레멘츠",
          vg: "알라딘"
        },
        {
          id: 4,
          img:
            "https://images.watcha.net/people/medium/a68d932ce122ce92b3c7.jpg?1561521129",
          name: "존 머스커",
          vg: "알라딘"
        },
        {
          id: 5,
          img:
            "https://images.watcha.net/people/medium/7d2d2507658e6b0a68fa.jpg?1574311608",
          name: "수오 마사유키",
          vg: "마이코는 레이디"
        },
        {
          id: 6,
          img:
            "https://images.watcha.net/people/medium/70f163070222e17236c2.jpg?1561521117",
          name: "론 클레멘츠",
          vg: "알라딘"
        },
        {
          id: 7,
          img:
            "https://images.watcha.net/people/medium/a68d932ce122ce92b3c7.jpg?1561521129",
          name: "존 머스커",
          vg: "알라딘"
        }
      ],
      countrys: [
        {
          name: "미국",
          films: 26
        },
        {
          name: "영국",
          films: 24
        },
        {
          name: "일본",
          films: 21
        },
        {
          name: "한국",
          films: 18
        },
        {
          name: "프랑스",
          films: 13
        },
        {
          name: "탄자니아",
          films: 11
        }
      ],
      genres: [
        {
          name: "애니메이션",
          films: 28
        },
        {
          name: "가족",
          films: 28
        },
        {
          name: "모험",
          films: 28
        },
        {
          name: "판타지",
          films: 28
        },
        {
          name: "코믹스",
          films: 28
        },
        {
          name: "드라마",
          films: 28
        },
        {
          name: "음악",
          films: 28
        },
        {
          name: "액션",
          films: 28
        },
        {
          name: "SF",
          films: 28
        },
        {
          name: "로맨스",
          films: 28
        }
      ],
      WatchingTime: 178
    };
  }

  btnRef = createRef();
  moveRight = () => {
    if (this.state.slicks > -1195) {
      this.setState(
        prevState => {
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
        prevState => {
          return { slicks: prevState.slicks + 598 };
        },
        () => {
          this.btnRef.current.style.left = this.state.slicks + "px";
        }
      );
    }
  };
  /**  ul의 left값을 -598px씩 바꾸면 slick 끝일거 같은데 어떻게 바꿔야 할지 감이 잘 안온다.  **/

  render() {
    const { supervisors, countrys, genres, WatchingTime } = this.state;
    return (
      <div className="MovieInfos">
        <div className="MovieInfoInner">
          <div className="LikeSupervisor">
            <h2>선호감독</h2>
            <div className="SupervisorList">
              <ul ref={this.btnRef}>
                {supervisors.map(({ id, img, name, vg }) => (
                  <li key={id}>
                    <div>
                      <img src={img} alt={name} />
                    </div>
                    <div className="SupervisorInfo">
                      <div>
                        <span>{name}</span>
                        <span>100점</span>
                      </div>
                      <p>{vg}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="LeftBar">
                <div onClick={this.moveLeft}>
                  <LeftOutlined style={{ fontSize: "16px" }} />
                </div>
              </div>
              <div className="RightBar">
                <div onClick={this.moveRight}>
                  <RightOutlined style={{ fontSize: "16px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="LikeCountry">
            <h2>영화 선호국가</h2>
            <div>
              {countrys.slice(0, 3).map(({ name, films }) => (
                <div>
                  <h3>{name}</h3>
                  <p>{films} 편</p>
                </div>
              ))}
            </div>
            {countrys.slice(3).map(({ name, films }) => (
              <div>
                <span>{name}</span> <p>{films} 편</p>
              </div>
            ))}
          </div>
          <div className="LikeGenre">
            <h2>영화 선호장르</h2>
            <span>애니메이션 좋아하는 사람 치고 나쁜 사람 없어요</span>
            <div>
              {genres.slice(0, 3).map(({ name, films }) => (
                <div>
                  <h3>{name}</h3>
                  <p>{films} 편</p>
                </div>
              ))}
            </div>
            {genres.slice(3).map(({ name, films }) => (
              <div>
                <span>{name}</span> <p>{films} 편</p>
              </div>
            ))}
          </div>
          <div className="MovieWatchingTime">
            <h2>영화 감상 시간</h2>
            <div>
              <span>{WatchingTime} 시간</span>
              <p>조금 더 시간을 내셔서 영화 보심이 어떠세요?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieInfo;

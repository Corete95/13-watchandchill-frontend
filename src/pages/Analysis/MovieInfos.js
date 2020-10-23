import React, { Component, createRef } from "react";
export class MovieInfo extends Component {
  constructor() {
    super();
    this.state = {
      slicks: 0,
      supervisor: [
        {
          img:
            "https://images.watcha.net/people/medium/70f163070222e17236c2.jpg?1561521117",
          name: "론 클레멘츠",
          vg: "알라딘"
        },
        {
          img:
            "https://images.watcha.net/people/medium/a68d932ce122ce92b3c7.jpg?1561521129",
          name: "존 머스커",
          vg: "알라딘"
        },
        {
          img:
            "https://images.watcha.net/people/medium/7d2d2507658e6b0a68fa.jpg?1574311608",
          name: "수오 마사유키",
          vg: "마이코는 레이디"
        },
        {
          img:
            "https://images.watcha.net/people/medium/70f163070222e17236c2.jpg?1561521117",
          name: "론 클레멘츠",
          vg: "알라딘"
        },
        {
          img:
            "https://images.watcha.net/people/medium/a68d932ce122ce92b3c7.jpg?1561521129",
          name: "존 머스커",
          vg: "알라딘"
        },
        {
          img:
            "https://images.watcha.net/people/medium/7d2d2507658e6b0a68fa.jpg?1574311608",
          name: "수오 마사유키",
          vg: "마이코는 레이디"
        },
        {
          img:
            "https://images.watcha.net/people/medium/70f163070222e17236c2.jpg?1561521117",
          name: "론 클레멘츠",
          vg: "알라딘"
        },
        {
          img:
            "https://images.watcha.net/people/medium/a68d932ce122ce92b3c7.jpg?1561521129",
          name: "존 머스커",
          vg: "알라딘"
        }
      ]
    };
  }

  btnRef = createRef();
  moveRight = () => {
    if (this.state.slicks > -1195) {
      this.setState( (prevState) => {
        return { slicks : prevState.slicks - 598 }
      }, () => {
        this.btnRef.current.style.left = this.state.slicks + 'px';
        
      })
    }
  };

  moveLeft = () => {
    if (this.state.slicks < 0) {
      this.setState( (prevState) => {
        return { slicks : prevState.slicks + 598 }
      }, () => {
        this.btnRef.current.style.left = this.state.slicks + 'px';
      })
    }
  };
  /**  ul의 left값을 -598px씩 바꾸면 slick 끝일거 같은데 어떻게 바꿔야 할지 감이 잘 안온다.  **/

  render() {
    return (
      <div className="MovieInfos">
        <div className="movie_info_inner">
          <div className="movie_like_tag">
            <h2>영화 선호태그</h2>
            <div>
              선호태그 어떻게 만드는거지...?
            </div>
          </div>
          <div className="like_supervisor">
            <h2>선호감독</h2>
            <div className="evev">
              <ul className="sdf" ref={this.btnRef}>
                {this.state.supervisor.map(({ img, name, vg }) => (
                  <li>
                    <div>
                      <img src={img} alt={name} />
                    </div>
                    <div className="supervisor_info">
                      <div>
                        <span>{name}</span>
                        <span>100점</span>
                      </div>
                      <p>{vg}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="left_bar">
                <div onClick={this.moveLeft}>왼쪽</div>
              </div>
              <div className="right_bar">
                <div onClick={this.moveRight}>클릭</div>
              </div>
            </div>
          </div>
          <div className="like_country">
            <h2>영화 선호국가</h2>
            <div>
              <div>
                <h3>미국</h3>
                <p>92점</p>
              </div>
              <div>
                <h3>영국</h3>
                <p>92점</p>
              </div>
              <div>
                <h3>일본</h3>
                <p>92점</p>
              </div>
            </div>
            <div>
              <span>한국</span> <p>72점</p>
            </div>
            <div>
              <span>프랑스</span> <p>65점</p>
            </div>
            <div>
              <span>탄자니아</span> <p>44점</p>
            </div>
          </div>
          <div className="like_genre">
            <h2>영화 선호장르</h2>
            <span>애니메이션 좋아하는 사람 치고 나쁜 사람 없어요</span>
            <div>
              <div>
                <h3>애니메이션</h3>
                <p>99점</p>
              </div>
              <div>
                <h3>가족</h3>
                <p>96점</p>
              </div>
              <div>
                <h3>모험</h3>
                <p>96점</p>
              </div>
            </div>
            <div>
              <span>판타지</span> <p>94점</p>
            </div>
            <div>
              <span>드라마</span> <p>90점</p>
            </div>
            <div>
              <span>코미디</span> <p>88점</p>
            </div>
            <div>
              <span>음악</span> <p>85점</p>
            </div>
            <div>
              <span>액션</span> <p>82점</p>
            </div>
            <div>
              <span>SF</span> <p>80점</p>
            </div>
            <div>
              <span>로맨스</span> <p>78점</p>
            </div>
          </div>
          <div className="movie_watching_time">
            <h2>영화 감상 시간</h2>
            <div>
              <span>178 시간</span>
              <p>조금 더 시간을 내셔서 영화 보심이 어떠세요?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieInfo;

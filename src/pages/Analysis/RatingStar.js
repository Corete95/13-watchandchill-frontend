import React, { Component } from 'react'

export class RatignStar extends Component {
  render() {
    return (
      <div className="RatingStar">
        <div className="rating_star_inner">
          <div className="rating_length">
          <h2>닉네임 님이 평가한 영화들</h2>
          <div>
              <h2>104</h2>
              <p>영화</p>
          </div>
          </div>
          <div className="rating_distribution">
            <h2>별점 분포</h2>
            <div>차트 라이브러리 사용예정</div>
          </div>
        </div>        
      </div>
    )
  }
}

export default RatignStar

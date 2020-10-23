import React, { Component } from 'react';
export class RatignStar extends Component {
 
    
  render() {
    const { nickname } = this.props;
    return (
      <div className="RatingStar">
        <div className="rating_star_inner">
          <div className="rating_length">
          <h2>{nickname} 님이 평가한 영화들</h2>
          <div>
              <h2>104</h2>
              <p>영화</p>
          </div>
          </div>
          <div className="rating_distribution">
            <h2>별점 분포</h2>
            <div>
              라이브러리 사용 대기중
            </div>
          </div>
        </div>        
      </div>
    )
  }
}

export default RatignStar

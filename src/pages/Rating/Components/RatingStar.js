import React, { Component } from 'react'
import ReactStars from 'react-stars';
export class RatingStar extends Component {

  ratingChanged = (newRating) => {
    console.log(newRating)
    if(this.props.rating === newRating) {
      // onClick시 기존 rating값과 현재 누른 rating값이 같다면 rating을 0으로 만들기
    }
  }
 
  render() {
    return (
      <div>
         <ReactStars
            count={5}
            value={this.props.rating}
            onChange={this.ratingChanged}
            size={45}
            color1={'#eeeeee'}
            color2={'#ffdd63'}
          />
      </div>
    )
  }
}

export default RatingStar

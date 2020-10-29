import React, { Component } from "react";
import ReactStars from "react-stars";
export class RatingStar extends Component {

  API = `http://10.58.5.157:8000/review/rating`;

  ratingChanged = newRating => {
    const token = localStorage.getItem("token");
      fetch(this.API,  {
        method: "POST",
        headers: {
          AUTHORIZATION: token
        },
        body: JSON.stringify({
          movie_id: this.props.id,
          star_rating : newRating
        })
      })
      .then(() => window.location.reload() )
  };

  render() {
    return (
      <div>
        <ReactStars
          count={5}
          value={this.props.rating}
          onChange={this.ratingChanged}
          size={42}
          color1={"#eeeeee"}
          color2={"#ffdd63"}
        />
      </div>
    );
  }
}

export default RatingStar;

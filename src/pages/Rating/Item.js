import React, { Component } from "react";
import "./Item.scss";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import Rating from 'react-rating'

class Item extends Component {
  render() {
    const { name, img, date, leng } = this.props;
    return (
      <li className="Item">
        <div className="poster">
          <img src={img} alt="" />
        </div>
        <div className="description">
          <h3>{name}</h3>
          <div className="dateleng">
            {date} ・ {leng}{" "}
          </div>
          <div className="star">
          <Rating
          style={{ color: 'gray'}}
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          fractions={2}
/>
          </div>
        </div>
        {/* link */}
      </li>
    );
  }
}

export default Item;

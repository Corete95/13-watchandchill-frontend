import React, { Component } from "react";
import { MoreOutlined } from "@ant-design/icons";
import InfoModal from "../../components/MovieInfo/InfoModal";
import RatingStar from "../../components/MovieInfo/RatingStar";
import { pinkFlag, blueEye } from "../../components/Datas";
import { Link } from "react-router-dom";
import { actionCreators } from "../../store";
import "./Rating.scss";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

class Item extends Component {
  
  isStatus = (status) => {
    const { date, country } = this.props;
    switch (status) {
      case "Wished": {
        return (
          <div className="Wished">
            <span style={{ backgroundImage: `url(${pinkFlag})` }}></span>
            보고싶어요
          </div>
        );
      }
      case "Watching": {
        return (
          <div className="Watching">
            <span style={{ backgroundImage: `url(${blueEye}) ` }}></span>
            보는중
          </div>
        );
      }
      default: {
        return `${date} ・ ${country}`;
      }
    }
  };

  render() {
    const {
      id,
      title,
      poster,
      date,
      genre,
      rating,
      status,
      country
    } = this.props;
    return (
      <li className="Item">
        <div className="Poster">
          <Link to={`/contents/${title}`}>
            <img src={poster} alt={title} />
          </Link>
        </div>
        <div className="Description">
          <h3>
            {title}
            <InfoModal
              {...this.props}
              render={() => (
                <div className="Threedot">
                  <MoreOutlined />
                </div>
              )}
            />
          </h3>
          <div className="DateLeng">{this.isStatus(status)}</div>
          <div className="star">
            <RatingStar rating={rating} />
          </div>
        </div>
      </li>
    );
  }
}

export default Item;

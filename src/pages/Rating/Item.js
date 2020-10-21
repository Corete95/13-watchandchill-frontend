import React, { Component } from "react";
import { MoreOutlined } from "@ant-design/icons";
import "./Item.scss";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { actionCreators } from '../../store';
import RatingStar from './Components/RatingStar';
import { connect } from 'react-redux';
import { pinkFlag, blueEye } from './Components/Datas';

class Item extends Component {

  movieInfoInq = () => {
    const { CurrentMovie, ChangeMovieInfo, handleMovieInfo } = this.props;
    const { id, name, img, date, leng, genre, rating, status } = this.props;
    CurrentMovie({ id, name, img, date, genre, rating, status, leng })
    ChangeMovieInfo(true)
    handleMovieInfo()
  }

  isStatus = (status) => {
    const { date, leng } = this.props;
    switch(status) {
      case 'wished' : {
        return (<div className="/">
        <span style={{backgroundImage: `url(${pinkFlag})`}}></span>
        보고싶어요
      </div>)
      }
      case 'watching' : {
        return (<div className="watching">
        <span style={{backgroundImage: `url(${blueEye}) `}}></span>
        보는중
      </div>)
      }
      case null : {
        return `${date} ・ ${leng}`
      }
    }
     }

  render() {
    const { name, img, rating, status } = this.props;
    return (
      <li className="Item">
        <div className="poster">
          <img src={img} alt="" />
          {/* link태그로 해당 영화 상세페이로 이동시키기 */}
        </div>
        <div className="description">
          <h3>{name}
          <div className="threedot" onClick={() => this.movieInfoInq()}>
          <MoreOutlined />
          </div>
          </h3>
          <div className="dateleng">
           {this.isStatus(status)}
          </div>
          <div className="star">
            <RatingStar rating={rating} />
          </div>
        </div>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {isMovieInfo: state.isMovieInfo}  
}

function mapDispatchToProps(dispatch) {
  return {
    CurrentMovie: (movie) => dispatch(actionCreators.CurrentMovie(movie)),
    ChangeMovieInfo: (boolean) => dispatch(actionCreators.ChangeMovieInfo(boolean))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);

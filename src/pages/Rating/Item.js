import React, { Component } from "react";
import { MoreOutlined } from "@ant-design/icons";
import { connect } from 'react-redux';
import RatingStar from './Components/RatingStar';
import { pinkFlag, blueEye } from './Components/Datas';
import { actionCreators } from '../../store';
import "./Rating.scss";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class Item extends Component {

  movieInfoInq = () => {
    const { CurrentMovie, ChangeMovieInfo, handleMovieInfo } = this.props;
    const { id, title, poster_url, date, country, genre, rating, status } = this.props;
    CurrentMovie({ id, title, poster_url, date, genre, rating, status, country })
    ChangeMovieInfo(true)
    handleMovieInfo()
  }

  isStatus = (status) => {
    const { date, country } = this.props;
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
        return `${date} ・ ${country}`
      }
    }
     }

  render() {
    const { title, poster_url, rating, status } = this.props;
    return (
      <li className="Item">
        <div className="poster">
          <img src={poster_url} alt={title} />
          {/* link태그로 해당 영화 상세페이로 이동시키기 */}
        </div>
        <div className="description">
          <h3>{title}
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

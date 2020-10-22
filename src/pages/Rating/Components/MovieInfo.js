import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../../../store';
import CommentWrite from "./CommentWrite";
import { pinkFlag, normalFlag, blueEye, normalEye, talkIcon, banIcon } from './Datas.js'

class MovieInfo extends Component {

  handleModal = () => {
    this.props.ChangeMovieInfo(false)
    this.props.ChangeCommentWrite(false)
  }

  handleClickOutside = ({target}) =>  {
    if(target.className==="MovieInfo"|| target.className==="close_btn") {
      this.handleModal();
      this.props.CommentValueChange('')
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
  }
  
  render() {
    const { name, img, date, status } = this.props.currentMovie;
    const { isCommentWrite, ChangeCommentWrite } = this.props
    return (
      <div className="MovieInfo">
        <div className="movie_info_wrap">
          <div className="movie_info_header">
            <div className="info_image">
          <span style={{ backgroundImage: `url(${img})`}}></span>
            </div>
          <div className="info_desc">
            <div>{name}</div>
            <span>영화・{date}</span>
          </div>
          </div>
          <div className="movie_info_icon">
            <div>
              {status === 'wished' 
              ? <img src={pinkFlag} alt=""/>
              : <img src={normalFlag} alt=""/>
              }
              <span>보고싶어요</span>
              </div>
            <div>
            {status === 'watching' 
            ? <img src={blueEye} alt=""/>
            :
            <img src={normalEye} alt=""/>
  }
            <span>보는중</span></div>
          </div>
          <div className="movie_info_btn">
            <div onClick={() => ChangeCommentWrite(!isCommentWrite)}><span>코멘트 작성하기</span><img src={talkIcon} alt=""/></div>
            <div><span>관심없어요</span><img src={banIcon} /></div>
          </div>
        <div className="close_btn" onClick={this.handleClickOutside}>취소</div>
        </div>
        {isCommentWrite && 
          <CommentWrite handleClickOutside={this.handleClickOutside} name={name}
          />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentMovie: state.currentMovie,
    isMovieInfo: state.isMovieInfo,
    isCommentWrite: state.isCommentWrite,
    commentValue: state.commentValue,
  }  
}

function mapDispatchToProps(dispatch) {
  return {
    ChangeMovieInfo: (movie) => dispatch(actionCreators.
    ChangeMovieInfo(movie)),
    ChangeCommentWrite: (comment) => dispatch(actionCreators.ChangeCommentWrite(comment)),
    CommentValueChange: (value) => dispatch(actionCreators.CommentValueChange(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);

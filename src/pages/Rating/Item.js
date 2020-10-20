import React, { Component } from "react";
import { MoreOutlined } from "@ant-design/icons";
import "./Item.scss";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { actionCreators } from '../../store';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';

class Item extends Component {

  movieInfoInq = () => {
    const { id, name, img, date, leng, genre, rating, status } = this.props;
    this.props.CurrentMovie({ id, name, img, date, genre, rating, status, leng })
    this.props.ChangeMovieInfo(true)
    this.props.handleMovieInfo()
  }

  ratingChanged = (newRating) => {
    console.log(newRating)
  }

  render() {
    const { name, img, date, rating, status, leng } = this.props;
    return (
      <li className="Item">
        <div className="poster">
          <img src={img} alt="" />
        </div>
        <div className="description">
          <h3>{name}
          <div className="threedot" onClick={() => this.movieInfoInq()}>
          <MoreOutlined />
          </div>
          </h3>
          <div className="dateleng">
            {status === 'wished' && 
            <div className="wished">
              <span style={{backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI0ZGMkY2RSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01LjgzNCAyNi4xOTFjMCAuNzg4LjY0NiAxLjMzNiAxLjMzOCAxLjMzNi4yNiAwIC41MjctLjA3OC43NjgtLjI1TDE2IDIxLjUzOGw4LjA2IDUuNzRjLjI0Mi4xNzEuNTA4LjI1Ljc2OS4yNS42OTIgMCAxLjMzOC0uNTQ5IDEuMzM4LTEuMzM3VjguNjNhLjUuNSAwIDAgMC0uNS0uNUg2LjMzNGEuNS41IDAgMCAwLS41LjV2MTcuNTYyek0yNi4xNjcgNC4yOTRjMC0uNzM2LS41OTctMS4zMzMtMS4zMzMtMS4zMzNINy4xNjdjLS43MzYgMC0xLjMzMy41OTYtMS4zMzMgMS4zMzNWNi4xM2EuNS41IDAgMCAwIC41LjVoMTkuMzMzYS41LjUgMCAwIDAgLjUtLjVWNC4yOTR6Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K')`}}></span>
              보고싶어요
            </div>
              }
            {status === 'watching' && 
            <div className="watching">
              <span style={{backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzAwQTBGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiAxMi43NUEzLjI1NCAzLjI1NCAwIDAgMCAxMi43NSAxNmEuNzUuNzUgMCAwIDEtMS41IDBBNC43NTYgNC43NTYgMCAwIDEgMTYgMTEuMjVhLjc1Ljc1IDAgMCAxIDAgMS41bTAtMi42NjdBNS45MjQgNS45MjQgMCAwIDAgMTAuMDgzIDE2IDUuOTI0IDUuOTI0IDAgMCAwIDE2IDIxLjkxNyA1LjkyNCA1LjkyNCAwIDAgMCAyMS45MTYgMTYgNS45MjQgNS45MjQgMCAwIDAgMTYgMTAuMDgzIi8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNiAyMy40MTZjLTQuMDkgMC03LjQxNy0zLjMyNy03LjQxNy03LjQxNyAwLTQuMDg5IDMuMzI3LTcuNDE2IDcuNDE3LTcuNDE2UzIzLjQxNiAxMS45MSAyMy40MTYgMTZjMCA0LjA5LTMuMzI3IDcuNDE3LTcuNDE2IDcuNDE3bTE1LjA2LTguNjU0QzI4LjM0IDguOTg0IDIyLjYyMSA1IDE2IDUgOS4zNzggNSAzLjY2MSA4Ljk4NC45NCAxNC43NjJhMi45MzQgMi45MzQgMCAwIDAgMCAyLjQ3NUMzLjY2MSAyMy4wMTUgOS4zNzggMjcgMTYgMjdjNi42MjEgMCAxMi4zNC0zLjk4NCAxNS4wNi05Ljc2MmEyLjkzNCAyLjkzNCAwIDAgMCAwLTIuNDc1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K') `}}></span>
              보는중
            </div>
            }
            {status === null && `${date} ・ ${leng}`}
          </div>
          <div className="star">
          <ReactStars
            count={5}
            value={rating}
            onChange={this.ratingChanged}
            size={45}
            color1={'#eeeeee'}
            color2={'#ffdd63'}
          />
          </div>
        </div>
        {/* link */}
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

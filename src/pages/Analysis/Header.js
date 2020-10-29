import React, { Component } from 'react'

export class Header extends Component {
  state = {
    myname : '',
    allReviewCount : ''
  }

  API= 'http://10.58.5.157:8000/user/preference'
  componentDidMount() {
    const token = localStorage.getItem("token");
    fetch(this.API, {
      headers: {
        AUTHORIZATION : token
      }
    })
    .then((res) =>  res.json())
    // .then((result) => console.log(result))
    .then((result) => this.setState({
      myname: result.name,
      allReviewCount : result.all_review_count
    }))
  }

  render() {
    const { myname } = this.props;
    return (
      <div className="Header">
              <div className="AnalysisHeaderInner">
                <div className="AnalysisLogo">
                  <span></span>
                </div>
                <h1>
                  <span>취향분석</span>
                  <div className="UserWrap">
                    <div className="UserProfile"></div>
                  </div>
                  <div className="Nickname">{myname}</div>
                </h1>
              </div>
            </div>
    )
  }
}

export default Header

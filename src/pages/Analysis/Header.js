import React, { Component } from 'react'

export class Header extends Component {
  render() {
    const { nickname } = this.props;
    return (
      <div className="Header">
              <div className="analysis_header_inner">
                <div className="analysis_logo">
                  <span></span>
                </div>
                <h1>
                  <span>취향분석</span>
                  <div className="user_wrap">
                    <div className="user_profile"></div>
                  </div>
                  <div className="nickname">{nickname}</div>
                </h1>
              </div>
            </div>
    )
  }
}

export default Header

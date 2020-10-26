import React, { Component } from 'react'

export class Header extends Component {
  render() {
    const { nickname } = this.props;
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
                  <div className="Nickname">{nickname}</div>
                </h1>
              </div>
            </div>
    )
  }
}

export default Header

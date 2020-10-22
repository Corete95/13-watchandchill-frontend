import React, { Component } from 'react';
import Header from './Header';
import RatingStar from './RatingStar';
import MovieInfo from './MovieInfo'
import './Analysis.scss';
class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      nickname : '함준호'
    }
  }

  render() {
    const { nickname } = this.state
    return (
      <section>
        <div className="full_container">
          <div className="analysis_wrap">
            <Header nickname={nickname} />
            <RatingStar nickname={nickname} />
            <MovieInfo />
          </div>
        </div>
        
      </section>
    )
  }
}

export default Analysis

import React, { Component } from 'react';
import Header from './Header';
import RatingStar from './RatingStar';
import './Analysis.scss';

class Analysis extends Component {


  render() {
    return (
      <section>
        <div className="full_container">
          <div className="analysis_wrap">
            <Header />
            <RatingStar />
          </div>
        </div>
        
      </section>
    )
  }
}

export default Analysis

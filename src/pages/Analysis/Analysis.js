import React, { Component } from "react";
import Header from "./Header";
import RatingStar from "./RatingStar";
import MovieInfos from "./MovieInfos";
import "./Analysis.scss";
class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      nickname: "함준호"
    };
  }

  componentDidMount() {
    this.props.hidden(true);
  }

  render() {
    const { nickname } = this.state;
    return (
      <section>
        <div className="FullContainer">
          <div className="AnalysisWrap">
            <Header nickname={nickname} />
            <RatingStar nickname={nickname} />
            <MovieInfos />
          </div>
        </div>
      </section>
    );
  }
}

export default Analysis;

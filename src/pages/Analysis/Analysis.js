import React, { Component } from "react";
import Header from "./Header";
import RatingStar from "./RatingStar";
import MovieInfos from "./MovieInfos";
import "./Analysis.scss";
class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      allReviewCount: 0,
      countrys: [],
      genres: []
    };
    this.API= 'http://10.58.5.157:8000/user/preference';
  }

  componentDidMount() {
    this.props.hidden(true);
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
      allReviewCount : result.all_review_count,
      countrys : result.country_rank,
      genres: result.genre_rank
    }))
  }

  render() {
    const { myname, allReviewCount, countrys, genres } = this.state;
    return (
      <section className="section1">
        <div className="FullContainer">
          <div className="AnalysisWrap">
            <Header myname={myname} />
            <RatingStar myname={myname} allReviewCount={allReviewCount} />
          <MovieInfos countrys={countrys} genres={genres} />
          </div>
        </div>
      </section>
    );
  }
}

export default Analysis;

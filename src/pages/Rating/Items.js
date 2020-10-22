import React, { Component } from "react";
import Item from "./Item";
import { connect } from 'react-redux';

class Items extends Component {
  constructor() {
    super();
    this.state ={
      movieList : []
    }
  }
  componentDidMount() {
    this.setState({
      movieList : this.props.movieList
    })
  }
  componentDidUpdate(prevProps) {
    const { category, movieList } = this.props;
    if(prevProps.category.title !== category.title) {
      if(category.title === '모든 장르') {
        this.setState({
          movieList,
        })
        return
      } 

      const newList = movieList.filter((movie) => {
        return movie.genre === category.title
      })
      this.setState({
        movieList : newList
      })
    }
  }

    render() {
    return (
      <section className="Items">
        <div>
          <div className="items_wrap">
            <ul>
              {this.state.movieList.map(movie => (
                <Item key={movie.id} handleMovieInfo={this.props.handleMovieInfo} {...movie} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}


function mapStateToProps(state) {
  return {
    movieList: state.movieList,
    category: state.category
  }  
}

export default connect(mapStateToProps)(Items);

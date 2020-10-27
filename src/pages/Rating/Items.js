import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";

class Items extends Component {
  constructor() {
    super();
    this.state = {
      allMovieList: [],
      filterMovies: [],
      movieList: [],
      listLength: 20
    };
  }

  handleScroll = () => {
    const { category } = this.props;
    const { movieList, allMovieList, listLength } = this.state;
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (category.genre === "모든 장르") {
      if (scrollHeight - innerHeight - scrollTop < 50 &&  movieList.length !== allMovieList.length) {
        // document.documentElement.scrollTop -= 1000;
        this.setState(prevState => {
          return {
            movieList: allMovieList.slice(0, listLength),
            listLength: prevState.listLength + 20
          };
        });
      }
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    fetch("http://localhost:3000/Data/Data.json")
      .then(response => response.json())
      .then(result =>
        this.setState(prevState => {
          return {
            allMovieList: result.allMovies,
            filterMovies: result.allMovies,
            movieList: result.allMovies.slice(0, 20),
            listLength: prevState.listLength + 20
          };
        })
      );
  }
  componentDidUpdate(prevProps) {
    const { category } = this.props;
    const { allMovieList  } = this.state;
    if (prevProps.category.genre !== category.genre) {
      if (category.genre === "모든 장르") {
        this.setState({
          movieList: allMovieList
        });
        return;
      }

      const newList = allMovieList.filter(movie => {
        return movie.genre.includes(category.genre);
      });
      this.setState({
        movieList: newList
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <section className="Items">
        <div>
          <div className="ItemWrap">
            <ul>
              {this.state.movieList.map(movie => (
                <Item
                  key={movie.id}
                  handleMovieInfo={this.props.handleMovieInfo}
                  {...movie}
                />
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
  };
}

export default connect(mapStateToProps)(Items);

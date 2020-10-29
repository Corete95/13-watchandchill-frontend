import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";

class Items extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      listLength: 20
    };
  }

  handleScroll = () => {
    const { category } = this.props;
    const { movieList } = this.state;
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
      // if (
      //   scrollHeight - innerHeight - scrollTop < 50 &&
      //   movieList.length !== allMovieList.length
      // ) {
      //   this.setState((prevState) => {
      //     return {
      //       listLength: prevState.listLength + 20
      //     };
      //   }, () => console.log(this.state.listLength));
      // }
  };

  API = `http://10.58.5.157:8000/review/get?genre=`;

  DUMMY_API = "http://localhost:3000/Data/Data.json";

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const token = localStorage.getItem("token");
    fetch(`${this.API}${this.props.category.id}&offset=${this.state.listLength - 20}&limit=${this.state.listLength}`, {
      headers: {
        AUTHORIZATION: token
      }
    })
      .then((response) => response.json())
      .then(result =>
      this.setState({        
        listLength: 0,
        movieList: result.MOVIES         
      })
    );
  }
  componentDidUpdate(prevProps) {
    const { category } = this.props;
    const token = localStorage.getItem("token");
    
    if (prevProps.category.genre !== category.genre) {
    fetch(`${this.API}${this.props.category.id}&offset=0&limit=20`, {
      headers: {
        AUTHORIZATION: token
      }
    })
      .then((response) => response.json())
      .then((result) => 
      this.setState({        
        listLength: 0,
        movieList: result.MOVIES        
    }));
  }

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { movieList } = this.state
    return (
      <section className="Items">
        <div>
          <div className="ItemWrap">
            <ul>
              {movieList && movieList.map((movie) => (
                <Item
                  key={movie.id}
                  id={movie.id}
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

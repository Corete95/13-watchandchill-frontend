import React, { Component } from "react";
import Item from "./Item";
import { connect } from 'react-redux';
import { actionCreators } from '../../store';

class Items extends Component {
    render() {
    return (
      <section className="Items">
        <div>
          <div className="items_wrap">
            <ul>
              {this.props.movieList.map(movie => (
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
  return {movieList: state.movieList}  
}

// function mapDispatchToProps(dispatch) {
//   return {
    
//   }
// }

export default connect(mapStateToProps)(Items);

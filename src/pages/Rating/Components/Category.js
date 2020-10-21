import React, { Component } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { connect } from 'react-redux';
import { actionCreators } from '../../../store';

class Category extends Component {

  componentDidMount() {
    window.addEventListener('click', this.props.handleClickOutside)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.props.handleClickOutside)
  }
  
  categoryClick = (category) => {
    this.props.ChangeCategory(category);
    this.props.handleModal();
  }

  render() {
    const { modalEl, handleModal, categories } = this.props;
    return (
      <div className="Category">
        <div ref={modalEl}>
          <header>
            <CloseOutlined
              onClick={handleModal}
              className="CloseBtn"
            />
            <h3>영화</h3>
          </header>
          <div>
            <ul className="category_list">
              {/* {this.state.categories.event.map(category => (
                <li>{category}</li>
              ))} */}
              <p>장르</p>
              {categories.genre.map(category => (
                <li key={category.id} onClick={() => this.categoryClick(category)}>{category.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories}  
}

function mapDispatchToProps(dispatch) {
  return {
    ChangeCategory: (category) => dispatch(actionCreators.ChangeCategory(category))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category);

import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';



const ChangeCategory = createAction('CHANGE_CATEGORY')
const addToDo = createAction('ADD')

const DELETE = "DELETE";

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    id
  }
}

console.log(addToDo(), )

const reducer = (state = [], action) => {
  switch(action.type) {
    case ChangeCategory.type :
      return {category: action.payload}
    // case addToDo.type:
    //   return [{text: action.payload}, ...state];
    // case DELETE: 
    //   return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};


export const actionCreators = {
  ChangeCategory,
  // deleteTodo
}

const store = createStore(reducer);

export default store;
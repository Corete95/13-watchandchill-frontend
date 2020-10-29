"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.actionCreators = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _createReducer;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ChangeCategory = (0, _toolkit.createAction)('CHANGE_CATEGORY');
var CurrentMovie = (0, _toolkit.createAction)('CURRENT_MOVIE');
var ChangeMovieInfo = (0, _toolkit.createAction)('CHANGE_MOVIE_INFO');
var RatingLength = (0, _toolkit.createAction)('RATING_LENGTH');
var ChangeCommentWrite = (0, _toolkit.createAction)('CHANGE_COMMENT_WRITE');
var CommentValueChange = (0, _toolkit.createAction)('COMMENT_VALUE_CHANGE');
var initialState = {
  category: {
    id: 0,
    genre: "랜덤 영화"
  },
  isMovieInfo: false,
  isCommentWrite: false,
  commentValue: '',
  ratingLength: 0,
  currentMovie: {},
  categories: {
    genres: [{
      id: 0,
      genre: "랜덤 영화"
    }, {
      id: 1,
      genre: "느와르"
    }, {
      id: 2,
      genre: "액션"
    }, {
      id: 3,
      genre: "판타지"
    }, {
      id: 4,
      genre: "SF"
    }, {
      id: 5,
      genre: "가족"
    }, {
      id: 6,
      genre: "드라마"
    }, {
      id: 7,
      genre: "슈퍼히어로"
    }, {
      id: 8,
      genre: "애니메이션"
    }, {
      id: 9,
      genre: "범죄"
    }, {
      id: 10,
      genre: "공포"
    }, {
      id: 11,
      genre: "로맨틱코미디"
    }, {
      id: 12,
      genre: "코미디"
    }, {
      id: 13,
      genre: "로맨스"
    }, {
      id: 14,
      genre: "다큐멘터리"
    }, {
      id: 15,
      genre: "클래식"
    }, {
      id: 16,
      genre: "스릴러"
    }, {
      id: 17,
      genre: "전쟁"
    }]
  }
};
var reducer = (0, _toolkit.createReducer)(initialState, (_createReducer = {}, _defineProperty(_createReducer, ChangeCategory, function (state, action) {
  state.category = action.payload;
}), _defineProperty(_createReducer, ChangeMovieInfo, function (state, action) {
  console.log(action);
  state.isMovieInfo = action.payload;
}), _defineProperty(_createReducer, ChangeCommentWrite, function (state, action) {
  console.log(action);
  state.isCommentWrite = action.payload;
}), _defineProperty(_createReducer, CurrentMovie, function (state, action) {
  state.currentMovie = action.payload;
}), _defineProperty(_createReducer, CommentValueChange, function (state, action) {
  state.commentValue = action.payload;
}), _defineProperty(_createReducer, RatingLength, function (state, action) {
  state.ratingLength = action.payload;
}), _createReducer));
var actionCreators = {
  ChangeCategory: ChangeCategory,
  ChangeMovieInfo: ChangeMovieInfo,
  ChangeCommentWrite: ChangeCommentWrite,
  CurrentMovie: CurrentMovie,
  RatingLength: RatingLength,
  CommentValueChange: CommentValueChange
};
exports.actionCreators = actionCreators;
var store = (0, _toolkit.configureStore)({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production'
});
var _default = store;
exports["default"] = _default;
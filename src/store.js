import { createAction, configureStore, createReducer } from '@reduxjs/toolkit';

const ChangeCategory = createAction('CHANGE_CATEGORY')
const CurrentMovie = createAction('CURRENT_MOVIE')
const ChangeMovieInfo = createAction('CHANGE_MOVIE_INFO')
const RatingLength = createAction('RATING_LENGTH')
const ChangeCommentWrite = createAction('CHANGE_COMMENT_WRITE')
const CommentValueChange = createAction('COMMENT_VALUE_CHANGE')

const initialState = {
  category: {
    id:0,
    genre:"랜덤 영화"
  },
  isMovieInfo : false,
  isCommentWrite : false,
  commentValue : '',
  ratingLength: 0,
  currentMovie: {

  },
  categories: {
    genres: [
      {
        id:0,
        genre: "랜덤 영화",
      },
      {
        id:1,
        genre:"느와르",
      },
      {
        id:2,
        genre: "액션",
      },
      {
        id:3,
        genre: "판타지",
      },
      {
        id:4,
        genre: "SF",
      },
      {
        id:5,
        genre: "가족",
      },
      {
        id:6,
        genre: "드라마",
      },
      {
        id:7,
        genre: "슈퍼히어로",
      },
      {
        id:8,
        genre: "애니메이션",
      },
      {
        id:9,
        genre: "범죄",
      },
      {
        id:10,
        genre: "공포",
      },
      {
        id:11,
        genre: "로맨틱코미디",
      },
      {
        id:12,
        genre: "코미디",
      },
      {
        id:13,
        genre: "로맨스",
      },
      {
        id:14,
        genre: "다큐멘터리",
      },
      {
        id:15,
        genre: "클래식",
      },
      {
        id:16,
        genre: "스릴러",
      },
      {
        id:17,
        genre: "전쟁",
      }
    ]
  }
}

const reducer = createReducer(initialState, {
  [ChangeCategory] : (state, action) => {
    state.category = action.payload
  },
  [ChangeMovieInfo] : (state, action) => {
    state.isMovieInfo = action.payload
  },
  [ChangeCommentWrite] : (state, action) => {
    
    state.isCommentWrite = action.payload
  },
  [CurrentMovie] : (state, action) => {
    state.currentMovie = action.payload
  },
  [CommentValueChange] : (state, action) => {
    state.commentValue = action.payload
  },
  [RatingLength] : (state, action) => {
    state.ratingLength = action.payload
  }
})


export const actionCreators = {
  ChangeCategory,
  ChangeMovieInfo,
  ChangeCommentWrite,
  CurrentMovie,
  RatingLength,
  CommentValueChange
}

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;
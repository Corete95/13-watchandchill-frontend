import { createAction, configureStore, createReducer } from '@reduxjs/toolkit';



const ChangeCategory = createAction('CHANGE_CATEGORY')
const CurrentMovie = createAction('CURRENT_MOVIE')
const ChangeMovieInfo = createAction('CHANGE_MOVIE_INFO')

const initialState = {
  category: {
    id:0,
    title:"느와르",
    selected: true,
  },
  isMovieInfo : false,
  currentMovie: {

  },
  movieList: [
    {
      id: 0,
      img:
        "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1602653039/kjdvdyucvpq6mb9kpxbj.jpg",
      name: "삼진그룹 영어 토익반",
      date: 2020,
      genre: "드라마",
      rating: 0,
      status: 'wished',
      leng: "한국"
    },
    {
      id: 1,
      img:
        "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1603092226/n8r9untsp673sv5x72g4.jpg",
      name: "미스터트롯: 더 무비",
      date: 2020,
      genre: "다큐멘터리",
      rating: 0,
      status: 'watching',
      leng: "한국"
    },
    {
      id: 2,
      img:
        "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1602812168/lwne86hhbnjvsoflssis.jpg",
      name: "페이트 스테이 나이트 헤븐즈필 제3장 스프링 송",
      date: 2020,
      genre: "애니메이션",
      rating: 0,
      status: null,
      leng: "일본"
    },
    {
      id: 3,
      img:
        "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1601967339/gx0hyiavmxt5xiw0ns75.jpg",
      name: "소리도 없이",
      date: 2020,
      genre: "범죄",
      rating: 3.5,
      status: null,
      leng: "한국"
    },
    {
      id: 4,
      img:
        "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1600738981/i1rakghcdnjkrothuwpd.jpg",
      name: "담보",
      date: 2020,
      genre: "드라마",
      rating: 0,
      status: null,
      leng: "한국"
    },
    {
      id: 5,
      img:
        "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1597194922/eccgvp8yabjv6hdqpsek.jpg",
      name: "테넷",
      date: 2020,
      genre: "액션",
      rating: 0,
      status: null,
      leng: "영국"
    },
    {
      id: 6,
      img:
        "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1602812608/nbxqslelpgr3rbny3fpb.jpg",
      name: "에브리타임 아이 다이",
      date: 2019,
      genre: "스릴러",
      rating: 0,
      status: null,
      leng: "미국"
    }
  ]
}

const reducer = createReducer(initialState, {
  [ChangeCategory] : (state, action) => {
    state.category = action.payload
  },
  [ChangeMovieInfo] : (state, action) => {
    state.isMovieInfo = action.payload
  },
  [CurrentMovie] : (state, action) => {
    state.currentMovie = action.payload
  }
})


export const actionCreators = {
  ChangeCategory,
  ChangeMovieInfo,
  CurrentMovie
}

const store = configureStore({
  reducer: reducer,
  // middleware: [...middlewares],
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;
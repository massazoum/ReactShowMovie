import { configureStore } from '@reduxjs/toolkit';
import ShowListReducer from '../reducers/MovieAPI';
import MoviepopupReducer from '../reducers/Moviepopup';
import reactionReducer from '../reducers/likecommentAPI';
import comment1Reducer from '../reducers/comment1';

export const Store = configureStore(
  {
    reducer: {
      ShowList: ShowListReducer,
      MoviePop: MoviepopupReducer,
      reaction: reactionReducer,
      reactionA: comment1Reducer,
    },
  },
);

export default Store;

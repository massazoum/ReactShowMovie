import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenPop: false,
  showMovie: [],
};
const MovieSlice = createSlice({
  name: 'MoviePop',
  initialState,
  reducers: {
    openPopup: (state, action) => ({
      ...state,
      isOpenPop: true,
      showMovie: action.payload,
    }),
    clossePopup: (state) => ({
      ...state,
      isOpenPop: false,
    }),
  },
});

export const { openPopup, clossePopup } = MovieSlice.actions;
export default MovieSlice.reducer;

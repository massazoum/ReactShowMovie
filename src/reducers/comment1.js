import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchgetcomment = createAsyncThunk('getcommsent', async (Idcomment) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qctDKoMCylhLoPut4xt1/comments?item_id=${Idcomment}`);
  const data = await response.json();
  return data;
});

const reactionASlice = createSlice({
  name: 'reactionA',
  initialState: {
    listComment: [],
  },
  reducers: {
    addComment: (state, action) => ({
      ...state,
      listComment: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchgetcomment.fulfilled, (action, state) => ({
        ...state,
        listComment: action.payload,
      }));
  },
});

export const { addComment } = reactionASlice.actions;
export default reactionASlice.reducer;

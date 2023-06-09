import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchID = createAsyncThunk('id', async (id) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qctDKoMCylhLoPut4xt1/likes', {
    method: 'POST',
    body: JSON.stringify({
     "item_id":id,
 }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data =await response.json();
  return data;
});

export const fectchcomment = createAsyncThunk('postComment', async (dta) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qctDKoMCylhLoPut4xt1/comments', {
    method: 'POST',
    body: JSON.stringify(dta),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data =await response.json();
  return data;
});

// export const fetchgetcomment = createAsyncThunk('getcomment', async (Idcomment) => {
//   const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qctDKoMCylhLoPut4xt1/comments?item_id=${Idcomment}`);
//   const data = await response.json();
//   return data;
//  });
 

export const fetchLike = createAsyncThunk('getLike', async () => {
 const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qctDKoMCylhLoPut4xt1/likes');
 const data = await response.json();
 return data;
});

const reactionSlice =createSlice({
 name:'reaction',
 initialState:{
  likess:[],
 },
 reducers:{
 },
 extraReducers: (builder) => {
  builder
    .addCase(fetchLike.fulfilled, (action, state) => ({
      ...state,
      likess: action.payload
    }))
    // .addCase(fetchgetcomment.fulfilled, (action, state) => ({
    //   ...state,
    //   tablecomment: action.payload
    // }));
}
})



export default reactionSlice.reducer;


// 4UuSxgTVLwpTMBpTGPk2
// iLJ9vjMcOAB0d93FxwXw
// FDnXf9bOWg88R3ydslLi
// qctDKoMCylhLoPut4xt1
// fqzQbCjznApFK4qMSxeO
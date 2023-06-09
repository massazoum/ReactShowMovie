import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSowByindex = createAsyncThunk(
 'show/fetchByindex',async ()=>{
  const res = await fetch('https://api.tvmaze.com/shows')
  const response =await res.json()
  return response;
 }
)
const initialState ={
 ShowList:[]
}
const MovieSlice =createSlice({
 name:'ShowList',
 initialState,
 reducers:{
 },
 extraReducers:(builder)=>{
  builder
  .addCase(fetchSowByindex.fulfilled , (state,action)=>{
return {
  ...state,
  ShowList: action.payload
}
  })
 }
})

export default MovieSlice.reducer;

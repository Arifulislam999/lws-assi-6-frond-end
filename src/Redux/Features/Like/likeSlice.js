import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { likeAPI } from "./likeAPI";

const initialState = {
  like: 0,
};
// async Thunk
export const fetchLike = createAsyncThunk(
  "Like/fetchLike",
  async ({ id, likes }, { dispatch }) => {
    const like = await likeAPI({ id, likes });
    dispatch(incrementLike(likes));
    return like;
  }
);

const LikedCount = createSlice({
  name: "likeCounte",
  initialState,

  reducers: {
    incrementLike: (state, action) => {
      state.like = action.payload + 1;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLike.fulfilled, (state, action) => {
      state.like = action.payload?.likes;
    });
  },
});
export default LikedCount.reducer;
export const { incrementLike } = LikedCount.actions;

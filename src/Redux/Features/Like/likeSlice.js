import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { likeAPI } from "./likeAPI";

const initialState = {
  like: 0,
};
// async Thunk
export const fetchLike = createAsyncThunk(
  "Like/fetchLike",
  async ({ id, likes }) => {
    const like = await likeAPI({ id, likes });
    return like;
  }
);

const LikedCount = createSlice({
  name: "likeCounte",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchLike.fulfilled, (state, action) => {
      state.like = action.payload?.likes;
    });
  },
});
export default LikedCount.reducer;

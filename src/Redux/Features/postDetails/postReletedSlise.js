import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getReletedPostAPI } from "./getReletedPostAPI";
const initialState = {
  isLoading: false,
  isError: false,
  posts: [],
  error: "",
};
// async Thunk
export const fetchReletedPost = createAsyncThunk(
  "postDetails/fetchReletedPost",
  async ({ id, tags }) => {
    const reletedPost = await getReletedPostAPI({ id, tags });
    return reletedPost;
  }
);

const reletedPostSlice = createSlice({
  name: "reletedPost",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchReletedPost.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchReletedPost.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.posts = action.payload;
        state.error = "";
      })
      .addCase(fetchReletedPost.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.posts = [];
        state.error = action.error?.message;
      });
  },
});
export default reletedPostSlice.reducer;

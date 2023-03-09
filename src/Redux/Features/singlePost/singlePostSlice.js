import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSinglePostAPI } from "./singlePostAPI";
const initialState = {
  isLoading: false,
  isError: false,
  posts: {},
  error: "",
};
// async Thunk
export const fetchSinglePost = createAsyncThunk(
  "posts/fetchSinglePost",
  async (id) => {
    const posts = await getSinglePostAPI(id);
    return posts;
  }
);

const singlePostSlice = createSlice({
  name: "singlePost",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSinglePost.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSinglePost.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.posts = action.payload;
        state.error = "";
      })
      .addCase(fetchSinglePost.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.posts = {};
        state.error = action.error?.message;
      });
  },
});
export default singlePostSlice.reducer;

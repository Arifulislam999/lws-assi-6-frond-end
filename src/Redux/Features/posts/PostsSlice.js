import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostAPI } from "./getPostAPI";
const initialState = {
  isLoading: false,
  isError: false,
  posts: [],
  error: "",
};
// async Thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await getPostAPI();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementLike: (state, action) => {
      console.log(action.payload);
      state.posts.map((post) => {
        if (post.id === action.payload) {
          return (post.likes += 1);
        } else {
          return post;
        }
      });
    },
    updateSave: (state, action) => {
      state.posts.map((post) => {
        if (post.id === action.payload) {
          return (post.isSaved = true);
        } else {
          return post;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.posts = action.payload;
        state.error = "";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.posts = [];
        state.error = action.error?.message;
      });
  },
});
export default postsSlice.reducer;
export const { incrementLike, updateSave } = postsSlice.actions;

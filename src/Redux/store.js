import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Redux/Features/posts/PostsSlice";
import filterReducer from "../Redux/Features/filter/filterSlice";
import reletedPostReducer from "../Redux/Features/postDetails/postReletedSlise";
import singlePostReducer from "../Redux/Features/singlePost/singlePostSlice";
import likeReducer from "../Redux/Features/Like/likeSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    reletedPosts: reletedPostReducer,
    filter: filterReducer,
    singlePost: singlePostReducer,
    Like: likeReducer,
  },
});

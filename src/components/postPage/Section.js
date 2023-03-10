import React, { useEffect } from "react";
import PostDetailed from "./PostDetailed";
import SideRelatedPost from "./SideRelatedPost";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../../Redux/Features/singlePost/singlePostSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchReletedPost } from "../../Redux/Features/postDetails/postReletedSlise";

function Section() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.singlePost);
  const { posts: reletedPosts } = useSelector((state) => state.reletedPosts);
  const { tags } = posts;
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchReletedPost({ id, tags }));
  }, [dispatch, tags, id]);

  return (
    <div className="post-page-container">
      <PostDetailed post={posts} />
      <SideRelatedPost posts={reletedPosts} />
    </div>
  );
}

export default Section;

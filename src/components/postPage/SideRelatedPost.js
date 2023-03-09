import React from "react";
import SingleReletedPost from "./SingleReletedPost";

function SideRelatedPost({ posts = {} }) {
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <SingleReletedPost posts={posts} />
    </aside>
  );
}

export default SideRelatedPost;

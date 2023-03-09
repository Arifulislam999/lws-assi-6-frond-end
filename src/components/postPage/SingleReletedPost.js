import React from "react";
import { Link } from "react-router-dom";
import Tags from "./Tags";
function SingleReletedPost({ posts = {} }) {
  return posts.map((post, index) => (
    <div className="space-y-4 related-post-container" key={index}>
      <div className="card">
        <Link to={`/post/${post.id}`}>
          <img src={post.image} className="card-image" alt={post.title} />
        </Link>
        <div className="p-4">
          <Link
            to={`/post/${post.id}`}
            className="text-lg post-title lws-RelatedPostTitle"
          >
            {post.title}
          </Link>
          <Tags tags={post.tags} />
          <p>{post.createdAt}</p>
        </div>
      </div>
    </div>
  ));
}

export default SingleReletedPost;

import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
function ProductSingle({ post = {} }) {
  const { image, title, createdAt, likes, tags, id } = post;
  // const dispatch = useDispatch();
  return (
    <div className="lws-card">
      <Link to={`/post/${id}`}>
        <img src={image} className="lws-card-image" alt="title" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i
              className="fa-regular fa-thumbs-up cursor"
              // onClick={handlerLike}
            ></i>
            {likes}
          </p>
        </div>
        <Link to={`/post/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tags.map((tag, index) => (
            <span key={index}>#{tag}, </span>
          ))}
        </div>
        {/* <!-- Show this element if post is saved --> */}
        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> Saved</span>
        </div>
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
}

export default ProductSingle;

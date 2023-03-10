import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchLike } from "../../Redux/Features/Like/likeSlice";
import { fetchSave } from "../../Redux/Features/save/saveSlice";
import {
  incrementLike,
  updateSave,
} from "../../Redux/Features/posts/PostsSlice";
// import { fetchSave } from "../../Redux/Features/filter/save/saveSlice";
function ProductSingle({ post = {} }) {
  const { image, title, createdAt, likes, tags, id, isSaved } = post;
  const dispatch = useDispatch();

  const [like, setLike] = useState(likes);

  const handlerLiked = (id) => {
    setLike((prev) => prev + 1);
    dispatch(fetchLike({ id, likes: like + 1 }));
    dispatch(incrementLike(id));
  };

  const [save, setSave] = useState(isSaved);

  // const handlerSave = async (id) => {
  //   setSave(true);
  //   try {
  //     await dispatch(fetchSave(id)).unwrap();
  //     dispatch(fetchPosts());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handlerSave = ({ id, isSaved }) => {
    dispatch(fetchSave(id));
    dispatch(updateSave(id));
    setSave(true);
  };

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
              onClick={() => handlerLiked(id)}
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
        <div className="flex gap-2 mt-4 cursor">
          <span
            className={isSaved || save ? "lws-badge blue" : "lws-badge"}
            onClick={() => handlerSave({ id, isSaved })}
          >
            {isSaved || save === true ? "Saved" : "Save"}
          </span>
        </div>
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
}

export default ProductSingle;

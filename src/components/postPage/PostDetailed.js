import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSave } from "../../Redux/Features/save/saveSlice";
import { updateSave } from "../../Redux/Features/posts/PostsSlice";
function PostDetailed({ post = {} }) {
  const { image, title, tags, likes, description, isSaved, id } = post;
  const [save, setSave] = useState(isSaved);
  const dispatch = useDispatch();
  const handlerSave = (id) => {
    dispatch(updateSave(id));
    dispatch(fetchSave(id));
    setSave(true);
  };
  return (
    <main className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.map((tag, index) => (
            <span key={index}>#{tag},</span>
          ))}
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up cursor"></i> {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button
            className={isSaved || save ? "save-btn active" : "save-btn"}
            id="lws-singleSavedBtn"
            onClick={() => handlerSave(id)}
          >
            <i className="fa-regular fa-bookmark"></i>{" "}
            {isSaved || save ? "Saved" : "Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}

export default PostDetailed;

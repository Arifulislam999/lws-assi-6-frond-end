import React, { useEffect } from "react";
import ProductSingle from "./ProductSingle";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Redux/Features/posts/PostsSlice";
import Loading from "../../Redux/utils/Loading";

function ProductList() {
  const dispatch = useDispatch();

  const Posts = useSelector((state) => state.posts);
  const filter = useSelector((state) => state.filter);
  const { status, sort } = filter;
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filterByStatus = (post) => {
    switch (status) {
      case "Saved":
        return post.isSaved === true;

      default:
        return post;
    }
  };

  const { posts, isLoading, error, isError } = Posts;

  const filterBySort = (a, b) => {
    switch (sort) {
      case "most_liked":
        if (a.likes > b.likes) {
          return -1;
        }
        break;
      case "newest":
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        break;
      default:
        return 0;
    }
    return 0;
  };

  let content;
  if (isLoading) content = <Loading />;
  else if (!isLoading && isError)
    content = <h2>There was an error occured. Error:{error}</h2>;
  else if (!isLoading && !isError && posts?.length === 0)
    content = <h2>There was No Post aviaable.</h2>;
  else if (!isLoading && !isError && posts?.length > 0)
    content = posts
      .slice()
      .sort(filterBySort)
      .filter(filterByStatus)
      .map((post, index) => <ProductSingle post={post} key={index} />);

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}

export default ProductList;

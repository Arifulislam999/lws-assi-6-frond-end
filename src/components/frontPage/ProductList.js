import React, { useEffect } from "react";
import ProductSingle from "./ProductSingle";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Redux/Features/posts/PostsSlice";
import Loading from "../../Redux/utils/Loading";

function ProductList() {
  const dispatch = useDispatch();

  const Posts = useSelector((state) => state.posts);
  const filter = useSelector((state) => state.filter);
  const { status } = filter;
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

  const getSortOrder = (likes) => {
    return (a, b) => {
      if (a[likes] > b[likes]) {
        return 1;
      } else if (a[likes] < b[likes]) {
        return -1;
      }
      return 0;
    };
  };

  console.log(posts?.sort(getSortOrder("likes")));

  let content;
  if (isLoading) content = <Loading />;
  else if (!isLoading && isError)
    content = <h2>There was an error occured. Error:{error}</h2>;
  else if (!isLoading && !isError && posts?.length === 0)
    content = <h2>There was No Post aviaable.</h2>;
  else if (!isLoading && !isError && posts?.length > 0)
    content = posts
      .filter(filterByStatus)
      .map((post, index) => <ProductSingle post={post} key={index} />);

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}

export default ProductList;

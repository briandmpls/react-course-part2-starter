import { useState } from "react";
import usePostList from "./hooks/usePostList";
import React from "react";

const PostList = () => {
  const pageSize = 10;
  //const [page, setPage] = useState(1);
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePostList({
      /*  page, */ pageSize,
    });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li
                key={post.id}
                className="list-group-item"
              >
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
        {/* {data?.map((post) => (
  
        ))} */}
      </ul>
      {/* <button
        disabled={page === 1}
        className="btn btn-primary my-3"
        onClick={() => setPage(page - 1)}
      >
        {" "}
        Previous
      </button> */}
      <button
        className="btn btn-primary my-3 ms-1"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;

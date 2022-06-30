import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import PostCardType2 from "../PostCardType2";

const Activity = () => {
  const { hero, post, status } = useSelector((state) => state.categoryPost);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {post.length === 0 ? (
            <Loader />
          ) : (
            <>
              {post &&
                post.map((n, index) => {
                  return <PostCardType2 n={n} index={index} key={index} />;
                })}

              <button
                onClick={() => {
                  setLimit((limit) => limit + 1);
                }}
                style={{ marginBottom: "2rem" }}
                className={"btn-plain"}
              >
                {(status && status === "initiate") || !post
                  ? "Loading..."
                  : "Read more"}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Activity;

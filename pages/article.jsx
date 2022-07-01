import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import Moment from "moment";

// component
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import OverlayLoader from "../components/OverlayLoader";

import {
  blogPostGETAction,
  blogPostLikeDisLikeGETAction,
} from "../redux/actions/blogPostAction";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import SocialMediaShare from "../components/SocialMediaShare";

const Article = () => {
  // instance
  const dispatch = useDispatch();
  const router = useRouter();
  const post_id = router.query.q;

  // state access
  const { status, blogPost, likeDisLikeStatusError } = useSelector(
    (state) => state.blog
  );
  const { isUserIsAuthenticated } = useSelector((state) => state.auth);

  // state management
  const [pageLoadingComplete, setPageLoadingComplete] = useState(false);
  const [likeDislikeStateChange, setLikeDislikeStateChange] = useState(false);
  const [socialMediaPopup, setSocialMediaPopup] = useState(false);

  // submit handler
  const likeDislikeHandler = () => {
    if (!isUserIsAuthenticated) {
      router.push(`/signin?next=${router.asPath}`);
    } else {
      setLikeDislikeStateChange(
        (likeDislikeStateChange) => !likeDislikeStateChange
      );
      dispatch(blogPostLikeDisLikeGETAction(post_id));
    }
  };

  useEffect(() => {
    if (post_id) {
      dispatch(blogPostGETAction(post_id));
    }
  }, [post_id]);

  useEffect(() => {
    if (
      blogPost &&
      blogPost.likes &&
      blogPost.likes.includes("62b8012e2d3afc0beacc9fba")
    ) {
      setLikeDislikeStateChange(true);
    }
  }, [blogPost]);

  useEffect(() => {
    if (likeDisLikeStatusError) {
      setLikeDislikeStateChange(
        (likeDislikeStateChange) => !likeDislikeStateChange
      );
    }
  }, [likeDisLikeStatusError]);

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        setPageLoadingComplete(true);
      }, 500);
    }
  }, [status]);

  return (
    <>
      {/* {true && ( */}
      {!pageLoadingComplete && (
        <OverlayLoader>
          <img src="./img/placeholder.png" alt="" />
          <h2>Loading...</h2>
        </OverlayLoader>
      )}
      <Navigation />
      <Header title="New Article" />
      {socialMediaPopup && (
        <SocialMediaShare
          url={`http://localhost:3000/article?q=${post_id}`}
          setValue={setSocialMediaPopup}
        />
      )}

      <div className="container">
        <div className="row justify-content-center min-height">
          {blogPost && (
            <div className="col-md-10 ">
              <div className="article-container">
                <h2 className="article_heading">{blogPost["title"]}</h2>
                <h5>
                  {blogPost.profile && (
                    <span>
                      {blogPost.profile["name"]}
                      <span></span>
                      {Moment(blogPost["createdAt"]).format("LL")}
                      <span></span>
                      {blogPost["category"]}
                    </span>
                  )}
                </h5>
                {blogPost.banners && (
                  <img src={blogPost.banners[0]} alt="banner" />
                )}

                <h4 className="subtitle">{blogPost["subtitle"]}</h4>

                <div className="article-body">
                  {ReactHtmlParser(blogPost["content"])}
                </div>

                <h2 className="tags">
                  {blogPost["tags"] &&
                    blogPost["tags"].map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                </h2>

                <div className="social-media">
                  {blogPost.likes && (
                    <i
                      className={
                        likeDislikeStateChange
                          ? "fa-solid  fa-heart"
                          : "fa-regular fa-heart"
                      }
                      onClick={() => likeDislikeHandler()}
                    ></i>
                  )}

                  <WhatsappShareButton
                    url={`http://localhost:3000/article?q=${post_id}`}
                    title={blogPost["title"]}
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </WhatsappShareButton>
                  <FacebookShareButton
                    url={`http://localhost:3000/article?q=${post_id}`}
                    title={blogPost["title"]}
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </FacebookShareButton>

                  <TwitterShareButton
                    url={`http://localhost:3000/article?q=${post_id}`}
                    title={blogPost["title"]}
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </TwitterShareButton>
                  <i
                    className="fa-solid fa-share-nodes"
                    onClick={() => setSocialMediaPopup(true)}
                  ></i>
                </div>
              </div>

              <div className="article-author-card">
                <img
                  src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                  alt="author"
                />
                {blogPost.profile && <h2> By {blogPost.profile["name"]}</h2>}
                <p>Excited him now natural saw passage offices you minuter. </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;

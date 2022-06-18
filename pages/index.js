import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "moment";
import Head from "next/head";

import { postGetAction } from "../redux/features/homePage";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const index = () => {
  const { author } = useSelector((state) => state.authors);
  const { source } = useSelector((state) => state.sources);
  const { contentType } = useSelector((state) => state.contentTypes);
  const { hero, feature, post } = useSelector((state) => state.posts);

  const [currentSlide, setCurrentSlide] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postGetAction());
  }, [dispatch]);
  return (
    <div id="home_page">
      <Head>
        <title>Home - Gorgo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <div className="container">
        <div className="hero-image-container">
          <div className="slider-toggel-btn">
            <i
              className="fa-solid fa-angles-left"
              onClick={() =>
                setCurrentSlide((currentSlide) =>
                  currentSlide > 0 ? currentSlide - 1 : currentSlide
                )
              }
            ></i>
            <i
              className="fa-solid fa-angles-right"
              onClick={() =>
                setCurrentSlide((currentSlide) =>
                  currentSlide < 4 ? currentSlide + 1 : currentSlide
                )
              }
            ></i>
          </div>

          <div className="hero-slider-container">
            {hero &&
              hero.map((n, index) => {
                return (
                  <div
                    className={`hero-slider ${
                      currentSlide === index ? "active" : "non-active"
                    }`}
                    key={index}
                  >
                    <div className="img-container">
                      <img src={n.urlToImage} alt="" />
                    </div>

                    <div className="hero-text">
                      <p>
                        {n.author ? n.author : "Unknown"} <span></span>{" "}
                        {Moment(n.publishedAt).format("LL")}
                      </p>
                      <h2>{n.title}</h2>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="container-fluid main">
        <div className="container">
          <div className="row section-1">
            <div className="col-md-8 ">
              <div className="row">
                {feature &&
                  feature.map((n, index) => {
                    return (
                      <div className="col-md-6" key={index}>
                        <div className="card post-card-type-1">
                          <div className="image-top">
                            <img src={n.urlToImage} alt={n.title} />
                          </div>
                          <div className="card-body">
                            <h2>{n.title.slice(0, 55).trim()}...</h2>
                            <p>{n.description.slice(0, 100)}</p>
                            <h5>
                              <span>
                                {n.author ? n.author : "Unknown"} <span></span>{" "}
                                {Moment(n.publishedAt).format("LL")}
                              </span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="promotion-cover-banner">
                <h2>Get Unlimited Access Now </h2>
                <p>
                  Get unlimited access to the best articles on Gorgo and support
                  our lovely authors by subscribing to the PRO or VIP package.
                </p>
                <button className="btn-primary">Upgrade Now</button>
              </div>

              <div className="section-2">
                {post &&
                  post.map((n, index) => {
                    return (
                      <div className="post-card-type-2" key={index}>
                        <div className="row">
                          <div className="col-md-3">
                            <img src={n.urlToImage} alt="" />
                          </div>

                          <div className="col-md-9">
                            <a href="/">
                              <h2>{n.title.slice(0, 75).trim()}...</h2>
                            </a>

                            <h5>
                              <span>
                                {n.author ? n.author : "Unknown"} <span></span>{" "}
                                {Moment(n.publishedAt).format("LL")}
                              </span>
                            </h5>
                            <p>{n.description.slice(0, 200)}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                <button>View all community posts</button>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="category-container sidebar-content-container">
                {contentType &&
                  contentType.map((n) => {
                    return (
                      <div className="category" key={n.id}>
                        <img
                          src="https://cdn.shopify.com/s/files/1/2309/6853/products/Artboard_3_1200x1200.jpg?v=1578499695"
                          alt={n.contentType}
                        />
                        <div className="body">
                          <i className={`fa-solid ${n.i}`}></i>
                          <h2>{n.contentType}</h2>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="popular-post-container sidebar-content-container">
                <div className="heading">
                  <h2>Popular Post</h2>
                </div>
                <div className="body">
                  {hero.map((n, index) => {
                    return (
                      <div className="post-card-type-3 row" key={index}>
                        <div className="col-3">
                          <img src={n.urlToImage} alt={n.title} />
                        </div>
                        <div className="col-9">
                          <a href="/">
                            <h2>{`#${index + 1} ${n.title
                              .trim()
                              .slice(0, 50)}...`}</h2>
                          </a>
                          <h5>
                            {" "}
                            {n.author ? n.author : "Unknown"} |{" "}
                            {Moment(n.publishedAt).format("LL")}
                          </h5>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="sidebar-content-container">
                <div className="become-pro-member">
                  <h2>Become Pro </h2>
                  <p>…and enjoy all the great benefits</p>
                  <button>Upgrade now</button>
                </div>
              </div>

              <div className="source-card-container sidebar-content-container">
                <div className="heading">
                  <h2>Our News Sources</h2>
                </div>
                <div className="body">
                  <div className="row source-container">
                    {source &&
                      source.map((n, index) => {
                        return (
                          <div className="col-md-12 source " key={index}>
                            <i className="fa-solid fa-satellite-dish"></i>
                            <h2>{n}</h2>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="section-3 container-fluid"
        style={{ background: "#F5F6F7", padding: "1rem" }}
      >
        <div className="container focus-content">
          <h2>Focus on your content</h2>
          <p>
            Discover the little things that <span>matter to you.</span>
          </p>
          <div className="content-type-container">
            {contentType &&
              contentType.map((n) => (
                <a href={`/post?category=${n.contentType}`} key={n.id}>
                  <div className="content-type">
                    <i className={`fa-solid ${n.i}`}></i>
                    <p>{n.contentType}</p>
                  </div>
                </a>
              ))}
          </div>
          <button>Discover now</button>
        </div>
      </div>

      <div className="section-4 container-fluid">
        <div className="container">
          <h2>The heart of Gorgo Community </h2>
          <p>
            Some of Our Popular <span>Authors</span>
          </p>
          <div className="row">
            {author &&
              author.map((n) => {
                return (
                  <div className="col-6 col-md-3" key={n.id}>
                    <div className="authors-list">
                      <img
                        src="https://us.123rf.com/450wm/apoev/apoev1902/apoev190200141/125038134-person-gray-photo-placeholder-man-in-a-costume-on-gray-background.jpg?ver=6"
                        alt={n.name}
                      />
                      <a href="/">
                        <h2>{n.name}</h2>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div
        className="section-5 container-fluid"
        style={{ borderTop: ".5px solid grey" }}
      >
        <div className="container">
          <h2>
            Reading is essential for those who seek to rise{" "}
            <span>above the ordinary</span>.
          </h2>
          <button>Get started</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;

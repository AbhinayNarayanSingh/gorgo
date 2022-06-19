import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "moment";
import Head from "next/head";
import Link from "next/link";

import { postGetAction } from "../redux/features/homePage";

// component
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

// container
import PostCardType1 from "../container/PostCardType1";
import PostCardType2 from "../container/PostCardType2";
import PopularPostSideBar from "../container/PopularPostSideBar";
import BecomePro from "../container/BecomePro";
import HeroFooter from "../container/HeroFooter";

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
                    return <PostCardType1 n={n} key={index} />;
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
                    return <PostCardType2 n={n} key={index} />;
                  })}

                <Link href="/category/community">
                  <button>View all community posts</button>
                </Link>
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
                  <PopularPostSideBar hero={hero} />
                </div>
              </div>

              <BecomePro />

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
                <Link href={`/category/${n.contentType}`} key={n.id}>
                  <div className="content-type">
                    <i className={`fa-solid ${n.i}`}></i>
                    <p>{n.contentType}</p>
                  </div>
                </Link>
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
      <HeroFooter
        h2="Reading is essential for those who seek to rise "
        span="above the ordinary"
        link="/"
      />
      <Footer />
    </div>
  );
};

export default index;

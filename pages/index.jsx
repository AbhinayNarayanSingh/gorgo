import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import { homePagePostGETAction } from "../redux/actions/homePageActions";

// component
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

// container
import PostCardType1 from "../container/PostCardType1";
import PostCardType2 from "../container/PostCardType2";
import PopularPostSideBar from "../container/PopularPostSideBar";
import BecomePro from "../container/BecomePro";
import HeroFooter from "../container/HeroFooter";
import Header from "../components/Header";
import CategoryContainer from "../container/CategoryContainer";
import AuthorCard from "../container/AuthorCard";
import HeroCardSlider from "../container/HeroCardSlider";

const Home = () => {
  const { author } = useSelector((state) => state.authors);
  const { source } = useSelector((state) => state.sources);
  const { contentType } = useSelector((state) => state.contentTypes);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [page, setPage] = useState(1);
  const { hero, feature, post, status } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homePagePostGETAction(page));
  }, [dispatch, page]);
  return (
    <div id="home_page">
      <Header />
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
                  <HeroCardSlider
                    n={n}
                    key={index}
                    index={index}
                    currentSlide={currentSlide}
                  />
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

                <button
                  className="btn-plain"
                  onClick={() => setPage((page) => page + 1)}
                >
                  {status && status === "initiate" ? "Loading..." : "Read more"}{" "}
                </button>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="category-container sidebar-content-container">
                {contentType &&
                  contentType.map((n) => {
                    return <CategoryContainer n={n} key={n.id} />;
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
          <Link href="/explore">
            <button>Discover now</button>
          </Link>
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
              author.map((n, index) => {
                return <AuthorCard n={n} key={index} />;
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

export default Home;

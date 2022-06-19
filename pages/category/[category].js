import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

// component
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

// container
import PostCardType2 from "../../container/PostCardType2";
import PopularPostSideBar from "../../container/PopularPostSideBar";
import BecomePro from "../../container/BecomePro";
import HeroFooter from "../../container/HeroFooter";
import { postGetAction } from "../../redux/features/homePage";

const Category = () => {
  const router = useRouter();
  const category = router.query.category;

  const { hero, feature, post } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: "0px",
      left: "0px",
      behavior: "smooth",
    });
    // dispatch(postGetAction());
  }, []);
  // }, [dispatch]);

  return (
    <div>
      <Navigation />

      <div className="container">
        <div className="row category-hero">
          <h1>{category && category}</h1>
          <p>
            I’m partial to air conditioning. I’m a sociopath; there’s not much
            he can do for me.
          </p>
        </div>
        <div className="row">
          <div className="col-md-8">
            {post &&
              post.map((n, index) => {
                return <PostCardType2 n={n} index={index} />;
              })}
          </div>
          <div className="col-md-4">
            <BecomePro />
            <div className="popular-post-container sidebar-content-container">
              <div className="heading">
                <h2>Popular Post</h2>
              </div>
              <div className="body">
                <PopularPostSideBar hero={hero} />
              </div>
            </div>
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

export default Category;

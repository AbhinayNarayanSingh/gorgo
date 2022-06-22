import React, { useEffect, useState } from "react";
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
import { categoryPostGETAction } from "../../redux/actions/categoryPageAction";
import Header from "../../components/Header";
import CategoryContainer from "../../container/CategoryContainer";

const Category = () => {
  const router = useRouter();
  const category = router.query.category;

  const { hero, post } = useSelector((state) => state.categoryPost);
  const { contentType } = useSelector((state) => state.contentTypes);
  const [limit, setLimit] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    setLimit(1);
  }, [category]);

  useEffect(() => {
    if (category) {
      dispatch(categoryPostGETAction(category, limit));
    }
  }, [dispatch, category, limit]);

  return (
    <div>
      <Header title={`${category} - Gorge`} />

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
                return <PostCardType2 n={n} index={index} key={index} />;
              })}

            <button
              onClick={() => {
                setLimit((limit) => limit + 1);
              }}
              style={{ marginBottom: "2rem" }}
            >
              Next Page
            </button>
          </div>
          <div className="col-md-4">
            <div className="category-container sidebar-content-container">
              {contentType &&
                contentType.map((n, index) => {
                  return <CategoryContainer n={n} key={index} />;
                })}
            </div>

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

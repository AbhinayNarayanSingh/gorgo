import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

//
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
import PostCardType2 from "../../container/PostCardType2";
import CategoryContainer from "../../container/CategoryContainer";
import BecomePro from "../../container/BecomePro";
import { searchPostGETAction } from "../../redux/actions/searchPageAction";

const SearchQuery = () => {
  const router = useRouter();
  const slug = router.query.search;
  const { post } = useSelector((state) => state.searchPost);

  const dispatch = useDispatch();

  useEffect(() => {
    if (slug !== "") {
      dispatch(searchPostGETAction(slug));
    }
  }, [dispatch, slug]);

  const { contentType } = useSelector((state) => state.contentTypes);

  const [query, setQuery] = useState("");

  return (
    <>
      <Header title={`Search Results for "${slug}" - Gorgo`} />
      <Navigation />
      <div className="container">
        <div className="row category-hero">
          <h1>Search Results</h1>
          <p>{slug && `for "${slug}"`}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/explore/?search=${query}`);
              setQuery("");
            }}
          >
            <div className="row search-form">
              <div className="col-md-9">
                <Input
                  //   label="Email Address"
                  placeholder=" Search for News, Photos and Videos"
                  id="email"
                  value={query}
                  setValue={setQuery}
                  onChange={(e) => set(e.target.value)}
                />
              </div>
              <div className="col-md-2">
                <button style={{ width: "100%" }}>Search</button>
              </div>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-md-8">
            {post &&
              post.map((n, index) => {
                return <PostCardType2 n={n} index={index} key={index} />;
              })}
          </div>
          <div className="col-md-4">
            <BecomePro />

            <div className="category-container sidebar-content-container">
              {contentType &&
                contentType.map((n, index) => {
                  return <CategoryContainer n={n} key={index} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchQuery;

import { useRouter } from "next/router";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <>
      <Header title="Search - Gorgo" />
      <Navigation />

      <div className="row">
        <div className="search-page">
          <div className="col-md-6">
            <h1>Discover</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/explore/query/?search=${query}`);
              }}
            >
              <Input
                //   label="Email Address"
                placeholder=" Search for News, Photos and Videos"
                id="email"
                value={query}
                setValue={setQuery}
                onChange={(e) => set(e.target.value)}
              />
              <button>Search</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Search;

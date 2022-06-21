import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "moment";
import Link from "next/link";

// component
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Input from "../components/Input";

// container

import HeroFooter from "../container/HeroFooter";
import Header from "../components/Header";

const index = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, [dispatch]);
  return (
    <div id="home_page">
      <Header />
      <Navigation />
      <div className="container">
        <div className="row justify-content-center sign-container">
          <div className="col-md-5">
            <h1>Sign In</h1>
            <form className="sign-form">
              <Input
                label="Email Address"
                placeholder="Enter your email"
                id="email"
                value={email}
                setValue={setEmail}
                type="email"
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                id="Password"
                value={password}
                setValue={setPassword}
                type="password"
              />
              <button className="btn-primary">Sign In</button>
            </form>
            <button className="btn-secondary">Quick Sign Up!</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;

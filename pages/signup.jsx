import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// component
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Input from "../components/Input";

// container

import Header from "../components/Header";

const SignUp = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {}, [dispatch]);
  return (
    <div id="home_page">
      <Header />
      <Navigation />
      <div className="container">
        <div className="row justify-content-center sign-container">
          <div className="col-md-5">
            <h1>Sign Up</h1>
            <form className="sign-form">
              <Input
                label="Name"
                placeholder="Enter your name"
                id="text"
                value={name}
                setValue={setName}
                type="text"
              />
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
              <Input
                label="Confirm password"
                placeholder="Re-enter your password"
                id="Password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                type="password"
              />
              <button className="btn-primary">Sign Up</button>
            </form>
            <button className="btn-secondary">Sign In Insted</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;

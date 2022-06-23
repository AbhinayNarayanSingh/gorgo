import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

// component
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Input from "../components/Input";

// container

import Header from "../components/Header";

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validationError, setValidationError] = useState("");
  const [validationErrorMsg, setValidationErrorMsg] = useState("");

  useEffect(() => {
    setValidationError(false);
  }, [name, email, password, confirmPassword]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === "") {
      setValidationErrorMsg("Required feild");
      return setValidationError("name");
    }
    if (email === "" || !email.includes("@")) {
      setValidationErrorMsg("Enter a vaild email address");
      return setValidationError("email");
    } else if (password === "" || password.length < 8) {
      setValidationErrorMsg("Password must be at least 8 characters long");
      return setValidationError("password");
    } else if (confirmPassword === "" || confirmPassword !== password) {
      setValidationErrorMsg("Password should be match");
      return setValidationError("confirmPassword");
    }
  };

  return (
    <div id="home_page">
      <Header title="Sign Up" />

      <Navigation />
      <div className="container">
        <div className="row justify-content-center sign-container">
          <div className="col-md-5">
            <h1>Sign Up</h1>
            <form className="sign-form" onSubmit={submitHandler}>
              <Input
                label="Name"
                placeholder="Enter your name"
                id="text"
                value={name}
                setValue={setName}
                type="text"
                error={validationError === "name"}
                errorMsg={validationErrorMsg}
              />
              <Input
                label="Email Address"
                placeholder="Enter your email"
                id="email"
                value={email}
                setValue={setEmail}
                type="email"
                error={validationError === "email"}
                errorMsg={validationErrorMsg}
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                id="Password"
                value={password}
                setValue={setPassword}
                type="password"
                error={validationError === "password"}
                errorMsg={validationErrorMsg}
              />
              <Input
                label="Confirm password"
                placeholder="Re-enter your password"
                id="Password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                type="password"
                error={validationError === "confirmPassword"}
                errorMsg={validationErrorMsg}
              />
              <button className="btn-primary">Sign Up</button>
            </form>
            <button
              className="btn-secondary"
              onClick={() => router.push("/signin")}
            >
              Sign In Insted
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

// component
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Input from "../components/Input";

// container
import Header from "../components/Header";

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validationError, setValidationError] = useState("");
  const [validationErrorMsg, setValidationErrorMsg] = useState("");

  useEffect(() => {
    setValidationError(false);
  }, [email, password]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === "" || !email.includes("@")) {
      setValidationErrorMsg("Enter a vaild email address");
      return setValidationError("email");
    } else if (password === "" || password.length < 8) {
      setValidationErrorMsg("Password must be at least 8 characters long");
      return setValidationError("password");
    }
  };

  return (
    <div id="home_page">
      <Header title="Sign In" />
      <Navigation />
      <div className="container">
        <div className="row justify-content-center sign-container">
          <div className="col-md-5">
            <h1>Sign In</h1>
            <form className="sign-form" onSubmit={submitHandler}>
              <Input
                label="Email Address"
                placeholder="Enter your email"
                id="email"
                value={email}
                setValue={setEmail}
                type="text"
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
              <button className="btn-primary">Sign In</button>
            </form>
            <button
              className="btn-secondary"
              onClick={() => router.push("/signup")}
            >
              Quick Sign Up!
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;

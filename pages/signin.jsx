import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

// component
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Input from "../components/Input";
import Header from "../components/Header";
import OverlayLoader from "../components/OverlayLoader";
import Alert from "../hoc/Alert";

// action
import { userSignInAuthenticationAction } from "../redux/actions/userAuthenticationAction";
// container

const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validationError, setValidationError] = useState("");
  const [validationErrorMsg, setValidationErrorMsg] = useState("");

  const { status, auth } = useSelector((state) => state.auth);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    setValidationError(false);
  }, [email, password]);

  const next = router.query.next;

  useEffect(() => {
    if (auth && auth["token"]) {
      router.push(next || "/");
    }
  }, [auth, next, router]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === "" || !email.includes("@")) {
      setValidationErrorMsg("Enter a vaild email address");
      return setValidationError("email");
    } else if (password === "" || password.length < 8) {
      setValidationErrorMsg("Password must be at least 8 characters long");
      return setValidationError("password");
    }

    const body = {
      email: email,
      password: password,
    };

    dispatch(userSignInAuthenticationAction(body));

    setPassword("");

    if (status === "success") {
      router.push("/");
    } else {
      setServerError(true);
      setTimeout(() => {
        setServerError(false);
      }, 4000);
    }
  };

  return (
    <div id="home_page">
      {status && status === "error" && serverError && (
        <Alert>
          <p>Invalid credentials! Try again</p>
        </Alert>
      )}
      <Header title="Sign In" />
      <Navigation />
      {status && status === "initiate" ? <OverlayLoader /> : ""}

      <div className="container">
        <div className="row justify-content-center sign-container">
          <div className="col-md-5">
            <h1>{t("sign_in")}</h1>

            <form className="sign-form" onSubmit={submitHandler}>
              <Input
                label={t("email_address")}
                placeholder={t("enter_your_email")}
                id="email"
                value={email}
                setValue={setEmail}
                type="text"
                error={validationError === "email"}
                errorMsg={validationErrorMsg}
              />
              <Input
                label={t("password")}
                placeholder={t("enter_your_password")}
                id="Password"
                value={password}
                setValue={setPassword}
                type="password"
                error={validationError === "password"}
                errorMsg={validationErrorMsg}
              />
              <button className="btn-primary">{t("sign_in")}</button>
            </form>
            <button
              className="btn-secondary"
              onClick={() => router.push("/signup")}
            >
              {t("quick_sign_up")}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;

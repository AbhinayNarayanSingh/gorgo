import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

// component
import Header from "../components/Header";
import Footer from "../components/Footer";
import OverlayLoader from "../components/OverlayLoader";
import Navigation from "../components/Navigation";
import Input from "../components/Input";
import { userSignUpAuthenticationAction } from "../redux/actions/userAuthenticationAction";
import Link from "next/link";
import Alert from "../hoc/Alert";

// container

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const next = router.query.next;
  const { t } = useTranslation("common");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validationError, setValidationError] = useState("");
  const [validationErrorMsg, setValidationErrorMsg] = useState("");

  const { status, auth, isUserIsAuthenticated } = useSelector(
    (state) => state.auth
  );

  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    setValidationError(false);
  }, [name, email, password, confirmPassword]);

  useEffect(() => {
    if (auth && isUserIsAuthenticated) {
      router.push(next || "/");
    }
  }, [auth, isUserIsAuthenticated]);

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

    let body = {
      firstname: name,
      email: email,
      username: email,
      password: password,
    };

    dispatch(userSignUpAuthenticationAction(body));

    setPassword("");
    setConfirmPassword("");

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
      <Header title="Sign Up" />
      {status && status === "error" && serverError && (
        <Alert>
          <p>
            This email already exists. Please try a different email address to
            register, or <Link href="/signin">login</Link> to your existing
            account.
          </p>
        </Alert>
      )}

      <Navigation />
      <div className="container">
        <div className="row justify-content-center sign-container">
          {status && status === "initiate" ? <OverlayLoader /> : ""}

          <div className="col-md-5">
            <h1>{t("sign_up")}</h1>

            <form className="sign-form" onSubmit={submitHandler}>
              <Input
                label={t("name")}
                placeholder={t("enter_your_name")}
                id="text"
                value={name}
                setValue={setName}
                type="text"
                error={validationError === "name"}
                errorMsg={validationErrorMsg}
              />
              <Input
                label={t("email_address")}
                placeholder={t("enter_your_email")}
                id="email"
                value={email}
                setValue={setEmail}
                type="email"
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
              <Input
                label={t("confirm_password")}
                placeholder={t("re_enter_your_password")}
                id="Password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                type="password"
                error={validationError === "confirmPassword"}
                errorMsg={validationErrorMsg}
              />
              <button className="btn-primary">{t("sign_up")}</button>
            </form>
            <button
              className="btn-secondary"
              onClick={() => router.push("/signin")}
            >
              {t("sign_in_insted")}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;

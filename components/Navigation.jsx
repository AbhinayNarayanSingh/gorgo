import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import Image from "next/image";
import UserProfile from "../container/UserProfile";

const Navigation = () => {
  const router = useRouter();
  const category = router.query.category;
  const { t } = useTranslation("common");

  const [navigationToggel, setNavigationToggel] = useState(true);
  const [languageToggel, setLanguageToggel] = useState(false);

  const { contentType } = useSelector((state) => state.contentTypes);
  const { auth } = useSelector((state) => state.auth);

  const onChangeLanguage = (lang) => {
    setLanguageToggel(false);
    router.push(router.asPath, undefined, { locale: lang });
  };
  return (
    <>
      <div className="container-fluid nav">
        <div className="container nav-container">
          <Link href="/" className="img-container">
            <Image src="/img/logo.webp" alt="" height={28} width={"100%"} />
          </Link>

          <i
            className={`fa-solid ${navigationToggel ? "fa-bars" : "fa-xmark"}`}
            onClick={() =>
              setNavigationToggel((navigationToggel) => !navigationToggel)
            }
          ></i>

          <div className={`nav-link ${navigationToggel && `mobile-hide`}`}>
            <ul>
              {contentType &&
                contentType.map((n) => {
                  return (
                    <li
                      key={n.id}
                      className={
                        n.contentType === category ? "active-page" : ""
                      }
                      onClick={() => {
                        setNavigationToggel(
                          (navigationToggel) => !navigationToggel
                        );
                      }}
                    >
                      <Link href={"/category/" + n.contentType}>
                        {n.contentType}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div
            className={`nav-action-btn ${!auth && "custom-padding"} ${
              navigationToggel && `mobile-hide`
            }`}
          >
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={() => router.push("/explore")}
            ></i>

            <div className="i-language-container">
              <img
                src="../../img/google.png"
                alt=""
                className="i-language"
                onClick={() =>
                  setLanguageToggel((languageToggel) => !languageToggel)
                }
              />

              <div
                className={`language-popup ${languageToggel ? "active" : ""}`}
              >
                <p onClick={() => onChangeLanguage("en")}>English</p>
                <p onClick={() => onChangeLanguage("hi")}>Hindi हिन्दी</p>
              </div>
            </div>

            {auth && auth["email"] ? (
              <div className="user-profile">
                <UserProfile />
              </div>
            ) : (
              <>
                <button
                  className="btn-secondary"
                  onClick={() => router.push(`/signin?next=${router.asPath}`)}
                >
                  {t("login")}
                </button>
                <button
                  className="btn-primary"
                  onClick={() => router.push(`/signup?next=${router.asPath}`)}
                >
                  {t("register")}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

import Image from "next/image";
import UserProfile from "../container/UserProfile";

const Navigation = () => {
  const { contentType } = useSelector((state) => state.contentTypes);

  const { auth } = useSelector((state) => state.auth);

  const [navigationToggel, setNavigationToggel] = useState(true);
  const router = useRouter();
  const category = router.query.category;

  // console.warn(router.asPath);

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
                  Login
                </button>
                <button
                  className="btn-primary"
                  onClick={() => router.push(`/signup?next=${router.asPath}`)}
                >
                  Register
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

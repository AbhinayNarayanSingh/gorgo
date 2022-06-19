import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navigation = () => {
  const { contentType } = useSelector((state) => state.contentTypes);

  const [navigationToggel, setNavigationToggel] = useState(true);
  return (
    <>
      <div className="container-fluid nav">
        <div className="container nav-container">
          <Link href="/">
            <img src="../img/logo.webp" alt="" />
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
                    <li key={n.id}>
                      <Link href={"/category/" + n.contentType}>
                        {n.contentType}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div
            className={`nav-action-btn ${navigationToggel && `mobile-hide`}`}
          >
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

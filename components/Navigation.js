import React, { useState } from "react";

const Navigation = () => {
  const data = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Community",
      url: "",
    },
    {
      id: 3,
      name: "Culture",
      url: "",
    },
    {
      id: 4,
      name: "Design",
      url: "",
    },
    {
      id: 5,
      name: "Food",
      url: "",
    },
    {
      id: 6,
      name: "Other",
      url: "",
    },
  ];

  const [navigationToggel, setNavigationToggel] = useState(true);
  return (
    <>
      <div className="container-fluid nav">
        <div className="container nav-container">
          <img src="./img/logo.webp" alt="" />

          <i
            className={`fa-solid ${navigationToggel ? "fa-bars" : "fa-xmark"}`}
            onClick={() =>
              setNavigationToggel((navigationToggel) => !navigationToggel)
            }
          ></i>

          <div className={`nav-link ${navigationToggel && `mobile-hide`}`}>
            {data.map((n) => {
              return (
                <a href={n.url} key={n.id}>
                  {n.name}
                </a>
              );
            })}
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

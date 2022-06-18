import React from "react";

const Footer = () => {
  const data = [
    {
      key: 1,
      h2: "Discover Gorgo",
      p: "Welcome to Gorgo, an author oriented theme.A place where words matter. Discover without further ado our countless community stories.",
    },
    {
      key: 2,
      h2: "Build great relations",
      p: "Explore all the content form Gorgo community network. Forums, Groups, Members, Posts, Social Wall and many more. You can never get tired of it!",
    },
    {
      key: 3,
      h2: "Become a member",
      p: "Get unlimited access to the best articles on Gorgo and support our  lovely authors. Upgrade Now",
    },
  ];
  return (
    <footer>
      <div
        className="section-1 container-fluid"
        style={{ background: "#181818" }}
      >
        <div className="container">
          <div className="row">
            {data.map((n) => {
              return (
                <div className="col-md-4" key={n.key}>
                  <h2>{n.h2}</h2>
                  <p>{n.p}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="container-fluid section-2"
        style={{ background: "#0F0F0F" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="./img/favicon-gorgo-community-alternative.jpg" alt="" />
            </div>
            <div className="col-md-4">
              <p>@2020 Appscrip</p>
              <p>About | Discover | Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

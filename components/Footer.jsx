import Image from "next/image";
import React from "react";
import useTranslation from "next-translate/useTranslation";


const Footer = () => {

  const {t} = useTranslation("common")
  const data = [
    {
      key: 1,
      h2: t("discover_gorgo"),
      p: t("discover_gorgo_content"),
    },
    {
      key: 2,
      h2: t("build_great_relations"),
      p: t("build_great_relations_content")
    },
    {
      key: 3,
      h2: t("become_a_member"),
      p: t("become_a_member_content"),
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
              <Image
                src="/img/favicon-gorgo-community-alternative.jpg"
                alt=""
                height={30}
                width={30}
              />
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

import Link from "next/link";
import useTranslation from "next-translate/useTranslation";


const HeroFooter = () => {


  const {t} = useTranslation("common")

  return (
    <div
      className="section-5 container-fluid"
      style={{ borderTop: ".5px solid grey" }}
    >
      <div className="container">
        <h2>
          {t("reading_is_essential_for_those_who_seek_to_rise")} 
          <span> {t("above_the_ordinary")}</span>.
        </h2>
        <Link href={"/"}>
          <button>{t("get_started")}</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroFooter;

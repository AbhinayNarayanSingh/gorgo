import useTranslation from "next-translate/useTranslation";

const BecomePro = () => {
  const { t } = useTranslation("common");
  return (
    <div className="sidebar-content-container">
      <div className="become-pro-member">
        <h2>{t("Become Pro")}</h2>
        <p>{t("Become_Pro_Details")}</p>
        <button>{t("Upgrade Now")}</button>
      </div>
    </div>
  );
};

export default BecomePro;

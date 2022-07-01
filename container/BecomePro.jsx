import useTranslation from "next-translate/useTranslation";

const BecomePro = () => {
  const { t } = useTranslation("common");
  return (
    <div className="sidebar-content-container">
      <div className="become-pro-member">
        <h2>{t("become_pro")}</h2>
        <p>{t("become_pro_details")}</p>
        <button>{t("upgrade_now")}</button>
      </div>
    </div>
  );
};

export default BecomePro;

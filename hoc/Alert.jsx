import { useSelector } from "react-redux";

const Alert = () => {
  const { active, alertMsg } = useSelector((state) => state.alert);
  return (
    <div className={`alert-popup ${active ? "active" : ""} `}>
      <p>
        <span>Error:</span> {alertMsg}
      </p>
    </div>
  );
};

export default Alert;

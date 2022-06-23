import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { auth } = useSelector((state) => state.auth);
  const [toggel, setToggel] = useState(false);

  return (
    <>
      <div className="nav-user-profile ">
        <img
          src={auth["profile"] || "/img/profile.jpg"}
          alt=""
          onClick={() => setToggel((toggel) => !toggel)}
        />
        <div className={`user-action-option ${toggel ? "active" : ""}`}>
          <Link href="/new-article">New article</Link>
          <Link href="/">Profile</Link>
          <p>Logout</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

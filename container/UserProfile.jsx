import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { userSignOutAuthenticationAction } from "../redux/actions/userAuthenticationAction";

const UserProfile = () => {
  const { auth } = useSelector((state) => state.auth);
  const [toggel, setToggel] = useState(false);
  const dispatch = useDispatch();

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
          <p onClick={() => dispatch(userSignOutAuthenticationAction())}>
            Logout
          </p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

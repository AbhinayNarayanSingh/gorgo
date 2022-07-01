import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// component
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

// container
import Activity from "../container/profile/activity";
import ProfileContainer from "../container/profile/Profile";
import Setting from "../container/profile/Setting";

const Profile = () => {
  const router = useRouter();

  const [activeSection, setActiveSection] = useState("Activity");
  const { isUserIsAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isUserIsAuthenticated) {
      router.push(`/signin?next=${router.asPath}`);
    }
  }, [isUserIsAuthenticated]);
  return (
    <div>
      <>
        <Header title="Abhinay Narayan Singh" />
        <Navigation />
      </>
      <div className="container" style={{ padding: 0 }}>
        <div className="user-profile-page row">
          <div className="col-12 background-cover">
            <img src="../img/cover.png" alt="" />

            <div className="profile">
              <img src="../img/blank-profile.jpeg" alt="" />

              <div className="user-details">
                <h3>
                  abhinaynarayansingh@appscrip.co
                  <span>
                    <i className="fa-solid fa-certificate"></i>
                  </span>
                </h3>
                <h2>Abhinay Narayan Singh</h2>
                <p>
                  Me unpleasing impossible in attachment announcing so
                  astonished
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container toggel-nav">
        <div className="row">
          <div
            className={`col col-4 ${activeSection === "Activity" && "active"}`}
            onClick={() => setActiveSection("Activity")}
          >
            <p>Activity</p>
          </div>
          <div
            className={`col col-4 ${activeSection === "Profile" && "active"}`}
            onClick={() => setActiveSection("Profile")}
          >
            <p>Profile</p>
          </div>
          <div
            className={`col col-4 ${activeSection === "Setting" && "active"}`}
            onClick={() => setActiveSection("Setting")}
          >
            <p>Setting</p>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ backgroundColor: "#F8F9FA", padding: "2rem .25rem" }}
      >
        <div className="container">
          {activeSection === "Activity" && <Activity />}
          {activeSection === "Profile" && <ProfileContainer />}
          {activeSection === "Setting" && <Setting />}
        </div>
      </div>

      <>
        <Footer />
      </>
    </div>
  );
};

export default Profile;

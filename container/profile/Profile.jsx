import React from "react";

const ProfileContainer = () => {
  const data = [
    {
      particular: "Name",
      value: "Abhinay Narayan Singh",
    },
    {
      particular: "Email",
      value: "abhinaynarayansingh@appscrip.co",
    },
    {
      particular: "Info",
      value: `Me unpleasing impossible in attachment announcing so astonished`,
    },
  ];
  return (
    <div className="ProfileContainer">
      {data.map((item, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-md-2">
              <h3>{item["particular"]}</h3>
            </div>
            <div className="col-md-9">
              <p>{item["value"]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileContainer;

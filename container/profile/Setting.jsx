import React, { useState } from "react";
import Input from "../../components/Input";
import PrimaryFileInput from "../../components/PrimaryFileInput";

const Setting = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");

  const [profile, setProfile] = useState([{ url: null, file: null }]);

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <Input
          type="text"
          label="Name *"
          placeholder="Enter your name"
          value={name}
          setValue={setName}
          // id
        />

        <Input
          type="email"
          label="Email *"
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
          // id
        />
        <Input
          type="text"
          label="Info (max 250 character)"
          placeholder="Enter short discription"
          value={info}
          setValue={setInfo}
          // id
        />

        <PrimaryFileInput
          value={profile}
          setValue={setProfile}
          index={0}
          id={"profile"}
          label="Update profile image"
          varient="square"
        />
        <PrimaryFileInput
          value={profile}
          setValue={setProfile}
          index={0}
          id={"profile"}
          label="Update cover image"
        />
        <button className="btn-primary">Save Changes</button>
      </div>
    </div>
  );
};

export default Setting;

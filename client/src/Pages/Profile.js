import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Myprofile from "../component/Profile/Myprofile";
import Mytransaction from "../component/Profile/Mytransaction";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="row d-flex ms-5 mt-5 justify-content-between mb-5">
        <Myprofile />
        <Mytransaction />
      </div>
    </div>
  );
};

export default Profile;

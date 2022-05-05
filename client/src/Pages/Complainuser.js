import React from "react";
import Chatbody from "../component/Chat/Chatbody";
import Chatlist from "../component/Chat/Chatlist";
import Navbar from "../component/Navbar/Navbar";

const Complainuser = () => {
  return (
    <div>
      <Navbar />
      <div className="row mt-5 m-4">
        <Chatlist />
        <Chatbody />
      </div>
    </div>
  );
};

export default Complainuser;

import React from "react";
import Chatadmin from "../component/Chat/Chatadmin";
import ChatAdminbody from "../component/Chat/ChatAdminbody";
import Navbar from "../component/Navbar/Navbar";

const AdinChat = () => {
  return (
    <div>
      <Navbar />
      <div className="row mt-5 m-4">
        <Chatadmin />
        <ChatAdminbody />
      </div>
    </div>
  );
};

export default AdinChat;

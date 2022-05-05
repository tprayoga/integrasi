import React from "react";
import Merch from "../assets/Frame (1).png";

const ChatAdminbody = () => {
  return (
    <div className="col-8 d-flex flex-column justify-content-end" style={{ height: "80vh" }}>
      <div className="d-flex ms-3">
        <img className="me-3 rounded-circle" src={Merch} alt="" height={"50px"} />
        <div className="d-flex">
          <p className=" bg-secondary p-3 text-light" style={{ borderRadius: "30px", width: "max-content" }}>
            Hello Admin, I need your help
          </p>
        </div>
      </div>
      <div className="d-flex ms-3 mt-4">
        <input type="text" className=" mb-4 fw-600 form-control p-3" id="formGroupExampleInput" placeholder="Send Message" style={{ border: "none" }}></input>
      </div>
    </div>
  );
};

export default ChatAdminbody;

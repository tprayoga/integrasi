import React from "react";
import Merch from "../assets/Frame (1).png";

const Chatlist = () => {
  return (
    <div className="col-4 d-flex" style={{ height: "80vh" }}>
      <div className="d-flex">
        <img className="img rounded-circle me-3" src={Merch} alt="admin" height={"50px"} />
        <div>
          <p className="text-light mb-1">
            <strong>Admin</strong>
          </p>
          <p className="text-light">Yes, is there anything i can help you</p>
        </div>
      </div>
      <div className="d-flex ms-auto" style={{ height: "100%" }}>
        <div className="vr text-light"></div>
      </div>
    </div>
  );
};

export default Chatlist;

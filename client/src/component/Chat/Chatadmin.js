import React from "react";
import Merch from "../assets/Frame (1).png";

const Chatadmin = () => {
  return (
    <div className="col-4 d-flex" style={{ height: "80vh" }}>
      <div>
        <div className="d-flex">
          <img className="img rounded-circle me-3" src={Merch} alt="admin" height={"50px"} />
          <div>
            <p className="text-light mb-1">
              <strong>Teguh</strong>
            </p>
            <p className="text-light">Hello Admin, I need your help</p>
          </div>
        </div>
        <div className="d-flex">
          <img className="img rounded-circle me-3" src={Merch} alt="admin" height={"50px"} />
          <div>
            <p className="text-light mb-1">
              <strong>Egi LOL</strong>
            </p>
            <p className="text-light">Hello Admin, this problem product to me</p>
          </div>
        </div>
      </div>

      <div className="d-flex ms-auto" style={{ height: "100%" }}>
        <div className="vr text-light"></div>
      </div>
    </div>
  );
};

export default Chatadmin;

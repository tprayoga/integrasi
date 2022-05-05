import React from "react";
import Descr from "../component/Detail/Descr";
import Detailimage from "../component/Detail/Detailimage";
import Navbar from "../component/Navbar/Navbar";

const Detailproduct = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex mt-5 mx-4">
        <div className="row">
          <Detailimage />
          <Descr />
        </div>
      </div>
    </div>
  );
};

export default Detailproduct;

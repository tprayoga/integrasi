import React from "react";
import Editproduct from "../component/Editproduct/Editproduct";
import Navbar from "../component/Navbar/Navbar";

const Productedit = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-danger mt-5 text-lg-start text-center mb-5">Edit Product</h2>
            <Editproduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productedit;

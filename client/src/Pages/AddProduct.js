import React from "react";
import AddProductss from "../component/Editproduct/AddProductss";
import Navbar from "../component/Navbar/Navbar";

const AddProduct = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-danger mt-5 text-lg-start text-center mb-5">Add Product</h2>
            <AddProductss />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

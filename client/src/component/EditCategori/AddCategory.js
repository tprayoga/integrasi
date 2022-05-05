import React from "react";
import { Link } from "react-router-dom";

const AddCategorys = () => {
  return (
    <div className="container">
      <form className="card-body d-grid">
        <h2 className="mb-5 mt-5 text-danger">Add Category</h2>
        <input type="text" className="form-control py-3 mb-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""></input>
        <Link to="/category" className="btn btn-success py-3" type="button">
          Save
        </Link>
      </form>
    </div>
  );
};

export default AddCategorys;

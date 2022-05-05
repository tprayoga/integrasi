import React from "react";

const Myprofile = () => {
  return (
    <div className=" col-md-7">
      <h2 className="text-danger mb-4">My Profile</h2>
      <div className=" mb-3  d-flex justify-content-center align-items-center">
        <div className="row g-0">
          <div className="card-body col-md-2">
            <img src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DQ1033-010-1.png" className="img-fluid" alt="..." />
          </div>
          <div className="card-body col-md-1">
            <div className="card-body">
              <h5 className="card-title text-danger">Name</h5>
              <p className="card-text text-light">Teguh</p>
              <h5 className="card-title text-danger">Email</h5>
              <p className="card-text text-light">tprayogaa26@gmail.com</p>
              <h5 className="card-title text-danger">Phone</h5>
              <p className="card-text text-light">083116524330</p>
              <h5 className="card-title text-danger">Gender</h5>
              <p className="card-text text-light">Male</p>
              <h5 className="card-title text-danger">Address</h5>
              <p className="card-text text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;

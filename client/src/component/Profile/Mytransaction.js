import React from "react";
import Merch from "../assets/Frame (1).png";

const Mytransaction = () => {
  return (
    <div className="col-md-5">
      <h2 className="text-danger mb-5">My Transaction</h2>
      <div class="ms-5 mb-3 col-10 bg-dark d-flex justify-content-end">
        <div class="row g-0">
          <div class="col-md-2 d-flex align-items-center">
            <img src="https://cdn.shopify.com/s/files/1/0538/9280/8895/products/DH4245-002-1.png" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body text-danger">
              <h6>AIR MAX 2021</h6>
              <p>
                <small>
                  <strong>Monday</strong> 12 Desember 2023 <br /> <span className="text-light"> Price: Rp 2.990.000</span>
                </small>
              </p>
              <p class="card-text text-light">
                <small>
                  <strong>Sub Total : Rp 2.990.000</strong>
                </small>
              </p>
            </div>
          </div>
          <div class="col-md-1 d-flex justify-content-end align-items-center">
            <img src={Merch} class="img-fluid rounded float-end" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mytransaction;

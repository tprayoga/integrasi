import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Tableproducts from "../component/Table/Tableproducts";
import { Link } from "react-router-dom";
import { API } from "../config/api";
import { useQuery } from "react-query";

const Product = () => {
  let { data: products } = useQuery('productsCache', async () => {
    const response = await API.get('/products');
    return response.data.data.products
  });
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between">
              <h2 className="text-danger mt-5 text-lg-start text-center">List Product</h2>
              <div className=" mt-5 text-lg-start text-center ">
                <Link to="/add-product" className="btn btn-dark m-1 px-5" type="button">
                  Add
                </Link>
              </div>
            </div>{" "}
            <table className="table table-dark table-striped mt-4">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Photo</th>
                  <th scope="col" className="col-2">
                    Product Name
                  </th>
                  <th scope="col" className="text-center">
                    Product Description
                  </th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col" className="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              {products?.map((item, index) => (
                 <Tableproducts key={index} item = {item} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

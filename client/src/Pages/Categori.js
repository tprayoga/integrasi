import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Tablecategory from "../component/Table/Tablecategory";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";

const Categori = () => {
  let { data: categories } = useQuery('categoriesCache', async () => {
    const response = await API.get('/categories');
    return response.data.data.categories
  });
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between">
              <h2 className="text-danger mt-5 text-lg-start text-center">List Category</h2>
              <div className=" mt-5 text-lg-start text-center ">
                <Link to="/add-category" className="btn btn-dark m-1 px-5" type="button">
                  Add
                </Link>
              </div>
            </div>
            <table className="table table-dark table-striped mt-4">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Category Name</th>
                  <th scope="col" className="">
                    Action
                  </th>
                </tr>
              </thead>
              {categories?.map((item, index) => (
                 <Tablecategory key={index} item = {item} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categori;

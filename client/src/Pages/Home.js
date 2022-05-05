import React, { useContext, useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Cards from "../component/Card/Cards";
import Pagination from "../component/Card/Pagination";
import { UserContext } from "../context/userContext";
import { useQuery } from "react-query";
import { API } from "../config/api";

const Home = () => {
  const [state] = useContext(UserContext);

  console.log(state);
  const [query, setQuery] = useState("");

  let { data: products } = useQuery('productsCache', async () => {
    const response = await API.get('/products');
    return response.data.data.products
  });
  return (
    <div>
      <Navbar />
      <div className="mt-5 container">
        <div className="row m-4 justify-content-center">
          <div className="d-flex justify-content-between">
            <h2 className="text-danger mb-4">Products</h2>
            <form className="ms-3">
              <input className="form-control " type="search" placeholder="Search" aria-label="Search" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
            </form>
          </div>
          {products?.map((item, index) => (
            <Cards key={index} item = {item}  />
          ))}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Home;

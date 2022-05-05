import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { API } from "../../config/api";

const Descr = () => {
  const {id} = useParams();
  // let { data: product } = useQuery('productCache', async () => {
  //   const response = await API.get('/product/' + id);
  //   return response.data.data.product
  // });

  const [product, setProduct] = useState()
  useEffect (()=> {
    const fetchData = async()=> {
      const response = await API.get ('/product/' + id)
      console.log(response.data.data.products);
      setProduct(response.data.data.products)
    }
    fetchData()
  },[])

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return (
    <div className="mt-3  col-md-6 text-lg-start text-center">
      <h1 className="text-danger mb-2">{product?.name}</h1>
      <p className="text-light">Stock:{product?.qty} </p>
      <p className="text-light" style={{ textAlign: "justify" }}>
        {product?.desc}
      </p>
      <h3 className="text-danger d-flex justify-content-end mb-3">{formatter.format(product?.price)}</h3>
      <div className="mb-4 d-flex justify-content-end">
        <button class="btn btn-outline-dark rounded-circle me-2" type="button">
          37
        </button>
        <button className="btn btn-outline-dark rounded-circle me-2" type="button">
          38
        </button>
        <button class="btn btn-outline-dark rounded-circle me-2" type="button">
          39
        </button>
        <button class="btn btn-outline-dark rounded-circle me-2" type="button">
          40
        </button>
        <button class="btn btn-outline-dark rounded-circle me-2" type="button">
          41
        </button>
      </div>
      <div className="d-grid">
        <Link to="/profile" className="btn btn-lg btn-danger mb-2" type="button">
          Buy
        </Link>
        <button className="btn btn-lg btn-dark mb-2" type="button">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default Descr;

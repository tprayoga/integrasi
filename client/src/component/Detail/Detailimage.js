import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";

const Detailimage = () => {
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

  

  return (
    <div className="me-5 card border-danger bg-dark col-md-5 text-lg-start text-center">
      <img src={product?.image} className="img-fluid w-100" alt="..." />
    </div>
  );
};

export default Detailimage;

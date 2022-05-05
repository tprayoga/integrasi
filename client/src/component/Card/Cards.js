import React from "react";
import { Link } from "react-router-dom";

const Cards = ({item}) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });
  return (
    <Link to={`/detail-product/${item.id}`} className="card text-white bg-dark p-2 col-md-2 m-2 text-decoration-none">
      <form className="card-body d-grid">
        <img src={item.image} className="card-img-top mb-2" alt="..." />
        <h3 className="mb-4 text-danger">{item.name}</h3>
        <h6 className="mb-1">{`${formatter.format(item.price)}`}</h6>
        <p>Stock:{item.qty}</p>
      </form>
    </Link>
  );
};

export default Cards;

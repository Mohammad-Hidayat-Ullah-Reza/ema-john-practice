import "./Products.css";
import React from "react";

const Products = ({ product }) => {
  const { id, name, img, price, ratings } = product;
  return (
    <div className="product">
      <img className="product-img" src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button className="product-btn">Add to Cart</button>
    </div>
  );
};

export default Products;

import "./Products.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
      <button className="product-btn">
        Add to Cart <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Products;

import "./Shop.css";
import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import Calculation from "../Calculation/Calculation";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((data) => data.json())
      .then((res) => setProducts(res))
      .catch((e) => console.log(e));
  }, []);
  // console.log(products);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Products key={product.id} product={product}></Products>
        ))}
      </div>
      <Calculation></Calculation>
    </div>
  );
};

export default Shop;

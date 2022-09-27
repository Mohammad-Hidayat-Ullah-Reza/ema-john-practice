import "./Shop.css";
import React, { useEffect, useState } from "react";
import Products from "../Products/Products";

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
    <div>
      {products.map((product) => (
        <Products key={product.id} product={product}></Products>
      ))}
    </div>
  );
};

export default Shop;

import React, { useEffect, useState } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { API } from "../backend";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, [API]);

  return (
    <Base title="Home page" description="Welcome to Store">
      <div className="container">
        <div className="row text-center">
          <h2 className="text-black">All product</h2>
          <div className="row">
            {products.map((product, index) => {
              return (
                <div key={index} className="col-4 mb-4">
                  <Card product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;

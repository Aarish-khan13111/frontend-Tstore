import React from "react";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ product, addtoCart = true, removeFromCart = false }) => {
  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={() => {}}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveToCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {}}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className="card text-white bg-light border border-dark ">
      <div className="card-body">
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap mt-2">
          this photo looks great
        </p>
        <p className="btn btn-success rounded  btn-sm px-4"> price:$ 5</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveToCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
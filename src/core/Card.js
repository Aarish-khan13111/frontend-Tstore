import React from "react";
import "../styles.css";
import ImageHelper from "./helper/ImageHelper";
import { API } from "../backend";

const Card = ({ product, addtoCart = true, removeFromCart = false }) => {
  const cardTitle = product ? product.name : "Title unknown";
  const cardDescription = product ? product.description : "Default description";
  const cardPrice = product ? product.price : "DEAFULT";

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button onClick={() => {}} className="btn rounded btn-info mt-2 mb-2">
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
    <section class="articles">
      <article>
        <div className="article-wrapper">
          <figure>
            {/* //TODO: write props Product={product} */}
            <ImageHelper product={product} />
          </figure>
          <div className="article-body">
            <h2>{cardTitle}</h2>
            <p>{cardDescription}</p>
            <p>Price:- {cardPrice}</p>
            {showAddToCart(addtoCart)}
            {showRemoveToCart(removeFromCart)}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Card;

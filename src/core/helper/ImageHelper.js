import React from "react";
import "../../styles.css";

import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `/noImg.jpg`;
  return (
    <figure>
      <img src={imageurl} alt="" />
    </figure>
  );
};

export default ImageHelper;

import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : `/noImg.jpg`;
  return (
    <div className="rounded border border-info p-2">
      <img
        src={imageUrl}
        alt=""
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-2 rounded"
      />
    </div>
  );
};

export default ImageHelper;

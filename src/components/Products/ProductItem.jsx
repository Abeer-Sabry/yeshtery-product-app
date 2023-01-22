import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ title, img }) => {
  console.log("title", title);
  return (
    <>
      <img style={{ width: "70px", height: "70px" }} src={img} alt={title} />
      <Link to={`/product/${title}`}>
        <h4 style={{ marginBottom: "20px" }}>{title}</h4>
      </Link>
    </>
  );
};

export default ProductItem;

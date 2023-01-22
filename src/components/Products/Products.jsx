import React from "react";
import ProductItem from "./ProductItem";

const Products = ({ data }) => {
  return (
    <>
      {data?.map(product => (
        <ProductItem key={product.id} {...product} />
      ))}
    </>
  );
};

export default Products;

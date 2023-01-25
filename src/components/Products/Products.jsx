import ProductItem from "./ProductItem";

import React, { Component } from "react";
import "./Products.scss";
class Products extends Component {
  render() {
    return (
      <>
        <div className="productsWrapper">
          {this.props.data?.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  }
}

export default Products;

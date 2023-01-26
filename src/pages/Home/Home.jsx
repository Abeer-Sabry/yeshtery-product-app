import React, { Component } from "react";
import "./Home.scss";
// components
import ProductItem from "../../components/Products/ProductItem";

class Home extends Component {
  render() {
    const { products, loading } = this.props;
    return (
      <>
        {loading ? (
          "Loading"
        ) : (
          <div className="productsWrapper">
            {products?.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </>
    );
  }
}

export default Home;

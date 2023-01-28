import React, { Component } from "react";
import "./Home.scss";
// components
import ProductItem from "../../components/Products/ProductItem";
import Spinner from "../../components/Spinner/Spinner";

class Home extends Component {
  render() {
    const { products, loading } = this.props;
    return (
      <>
        {loading ? (
          <Spinner />
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

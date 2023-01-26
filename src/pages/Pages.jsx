import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Container from "../reusableComponents/Container/Container";

const SingleProduct = React.lazy(() => import("../pages/SingleProduct/SingleProduct"));

export default class Pages extends Component {
  render() {
    const { products, loading, addToCart, cartItems } = this.props;
    return (
      <Container>
        <Routes>
          <Route path="/" element={<Home products={products} loading={loading} />} />
          <Route
            path="/products/:id"
            element={
              <React.Suspense>
                <SingleProduct addToCart={addToCart} cartItems={cartItems} />
              </React.Suspense>
            }
          />
        </Routes>
      </Container>
    );
  }
}

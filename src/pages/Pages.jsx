import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import SingleProduct from "./SingleProduct/SingleProduct";
import Container from "../reusableComponents/Container/Container";

export default class Pages extends Component {
  render() {
    return (
      <Container>
        <Routes>
          <Route
            path="/"
            element={<Home products={this.props.products} loading={this.props.loading} />}
          />
          <Route path="products/:title" element={<SingleProduct />} />

          {/* <Route path="/products/:title" render={props => <SingleProduct {...props} />} /> */}
        </Routes>
      </Container>
    );
  }
}

import { Route, Routes } from "react-router-dom";
import CartModal from "../components/CartModal/CartModal";
import Home from "./Home/Home";
import SingleProduct from "./SingleProduct/SingleProduct";

import React, { Component } from "react";
import { axiosInstance } from "../api/axios";
import Layout from "../components/Layout/Layout";

export default class Pages extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }
  componentDidMount() {
    axiosInstance.get("/products").then(response => {
      console.log("res", response.data);
      this.setState({ loading: false, products: response.data });
    });
  }
  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home products={this.state.products} loading={this.state.loading} />}
          />
          <Route path="products/:title" element={<SingleProduct />} />

          {/* <Route path="/products/:title" render={props => <SingleProduct {...props} />} /> */}
        </Routes>
        <CartModal products={this.state.products} loading={this.state.loading} />
      </div>
    );
  }
}

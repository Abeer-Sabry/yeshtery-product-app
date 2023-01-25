import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home.jsx";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

import Contacts from "./components/Contacts/Contacts";
import Category from "./components/Category/Category";
import Container from "./reusableComponents/Container/Container";
import CartModal from "./components/CartModal/CartModal";
import Layout from "./components/Layout/Layout";
import Pages from "./pages/Pages";
// import { axiosInstance } from "./api/axios";

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     products: [],
  //     loading: true,
  //   };
  // }
  // componentDidMount() {
  //   axiosInstance.get("/products").then(response => {
  //     console.log("res", response.data);
  //     this.setState({ loading: false, products: response.data });
  //   });
  // }
  render() {
    return (
      <div className="App">
        <Contacts />
        <Navbar />
        <Category />
        <Container>
          <Pages />
        </Container>
        {/* <CartModal /> */}
        <Footer />
      </div>
    );
  }
}

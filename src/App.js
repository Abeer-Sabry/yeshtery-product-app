import React, { Component } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./components/Contacts/Contacts";
import Category from "./components/Category/Category";
import CartModal from "./components/CartModal/CartModal";
import Pages from "./pages/Pages";
import { axiosInstance } from "./api/axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
      cartItems: [],
    };
  }
  componentDidMount() {
    axiosInstance.get("/products").then(response => {
      this.setState({
        loading: false,
        products: response.data,
      });
    });
  }
  componentDidUpdate() {
    // this.setState({
    //   cartItems: this.state.products && this.state.products.filter(product => product.qty > 0),
    // });
  }
  render() {
    const cartItems = this.state.products && this.state.products.filter(product => product.qty > 0);
    return (
      <div className="App">
        <Contacts />
        <Navbar cartItems={cartItems} />
        <Category />
        <Pages products={this.state.products && this.state.products} loading={this.state.loading} />
        <CartModal cartItems={cartItems} />
        <Footer />
      </div>
    );
  }
}

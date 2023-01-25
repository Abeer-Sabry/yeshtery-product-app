import React, { Component } from "react";
// components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./components/Contacts/Contacts";
import Category from "./components/Category/Category";
import CartModal from "./components/CartModal/CartModal";
// pages
import Pages from "./pages/Pages";
// services
import { getData } from "./services";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
      cartItems: [],
      showCartModal: false,
    };
  }
  // fetching products data
  componentDidMount() {
    getData("/products").then(response => {
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

  // this onClick cartIcon in Navbar component Function for toggling cartModal
  toggleCart = () => {
    this.setState({
      showCartModal: !this.state.showCartModal,
    });
  };
  // this onClick closeIcon in CartModal component Function for closing cartModal
  closeCart = () => {
    this.setState({
      showCartModal: false,
    });
  };

  render() {
    console.log("products", this.state.products);
    const cartItems = this.state.products && this.state.products.filter(product => product.qty > 0);
    return (
      <div className="App">
        <Contacts />
        <Navbar cartItems={cartItems} toggleCart={this.toggleCart} />
        <Category />
        <Pages products={this.state.products && this.state.products} loading={this.state.loading} />
        {this.state.showCartModal && <CartModal cartItems={cartItems} closeCart={this.closeCart} />}
        <Footer />
      </div>
    );
  }
}

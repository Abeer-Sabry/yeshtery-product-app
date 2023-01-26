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
      showCartModal: false,
      cartItems: [],
    };
  }

  addToCart = product => {
    const exist = this.state.cartItems.find(item => item.id === product.id);
    this.setState({
      cartItems: exist
        ? this.state.cartItems.map(item =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...this.state.cartItems, { ...product, qty: product.qty + 1 }],
    });
  };

  // fetching products data
  componentDidMount() {
    getData("/products").then(response => {
      this.setState({
        loading: false,
        products: response.data,
      });
    });
  }

  // this onClick cartIcon in Navbar component Function for opening cartModal
  showCart = () => {
    this.setState({
      showCartModal: true,
    });
  };
  // this onClick closeIcon in CartModal component Function for closing cartModal
  closeCart = () => {
    this.setState({
      showCartModal: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Contacts />
        <Navbar cartItems={this.state.cartItems} showCart={this.showCart} />
        <Category />
        <Pages
          products={this.state.products && this.state.products}
          loading={this.state.loading}
          cartItems={this.state.cartItems}
          addToCart={this.addToCart}
        />
        {this.state.showCartModal && (
          <CartModal cartItems={this.state.cartItems} closeCart={this.closeCart} />
        )}
        <Footer />
      </div>
    );
  }
}

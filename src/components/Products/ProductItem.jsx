import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemDesign from "../../reusableComponents/ItemDesign/ItemDesign";
import { updateCart } from "../../services";
import CartModal from "../CartModal/CartModal";

export default class ProductItem extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      loading: true,
    };
  }

  render() {
    console.log("LinkTitle", this.props.product.title);
    const { id, title, img, price, brandLogo, rating, discount, qty } = this.props.product;

    return (
      <>
        <Link to={`/products/${title}`}>
          <ItemDesign
            img={img}
            title={title}
            price={price}
            logo={brandLogo}
            rating={rating}
            discount={discount}
            percentage={discount}
          />
          <button
            onClick={() =>
              updateCart("products", id, {
                ...this.props.product,
                qty: qty + 1,
              })
            }
          >
            add to cart
          </button>
        </Link>
        {/* <CartModal /> */}
      </>
    );
  }
}

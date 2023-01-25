import React, { Component } from "react";
import { Link } from "react-router-dom";
import { updateCart } from "../../services";
import "./ProductItem.scss";

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
    const { id, title, img, price, brandLogo, rating, discount, qty, logo } = this.props.product;

    const percentageDiscount = discount ? (discount / 100) * price : null;
    const newPrice = price - percentageDiscount;
    return (
      <>
        <Link to={`/products/${title}`}>
          <div className="designWrapper">
            <img className="productImg" src={img} alt={title} />
            <p>{title}</p>
            <div className="info">
              <div c>
                <span className="productPrice">${newPrice}</span>
                <div>
                  <del className="productDiscount">{price}</del>
                  <span className="productPercentage">{discount}%</span>
                </div>
              </div>
              <div>
                <img className="productLogo" src={brandLogo} alt="" />
              </div>
            </div>
            <div>
              <span className="rateNumber">{rating} of 5</span>
            </div>
          </div>
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

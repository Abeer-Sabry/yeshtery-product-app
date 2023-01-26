import React, { Component } from "react";
import "./ProductItem.scss";
import { Link } from "react-router-dom";
// helpers
import { formatDiscount, numberWithCommas } from "../../helpers/price";
// mui
import { Rating } from "@mui/material";

export default class ProductItem extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      loading: true,
    };
  }

  render() {
    const { id, title, img, price, brandLogo, rating, discount } = this.props.product;

    return (
      <>
        <Link to={`/products/${id}`}>
          <div className="designWrapper">
            <img className="productImg" src={img} alt={title} />
            <p>{title}</p>
            <div className="info">
              <div c>
                <span className="productPrice">
                  ${numberWithCommas(formatDiscount(price, discount))} L.E
                </span>
                <div>
                  <del className="productDiscount">${numberWithCommas(price)} </del>
                  <span className="productPercentage">{discount}%</span>
                </div>
              </div>
              <div>
                <img className="productLogo" src={brandLogo} alt="" />
              </div>
            </div>
            <div className="ratingDiv">
              <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
              <span className="rate">{rating} of 5</span>
            </div>
            <div className="country">
              <div>
                from: <span>uk</span>
              </div>
              <div>
                to: <span>egypt</span>
              </div>
              <div>
                in: <span>10</span>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

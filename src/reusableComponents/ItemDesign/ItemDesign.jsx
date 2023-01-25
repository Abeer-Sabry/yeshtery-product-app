import React, { Component } from "react";
import "./ItemDesign.scss";

class ItemDesign extends Component {
  render() {
    const { img, title, price, discount, percentage, logo, rating } = this.props;
    const percentageDiscount = discount ? (discount / 100) * price : null;
    const newPrice = price - percentageDiscount;
    return (
      <div className="designWrapper">
        <img className="productImg" src={img} alt={title} />
        <p>{title}</p>
        <div className="info">
          <div c>
            <span className="productPrice">${newPrice}</span>
            <div>
              <del className="productDiscount">{price}</del>
              <span className="productPercentage">{percentage}%</span>
            </div>
          </div>
          <div>
            <img className="productLogo" src={logo} alt="" />
          </div>
        </div>
        <div>
          <span className="rateNumber">{rating} of 5</span>
        </div>
      </div>
    );
  }
}

export default ItemDesign;

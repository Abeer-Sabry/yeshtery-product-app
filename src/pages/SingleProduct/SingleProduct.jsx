import React, { Component } from "react";
import "./SingleProduct.scss";
// components
import Button from "../../reusableComponents/Button/Button";
import BrandProducts from "../../components/BrandProducts/BrandProducts";
import { withRouter } from "react-router";
import { getDataByTitle } from "../../services";
export default class SingleProduct extends Component {
  componentDidMount() {
    // console.log(title);
    // getDataByTitle(`/products?title=${title}`).then(res => console.log(res));
  }

  render() {
    // const queryParams = new URLSearchParams(window.location.search);
    // const title = queryParams.get("title");
    // const search = this.props.location.search;
    // const title = new URLSearchParams(search).get("title");
    // console.log(Location.pathname);
    // const { title } = this.props.match.params;

    return (
      <div>
        <div className="singlePage">
          <div>
            <img src="/images/Group 333.png" alt="" />
          </div>

          <div>
            <img className="singleLogo" src="/images/Group 745.svg" alt="" />
            <h2>shirt</h2>
            <p className="cate">men</p>
            <div className="singleRating">
              <span>00</span>
              <span>2.5 of 5</span>
              <span className="rate">22 Rates</span>
            </div>
            <div className="singlePrice">
              <span className="price">55222</span>
              <span>
                <del className="singleDiscount">55222</del>
              </span>
              <span className="percent">30%</span>
            </div>
            <hr />

            <h3>size</h3>
            <ul className="sizes">
              <li>
                <span>small</span>
                <span>small</span>
                <span>small</span>
                <span>small</span>
                <span>small</span>
              </li>
            </ul>
            <hr />
            <h3>colors</h3>
            <img className="colorsImg" src="/images/Group 333.png" alt="" />
            <hr />
            <h3>Quantity</h3>
            <div className="addToCart">
              1<span className="decrement">-</span>
              <span className="increment">+</span>
            </div>
            <div className="cartBtns">
              <Button bg={false}>Add to Cart</Button>
              <Button>PickUp From Store</Button>
            </div>
          </div>
        </div>

        {/* <>
         {data.data[0].tit
         <BrandProducts brand={data.data[0].brand} />
         } 
         </> */}
      </div>
    );
  }
}

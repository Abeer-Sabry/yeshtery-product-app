import React, { Component } from "react";
import "./BrandProducts.scss";
// component
import ProductItem from "../Products/ProductItem";
// services
import { getDataByBrandAndKind } from "../../services";
// plugin
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default class BrandProducts extends Component {
  constructor() {
    super();
    this.state = {
      similarProducts: [],
    };
  }

  componentDidMount() {
    getDataByBrandAndKind("products", this.props.brand, this.props.kind).then(res =>
      this.setState({
        similarProducts: res.data,
      })
    );
  }
  responsive = {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1100: {
      items: 4,
    },
  };
  render() {
    return (
      <div className="brandWrapper">
        <h3>Similar Products</h3>
        <p>You may like these products also</p>
        <AliceCarousel
          responsive={this.responsive}
          disableButtonsControls={true}
          mouseTracking
          items={
            this.state.similarProducts &&
            this.state.similarProducts.map(product => (
              <ProductItem key={product.id} product={product} />
            ))
          }
        />
      </div>
    );
  }
}

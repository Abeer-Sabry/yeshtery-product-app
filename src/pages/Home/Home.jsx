import React, { Component } from "react";
// components
import Products from "../../components/Products/Products";
import { axiosInstance } from "../../api/axios";

class Home extends Component {
  render() {
    return (
      <>
        {this.props.loading ? (
          "Loading"
        ) : (
          <Products data={this.props.products && this.props.products} />
        )}
      </>
    );
  }
}

export default Home;

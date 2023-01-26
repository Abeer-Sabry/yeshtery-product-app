import React, { Component } from "react";
import "./SingleProduct.scss";
// components
import Button from "../../reusableComponents/Button/Button";
import BrandProducts from "../../components/BrandProducts/BrandProducts";
// helpers
import withRouter from "../../helpers/withRouter";
import { formatDiscount, numberWithCommas } from "../../helpers/price";
// services
import { getDataById } from "../../services";
// plugins
import ImageGallery from "react-image-gallery";
import { Breadcrumbs, Rating, Typography } from "@mui/material";

class SingleProduct extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: true,
      activeSize: "small",
    };
  }
  componentDidMount() {
    getDataById("products", this.props.router.params.id).then(res => {
      this.setState({
        product: res.data,
        loading: false,
      });
    });
  }

  render() {
    const {
      title,
      brandLogo,

      brand,
      gender,
      category,
      kind,
      colors,
      rates,
      rating,
      price,
      discount,
      sizes,
      images,
    } = this.state.product;
    const { cartItems } = this.props;
    const item = cartItems.find(item => item.id === this.state.product.id);
    return (
      <div>
        {this.state.loading ? (
          "loading..."
        ) : (
          <>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography underline="hover" color="inherit" href="/">
                {gender}
              </Typography>
              <Typography underline="hover" color="inherit" href="/">
                {category}
              </Typography>
              <Typography underline="hover" color="inherit" href="/">
                {kind}
              </Typography>

              <Typography
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                {brand}
              </Typography>
              <Typography color="text.primary">{title}</Typography>
            </Breadcrumbs>

            <div className="singlePage">
              <div>
                <ImageGallery
                  items={images && images}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  autoPlay={true}
                />
              </div>

              <div>
                <img className="singleLogo" src={brandLogo} alt="" />
                <h3>{title}</h3>
                <p className="cate">{gender}</p>
                <div className="singleRating">
                  <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                  <span className="rate">{rating} of 5</span>
                  <span className="rate">{rates} Rates</span>
                </div>
                <div className="singlePrice">
                  <span className="price">
                    ${numberWithCommas(formatDiscount(price, discount))}
                  </span>
                  <span>
                    <del className="singleDiscount">${numberWithCommas(price)}</del>
                  </span>
                  <span className="percent">{discount}%</span>
                </div>
                <hr className="line" />

                <h3>size</h3>
                <ul className="sizes">
                  <li>
                    {sizes.map((size, idx) => (
                      <span
                        onClick={() =>
                          this.setState({
                            activeSize: size,
                          })
                        }
                        className={this.state.activeSize === size ? "active" : ""}
                        key={idx}
                      >
                        {size}
                      </span>
                    ))}
                  </li>
                </ul>
                <hr className="line" />
                <h3>colors</h3>
                {colors.map((color, idx) => (
                  <img key={idx} className="colorsImg" src={color.img} alt="" />
                ))}

                <hr className="line" />
                <h3>Quantity</h3>
                <div className="addToCart">
                  {item ? item.qty : 0}

                  <span className="decrement">-</span>
                  <span className="increment">+</span>
                </div>
                <div className="cartBtns">
                  <Button onClick={() => this.props.addToCart(this.state.product)} bg={false}>
                    Add to Cart
                  </Button>

                  <Button>PickUp From Store</Button>
                </div>
              </div>
            </div>

            <>
              <BrandProducts brand={brand && brand} kind={kind && kind} />
            </>
          </>
        )}
      </div>
    );
  }
}
export default withRouter(SingleProduct);

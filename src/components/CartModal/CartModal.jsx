import React, { Component } from "react";
import Button from "../../reusableComponents/Button/Button";
import "./CartModal.scss";
class CartModal extends Component {
  render() {
    const { cartItems } = this.props;
    console.log("modal", cartItems);
    return (
      <div className="overlay" onClick={e => e.stopPropagation()}>
        <div className="cartWrapper">
          <img
            className="closeIcon"
            src="/images/Group 1440.svg"
            alt=""
            onClick={() => this.props.closeCart()}
          />
          <h3>My Cart</h3>
          <p>cart summary</p>
          {cartItems.length ? (
            <>
              {cartItems.map(item => (
                <div key={item.id}>
                  <div className="cartItems">
                    <div>
                      <img className="itemImage" src={item.img} alt="" />
                    </div>
                    <div className="itemData">
                      <p>{item.title}</p>
                      <span>
                        {" "}
                        <span className="quan">
                          Quantity: {""}
                          {item.qty}
                        </span>
                      </span>
                      <div className="removeAction">
                        <span>{item.price} L.E</span>
                        <Button>Remove</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="total">
                <span>
                  total:{" "}
                  {cartItems.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.qty * currentValue.price,
                    0
                  )}
                </span>
              </div>
              <div className="cartButtons">
                <Button>Review Cart</Button>
                <Button bg={false}>complete checkout</Button>
              </div>
            </>
          ) : (
            <p style={{ fontSize: "20px", margin: "20px 0", textAlign: "center" }}>
              {" "}
              Cart Is Empty
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default CartModal;

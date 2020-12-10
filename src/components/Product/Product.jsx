import React, { Component } from "react";
import QuantityPicker from "../QntPicker/QntPicker";
import "./Product.css";

class Product extends Component {
  state = {
    quantity: 1,
  };
  render() {
    return (
      <div className="Product">
        <img
          className="prod-img"
          src={"./images/products/" + this.props.data.image}
          alt=""
        />
        <h4 className="prod-title">{this.props.data.title}</h4>

        <div className="Prices">
          <label className="total-value">${this.getTotal()}</label>
          <label className="price-value">
            ${this.props.data.price.toFixed(2)}
          </label>
        </div>

        <div className="prod-quan">
          <label className="prod-total">Total</label>
          <label className="prod-price">Price</label>
        </div>
        <div className="QPicker">
          <QuantityPicker
            onValueChange={(qnty) => this.handleQuantityChange(qnty)}
          ></QuantityPicker>
        </div>
        <button className="btn btn-sm btn-info btn-add">Add to cart</button>
      </div>
    );
  }
  getTotal = () => {
    return (this.props.data.price * this.state.quantity).toFixed(2);
  };

  handleQuantityChange = (qnty) => {
    console.log("Quantity has changed in Quantity Picker", qnty);
    this.setState({ quantity: qnty });
  };
}

export default Product;

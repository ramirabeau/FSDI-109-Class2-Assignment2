import React, { Component } from "react";
import Product from "../Product/Product";
import ProductService from "./../../Services/productService";

import "./Catalog.css";

class Catalog extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: "",
  };

  render() {
    var prodsToDisplay = this.state.products;
    // filter if there is a selected category

    if (this.state.selectedCategory !== "") {
      prodsToDisplay = prodsToDisplay.filter(
        (p) => p.category === this.state.selectedCategory
      );
    }

    return (
      <div className="Catalog-Page">
        <div className="Categories-State">
          <div className="cat-btn" onClick={() => this.setCategory("")}>
            All Products
          </div>
          {this.state.categories.map((cat) => (
            <div
              key={cat}
              className="cat-btn"
              onClick={() => this.setCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>
        <div className="Product-State">
          {prodsToDisplay.map((p) => (
            <Product key={p.id} data={p}></Product>
            //<Product></Product>
          ))}
        </div>
      </div>
    );
  }

  setCategory = (cat) => {
    this.setState({ selectedCategory: cat });
  };
  //component was rendered
  //lets call the service to get the data
  componentDidMount() {
    let service = new ProductService();
    const data = service.getProducts();

    //identify the unique categories
    let categories = [];

    for (let i = 0; i < data.length; i++) {
      var product = data[i];

      //travel the array, if the element does not exist in the array, pushto new array
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    }
    //set new state
    console.log(categories);
    this.setState({ products: data, categories: categories });
  }
}

export default Catalog;

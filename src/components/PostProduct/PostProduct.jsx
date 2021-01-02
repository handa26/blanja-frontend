import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

import css from "./PostProduct.module.css";

const qs = require("querystring");
const FormData = require("form-data");

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    "x-access-token": "Bearer " + localStorage.getItem("token"),
  },
};

class PostProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      category_id: "",
      product_price: "",
      product_description: "",
      product_rating: "",
      size: "",
      product_brand: "",
      product_qty: "",
      product_color: "",
      image: [],
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFile(e) {
    let image = e.target.files;
    this.setState({ image: image });
  }

  changeCategoryHandler() {
    const id = document.getElementById("category").value;
    this.setState({
      category_id: id,
    });
  }

  submitHandler = (e) => {
    let params = {
      product_name: this.state.product_name,
      category_id: this.state.category_id,
      product_price: this.state.product_price,
      product_description: this.state.product_description,
      product_rating: this.state.product_rating,
      size: this.state.size,
      product_brand: this.state.product_brand,
      product_qty: this.state.product_qty,
      product_color: this.state.product_color,
      image: this.state.image,
    };

    let formdata = new FormData();
    formdata.append("product_name", params.product_name);
    formdata.append("category_id", params.category_id);
    formdata.append("product_price", params.product_price);
    formdata.append("product_description", params.product_description);
    formdata.append("product_rating", params.product_rating);
    formdata.append("size", params.size);
    formdata.append("product_brand", params.product_brand);
    formdata.append("product_qty", params.product_qty);
    formdata.append("product_color", params.product_color);
    for (let i = 0; i < params.image.length; i++) {
      formdata.append("image", params.image[i]);
    }
    e.preventDefault();

    axios
      .post("http://localhost:3000/product", formdata, config)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const Row = styled.div`
      max-width: 1140px;
      margin: 0 auto;
    `;
    const Input = styled.input`
      padding: 0.5em;
      margin: 0.5em;
      background: #f1f1f1;
      border: none;
      color: black;
      border-radius: 3px;
      width: 100% !important;
    `;
    const Select = styled.select`
      padding: 0.5em;
      margin: 0.5em;
      color: black;
      background: #f1f1f1;
      border: none;
      border-radius: 3px;
      width: 100%;
    `;
    const StyledForm = styled.form`
      padding: 2.5rem 0.625rem;
      border-radius: 0.25rem;
    `;
    const Title = styled.h1`
      font-weight: 300;
      line-height: 1.2;
      word-spacing: 2px;
      margin-bottom: 30px;
      text-align: center;
      margin-top: 50px;
    `;
    const {
      product_name,
      product_brand,
      category_id,
      product_price,
      product_description,
      product_color,
      product_rating,
      image,
      product_qty,
    } = this.state;
    console.log(this.state);
    return (
      <>
        <Row>
          <Row>
            <Title>Add Product</Title>
          </Row>
          <StyledForm className={css.ContactForm} onSubmit={this.submitHandler}>
            <div className={`${css.Row} ${css.FormGroup}`}>
              <div>
                <label id='name-label'>Product Name</label>
              </div>
              <div>
                <Input
                  type='text'
                  id='name-label'
                  name='product_name'
                  placeholder='Nike Air...'
                  value={product_name}
                  onChange={this.changeHandler}
                />
              </div>
            </div>

            <div className={`${css.Row} ${css.FormGroup}`}>
              <div>
                <label id='name-label'>Product Brand</label>
              </div>
              <div>
                <Input
                  type='text'
                  name='product_brand'
                  placeholder='Adidas'
                  value={product_brand}
                  onChange={this.changeHandler}
                />
              </div>
            </div>

            <div className={`${css.Row} ${css.FormGroup}`}>
              <div>
                <label id='name-label'>Product Category</label>
              </div>
              <div>
                <Select
                  id='category'
                  onChange={(e) => this.changeCategoryHandler()}
                >
                  <option disabled selected hidden>
                    Choose product category
                  </option>
                  <option value='1'>T-shirt</option>
                  <option value='2'>Shorts</option>
                  <option value='3'>Jackets</option>
                  <option value='4'>Pants</option>
                  <option value='5'>Shoes</option>
                </Select>
              </div>
            </div>

            <div className={`${css.Row} ${css.FormGroup}`}>
              <div>
                <label id='name-label'>Product Color</label>
              </div>
              <div>
                <Input
                  type='text'
                  name='product_color'
                  placeholder='blue...'
                  value={product_color}
                  onChange={this.changeHandler}
                />
              </div>
            </div>

            <div className={`${css.Row} ${css.FormGroup}`}>
              <div>
                <label id='name-label'>Product Description</label>
              </div>
              <div>
                <Input
                  type='text'
                  name='product_description'
                  placeholder='This product was...'
                  value={product_description}
                  onChange={this.changeHandler}
                />
              </div>
            </div>

            <div className={`${css.Row} ${css.FormGroup}`}>
              <div>
                <label id='name-label'>Product Rating</label>
              </div>
              <div>
                <Input
                  type='text'
                  name='product_rating'
                  placeholder='Rating'
                  value={product_rating}
                  onChange={this.changeHandler}
                />
              </div>
            </div>

            <div className={`${css.Row} ${css.FormGroup}`}>
              <div>
                <label id='name-label'>Product Price</label>
              </div>
              <div>
                <Input
                  type='text'
                  name='product_price'
                  placeholder='Price'
                  value={product_price}
                  onChange={this.changeHandler}
                />
              </div>
            </div>

            <div className={`${css.Row} ${css.FormGroup}`}>
              <div>
                <label id='name-label'>Product Quantity</label>
              </div>
              <div>
                <Input
                  type='text'
                  name='product_qty'
                  placeholder='Product Quantity'
                  value={product_qty}
                  onChange={this.changeHandler}
                />
              </div>
            </div>

            <div className={`${css.Row} ${css.FormGroup}`}>
              <div>
                <label id='name-label'>Images</label>
              </div>
              <div>
                <Form.Group controlId='formBasicText'>
                  <Form.Control
                    type='file'
                    name='image'
                    onChange={(e) => this.handleFile(e)}
                    placeholder=''
                    multiple
                  />
                </Form.Group>
              </div>
            </div>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </StyledForm>
        </Row>
      </>
    );
  }
}

export default PostProduct;
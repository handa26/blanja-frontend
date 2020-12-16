import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import axios from "axios";

import { FormWrapper } from "../../components/FormWrapper/FormWrapper";
 
class AddProduct extends Component {
  state = {
    product_name: "",
    category_id: "",
    product_price: "",
    product_description: "",
    product_rating: "",
    size: "",
    product_brand: "",
    product_qty: "",
    product_color: "",
    image: null,
    isLogin: true,
  };

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeCategoryHandler() {
    const id = document.getElementById("category").value;
    this.setState({
      category_id: id,
    });
  }

  handlerSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("product_name", this.state.product_name);
    data.append("category_id", this.state.category_id);
    data.append("product_price", this.state.product_price);
    data.append("product_description", this.state.product_description);
    data.append("product_rating", this.state.product_rating);
    data.append("size", this.state.size);
    data.append("product_brand", this.state.product_brand);
    data.append("product_qty", this.state.product_qty);
    data.append("product_color", this.state.product_color);
    data.append("product_color", this.state.image);
    console.log(data);

    const config = {
      headers: {
        "x-access-token": "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .post(`${process.env.REACT_APP_BASEURL}/product`, data, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push("/");
  };

  render() {
    return (
      <FormWrapper enctype='multipart/form-data' onSubmit={this.handlerSubmit}>
        <Form.Group>
          <Form.Row>
            <Form.Label column lg={2}>
              Name
            </Form.Label>
            <Col>
              <Form.Control
                type='text'
                name='product_name'
                placeholder='Name'
                onChange={this.handlerChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column lg={2}>
              Brand Name
            </Form.Label>
            <Col>
              <Form.Control
                type='text'
                name='product_brand'
                placeholder='Brand'
                onChange={this.handlerChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column lg={2}>
              Product Color
            </Form.Label>
            <Col>
              <Form.Control
                type='text'
                name='product_color'
                placeholder='Color'
                onChange={this.handlerChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column lg={2}>
              Product Category
            </Form.Label>
            <Col>
              <select
                id='category'
                onChange={(e) => this.changeCategoryHandler()}
              >
                <option disabled selected hidden>
                  Pilih kategori
                </option>
                <option value='1'>T-shirt</option>
                <option value='2'>Shorts</option>
                <option value='3'>Jackets</option>
                <option value='4'>Pants</option>
                <option value='5'>Shoes</option>
              </select>
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column lg={2}>
              Product Price
            </Form.Label>
            <Col>
              <Form.Control
                type='text'
                name='product_price'
                placeholder='Price'
                onChange={this.handlerChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column lg={2}>
              Product Rating
            </Form.Label>
            <Col>
              <Form.Control
                type='text'
                name='product_rating'
                placeholder='Rating'
                onChange={this.handlerChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column lg={2}>
              Product Description
            </Form.Label>
            <Col>
              <Form.Control
                type='text'
                name='product_description'
                placeholder='Description'
                onChange={this.handlerChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column lg={2}>
              Product Quantity
            </Form.Label>
            <Col>
              <Form.Control
                type='text'
                name='product_qty'
                placeholder='Product Quantity'
                onChange={this.handlerChange}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column lg={2}>
              Image
            </Form.Label>
            <Col>
              <Form.Control
                type='file'
                name='image'
                placeholder='Image'
                onChange={(e) => {
                  const file = e.target.files[0];
                  this.setState({ prd_image: file });
                }}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </FormWrapper>
    );
  }
}

export default AddProduct;
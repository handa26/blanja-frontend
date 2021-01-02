import React from "react";
import { Container } from "react-bootstrap";

import Navbar from "../../components/Navbar/Navbar";
import PostProduct from "../../components/PostProduct/PostProduct";
import Sidebar from "../../components/Sidebar/Sidebar";

const AddProduct = () => {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "20px" }}>
        <div className='row'>
          <div className='col-2'>
            <Sidebar />
          </div>
          <div className='col-10'>
            <PostProduct />
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddProduct;
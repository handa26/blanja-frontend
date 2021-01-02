import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/Featured/Featured";
import Category from "../../components/Category/Category";
import NewProducts from "../../components/NewProduct/NewProducts";
import PopularProducts from "../../components/PopularProducts/PopularProducts";

class Homepage extends React.Component {
  state = {
    isLogin: false,
  }

  render() {
    console.log(this.props.testProps);
    return (
      <>
        <Navbar />
        <Featured />
        <Category />
        <NewProducts />
        <PopularProducts />
      </>
    );
  }
}

export default Homepage;
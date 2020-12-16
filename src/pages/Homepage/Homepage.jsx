import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/Featured/Featured";
import Category from "../../components/Category/Category";
// import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import NewProducts from "../../components/NewProduct/NewProducts";
import PopularProducts from "../../components/PopularProducts/PopularProducts";

class Homepage extends React.Component {
  state = {
    isLogin: true,
  }

  render() {
    console.log(this.props.testProps);
    return (
      <>
        <Navbar />
        <Featured />
        <Category />
        {/* <CollectionPreview /> */}
        <NewProducts />
        <PopularProducts />
      </>
    );
  }
}

export default Homepage;
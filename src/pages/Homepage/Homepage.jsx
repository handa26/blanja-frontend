import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/Featured/Featured";
import Category from "../../components/Category/Category";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import NewProducts from "../../components/NewProduct/NewProducts";

class Homepage extends React.Component {
  state = {
    // isLogin: false,
  }

  render() {
    const { match, location, history } = this.props;
    console.log("Home", match, location, history);
    console.log(this.props.testProps);
    return (
      <>
        <Navbar />
        <Featured />
        <Category />
        {/* <CollectionPreview /> */}
        <NewProducts />
      </>
    );
  }
}

export default Homepage;
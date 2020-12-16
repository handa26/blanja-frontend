import React from "react";
import axios from "axios";
import CollectionItem from "../CollectionItem/CollectionItem";
import Pagination from "../Pagination/Paginate";

import css from "./NewProducts.module.css";

class NewProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      products: {},
      popularProducts: {},
      pageInfo: {}
    };
  }

  selectProduct = () => {
    console.log("Selected");
  };

  getNewProducts = () => {
    axios
      .get(process.env.REACT_APP_BASEURL + "/products?page=1&limit=4")
      .then(({ data }) => {
        console.log(data.pageInfo);
        this.setState({ products: data, pageInfo: data.pageInfo });
      })
      .catch((err) => console.error(err));
  };

  nextPage = () => {
    window.location.href =
      "http://localhost:3001" + this.state.pageInfo.nextPage;
  }

  componentDidMount() {
    this.getNewProducts()
  }

  render() {
    const { products, pageInfo } = this.state;
    console.log(pageInfo.nextPage);
    return (
      <div id={css.CollectionItem}>
        {/* New products */}
        <div className='container'>
          <div className={css.Head}>
            <h2>New</h2>
            <span className='text-muted'>You've never seen it before!</span>
          </div>

          <div className={css.FlexList}>
            {products.products &&
              products.products.map(
                ({
                  product_name,
                  product_price,
                  image,
                  product_brand,
                  id,
                  product_rating,
                }) => {
                  let img = image.split(",");
                  return (
                    <CollectionItem
                      click={this.selectProduct}
                      idUrl={`/product/${id}`}
                      key={id}
                      name={product_name}
                      brand={product_brand}
                      img={img[0]}
                      rating={product_rating}
                      price={product_price}
                    />
                  );
                }
              )}
          </div>
          <div className='row mt-5'>
            <button>Prev</button>
            <button>{pageInfo.currentPage}</button>
            <button onClick={this.nextPage}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProducts;
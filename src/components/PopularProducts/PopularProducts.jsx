import React from "react";
import axios from "axios";
import CollectionItem from "../CollectionItem/CollectionItem";

import css from "./PopularProducts.module.css";

class NewProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      products: {},
      popularProducts: {},
      pageInfo: {},
    };
  }

  selectProduct = () => {
    console.log("Selected");
  };

  getPopularProducts = () => {
    axios
      .get(process.env.REACT_APP_BASEURL + "/products/popular?page=1&limit=4")
      .then(({ data }) => {
        console.log(data.pageInfo);
        this.setState({ products: data, pageInfo: data.pageInfo });
      })
      .catch((err) => console.error(err));
  };

  nextPage = () => {
    window.location.href =
      "http://localhost:3001" + this.state.pageInfo.nextPage;
  };

  componentDidMount() {
    this.getPopularProducts();
  }

  render() {
    const { products, pageInfo } = this.state;
    console.log(pageInfo.nextPage);
    return (
      <div id={css.CollectionItem}>
        {/* New products */}
        <div className='container'>
          <div className={css.Head}>
            <h2>Popular</h2>
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
          <nav aria-label='Page navigation example'>
            <button>Prev</button>
            <button>{pageInfo.currentPage}</button>
            <button onClick={this.nextPage}>Next</button>
          </nav>
        </div>
      </div>
    );
  }
}

export default NewProducts;

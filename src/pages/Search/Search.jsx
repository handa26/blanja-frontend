import React from "react";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

import css from "./Search.module.css";

const getUrl = "http://localhost:3000/search?";
const urlParams = new URLSearchParams(window.location.search);

class SearchPage extends React.Component {
  state = {
    products: {}
  }

  getProducts = () => {
    axios
      .get(getUrl + urlParams)
      .then(({data}) => {
        this.setState({products: data})
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const {products} = this.state;
    console.log(products.products); 
    return (
      <>
        <Navbar />
        <div id={css.CollectionItem}>
          <div className='container'>
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
          </div>
        </div>
      </>
    );
  }
}

export default SearchPage;
import React from "react";
import axios from "axios";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

class Product extends React.Component {
  state = {
    product: {},
    image: {}
  }

  getSingleProduct = () => {
    const { match } = this.props;
    axios
      .get(process.env.REACT_APP_BASEURL + `/product/${match.params.id}`)
      .then(({data}) => {
        const img = data.image.split(",");
        this.setState({ product: data, image: img})
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getSingleProduct();
  }
  
  render() {
    const { product } = this.state;
    const { image } = this.state;
    console.log(image[2]);
    return (
      <>
        <ProductDetails
          name={product.product_name}
          desc={product.product_description}
          image={image[0]}
          image1={image[1]}
          image2={image[2]}
          image3={image[3]}
          image4={[image[2]]}
          image5={image[0]}
          price={product.product_price}
          brand={product.product_brand}
          category={product.category_name}
          rating={product.product_rating}
        />
      </>
    );
  }
}

export default Product;
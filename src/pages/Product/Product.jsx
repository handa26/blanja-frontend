import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/cartAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

class Product extends React.Component {
  state = {
    product: {},
    image: {},
  };

  getSingleProduct = () => {
    const { match } = this.props;
    axios
      .get(process.env.REACT_APP_BASEURL + `/product/${match.params.id}`)
      .then(({ data }) => {
        const img = data.image.split(",");
        this.setState({ product: data, image: img });
      })
      .catch((err) => console.error(err));
  };

  notify = () => toast("Added to cart!");

  componentDidMount() {
    this.getSingleProduct();
  }

  render() {
    const { product } = this.state;
    const { image } = this.state;
    const { addToCart } = this.props;
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
          addToCart={() => {
            addToCart(
              product.id,
              image[0],
              product.product_price,
              product.product_name,
              product.product_brand
            );
            this.notify();
          }}
        />
        <ToastContainer />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, image, price, productName) =>
      dispatch(addToCart(id, image, price, productName)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

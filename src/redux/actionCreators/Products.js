import axios from "axios";

const getUrl = process.env.REACT_APP_BASEURl

export const getProductsCreator = () => {
  const headers = {};
  return {
    type: "GET_ALL_PRODUCTS",
    payload: axios.get(getUrl + "/products", { headers })
  }
}

export const getSingleProduct = (id) => {
  return {
    type: "GET_SINGLE_PRODUCT",
    payload: axios.get(getUrl + "/product/" + id),
  };
};
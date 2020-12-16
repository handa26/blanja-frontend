const getProductsCreator = () => {
  return {
    type: "GET_ALL_PRODUCTS",
    payload: axios.get(getUrl)
  }
}
const initialState = {
  productsData: {},
  err: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false
}

const productsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS_PENDING":
      return{
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "GET_ALL_PRODUCTS_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case "GET_ALL_PRODUCTS_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        productsData: action.payload.data
      };
    default:
      return {
        ...prevState,
      }
  }
}

export default productsReducer;
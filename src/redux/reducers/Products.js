import {
  getAllProductsString,
  getSingleProductString,
  pending,
  rejected,
  fulfilled
} from "../actionString"

const initialState = {
  productsData: {},
  err: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false
}

const productsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case getAllProductsString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getAllProductsString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case getAllProductsString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        productsData: action.payload.data,
      };
    case getSingleProductString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getSingleProductString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case getSingleProductString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        singleProduct: action.payload.data,
      };
    default:
      return {
        ...prevState,
      };
  }
}

export default productsReducer;
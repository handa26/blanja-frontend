import { combineReducers } from "redux";

import ProductsReducer from "./Products";

const reducers = combineReducers({
  products: ProductsReducer,
  auth: (prevState = { isLogin: false }, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...prevState,
          isLogin: true,
        };
      case "LOGOUT":
        return {
          ...prevState,
          isLogin: false,
        };
      default:
        return {
          ...prevState,
        };
    }
  },
});

export default reducers;
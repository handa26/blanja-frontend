import { combineReducers } from "redux";

import ProductsReducer from "./Products";

const reducers = combineReducers({
  products: ProductsReducer,
  auth: (
    prevState = { isLogin: Number(localStorage.getItem("isLogin")) },
    action
  ) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...prevState,
          // isLogin: true,
          isLogin: localStorage.getItem("isLogin")
        };
      case "LOGOUT":
        return {
          ...prevState,
          // isLogin: false,
          isLogin: 0
        };
      default:
        return {
          ...prevState,
        };
    }
  },
});

export default reducers;
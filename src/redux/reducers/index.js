import { combineReducers } from "redux";

import CounterReducer from "./Counter";

const reducers = combineReducers({
  counter: CounterReducer,
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
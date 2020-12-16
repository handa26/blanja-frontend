import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

// import CounterReducer from "./reducers/Counter";
// import ProductsReducer from "./reducers/Products";

import reducers from "./reducers/index"

const logger = createLogger();

// Berisikan store enhancers
const enhancers = applyMiddleware(promiseMiddleware, logger);

// Redux promise middleware mengubah 1 async function menjadi 2 bagian
// action pending
// action fulfilled/rejected

// const combinedReducers = combineReducers({
//   // Key => nama reducer
//   // value => fungsi reducer
//   counter: CounterReducer,
//   products: ProductsReducer
// })

const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import {store, persistor} from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import Homepage from "./pages/Homepage/Homepage";
import Pagination from "./pages/Pagination/Pagination";
import PopularPaginate from "./pages/PopularPaginate/PopularPaginate";
import Product from "./pages/Product/Product";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/Auth/ResetPassword";
import ConfirmPassword from "./pages/Auth/ConfirmPassword";
import NotFound from "./components/NotFound/NotFound";
import PostProduct from "./components/PostProduct/PostProduct";
import Cart from "./pages/Cart/Cart";
import AddProduct from "./pages/AddProduct/AddProduct";
import Checkout from "./pages/Checkout/Checkout";
import Category from "./pages/CategoryView/CategoryView";
import Search from "./components/Search/SearchItems";
import Account from "./pages/Account/Account";
import Shipping from "./pages/Shipping/Shipping";
import Order from "./pages/Order/Order";

function Router() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <ProtectedRoute path='/profile' component={Account} />
            <Route path='/search' component={Search} />
            <ProtectedRoute path='/post' component={PostProduct} />
            <Route path='/products' component={Pagination} />
            <Route path='/products/popular' component={PopularPaginate} />
            <Route path='/product/:id' component={Product} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/reset' component={ResetPassword} />
            <Route path='/confirm' component={ConfirmPassword} />
            <Route path='/cart' component={Cart} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/category' component={Category} />
            <Route path='/account' component={Account} />
            <Route path='/shipping' component={Shipping} />
            <Route path='/order' component={Order} />
            <Route path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default Router;
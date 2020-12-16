import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import Homepage from "./pages/Homepage/Homepage";
import SearchPage from "./pages/Search/Search";
import Pagination from "./pages/Pagination/Pagination";
import PopularPaginate from "./pages/PopularPaginate/PopularPaginate";
import Product from "./pages/Product/Product";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/Auth/ResetPassword";
import ConfirmPassword from "./pages/Auth/ConfirmPassword";
import NotFound from "./components/NotFound/NotFound";
import PostProduct from "./components/PostProduct/PostProduct";

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <ProtectedRoute exact path='/' component={Homepage} /> */}
          <Route exact path='/' component={Homepage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/post' component={PostProduct} />
          <Route path='/products' component={Pagination} />
          <Route path='/products/popular' component={PopularPaginate} />
          <Route path='/product/:id' component={Product} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/reset' component={ResetPassword} />
          <Route path='/confirm' component={ConfirmPassword} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Router;
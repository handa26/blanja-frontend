import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

// import auth from "../../pages/Auth/Auth"
// import NotFound from "../NotFound/NotFound";

import css from "./Navbar.module.css";
import Logo from "../../assets/images/blanja-logo.svg";
import SearchIcon from "../../assets/icons/Search.svg";
import FilterIcon from "../../assets/icons/Filter.svg";
import CartIcon from "../../assets/icons/Cart.svg";

class Navbar extends React.Component {
  state = {
    isHidden: true,
    navMenu: () => {
      return (
        <div className={css.BtnWrap}>
          <input
            type='button'
            value='Login'
            className={`${css.Btn} ${css.Primary}`}
          />
          <input
            type='button'
            value='Signup'
            className={`${css.Btn} ${css.Secondary}`}
          />
          <button
            className={`${css.Btn} ${css.Secondary}`}
            onClick={this.logOut}
          >
            <Link style={{ color: "white" }} to='/login'>
              Logout
            </Link>
          </button>
        </div>
      );
    },
    searchHandler: "",
    product_name: "",
    category: "",
    searchedItems: {},
    isLogin: false,
  };

  // logOut = () => {
  //   const { dispatch } = this.props;
  //   const data = "";
  //   axios
  //     .post(`${process.env.REACT_APP_BASEURL}/auth/logout`, data)
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.setItem("token", res.data);
  //       res.headers["x-access-token"] = `Bearer ${res.data}`;
  //       dispatch({ type: "LOGOUT" });
  //     })
  //     .catch((err) => console.error(err));
  // };

  logOut = () => {
    const { dispatch } = this.props;
    const config = {
      headers: {
        "x-access-token": "Bearer " + localStorage.getItem("token")
      }
    };
    const data = "";
    axios
      .post(`${process.env.REACT_APP_BASEURL}/auth/logout`, data, config)
      .then((res) => {
        console.log(res);
        dispatch({ type: "LOGOUT"});
        localStorage.setItem("token", "");
      })
      .catch(err => console.error(err));
  }

  clickOptHandler = (e) => {
    this.setState({
      [e.target.name]: `&${[e.target.name]}=${e.target.id}`,
    });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      window.location.href =
        "http://localhost:3001/search?name=" + this.state.product_name;
    }
  };

  render() {
    console.log(this.state.product_name);
    const { auth } = this.props;
    console.log(auth.isLogin);
    return (
      <nav>
        <div className={css.NavContainer}>
          {/* LOGO */}
          <Link className={`navbar-brand ${css.Logo}`} to='/'>
            <img className='mb-2' src={Logo} alt='Blanja logo' />
            Blanja
          </Link>

          {/* SEARCH */}
          <div className={`${css.SearchArea} mx-auto`}>
            <div className={css.SearchBar}>
              <img
                className={css.SearchIcon}
                src={SearchIcon}
                alt='search icon'
              />
              <input
                type='text'
                name='product_name'
                className={css.Search}
                placeholder='Search'
                onKeyPress={this.handleKeyPress}
                onChange={this.changeHandler}
                value={this.state.product_name}
              />
            </div>
            {/* Modal trigger button */}
            <button
              type='button'
              className={css.Filter}
              data-bs-toggle='modal'
              data-bs-target='#staticBackdrop'
            >
              <img
                src={FilterIcon}
                className={css.FilterIcon}
                alt='filter-icon'
              />
            </button>

            {/* Modal */}
            <div
              className='modal fade'
              id='staticBackdrop'
              data-bs-backdrop='static'
              data-bs-keyboard='false'
              tabIndex='-1'
              aria-labelledby='staticBackdropLabel'
              aria-hidden='true'
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div class='modal-header'>
                    <h5 className='modal-title' id='staticBackdropLabel'>
                      Filter
                    </h5>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div className='modal-body'>
                    {/* Color */}
                    <strong className='mb-5'>Colors</strong>
                    <br></br>
                    <div className='row mt-3 mb-3'>
                      <button
                        id='1'
                        name='color'
                        className={`btn ${css.BtnRed} rounded-circle me-3 ms-3`}
                      ></button>
                      <button
                        id='2'
                        name='color'
                        className={`btn ${css.BtnGreen} rounded-circle me-3 ms-3`}
                      ></button>
                      <button
                        id='3'
                        name='color'
                        className={`btn ${css.BtnBlue} rounded-circle me-3 ms-3`}
                      ></button>
                      <button
                        id='4'
                        name='color'
                        className={`btn ${css.BtnBlack} rounded-circle me-3 ms-3`}
                      ></button>
                    </div>
                    <div className='dropdown-divider'></div>

                    {/* Category */}
                    <strong>Category</strong>
                    <br></br>
                    <div className='row mt-3 mb-3'>
                      <button
                        id='1'
                        name='category'
                        className={`btn btn-outline-secondary me-2`}
                        onClick={this.clickOptHandler}
                      >
                        T-shirt
                      </button>
                      <button
                        id='1'
                        name='category'
                        className='btn btn-outline-secondary me-2'
                        onClick={this.clickOptHandler}
                      >
                        Short
                      </button>
                      <button
                        id='1'
                        name='category'
                        className='btn btn-outline-secondary me-2'
                        onClick={this.clickOptHandler}
                      >
                        Jacket
                      </button>
                      <button
                        id='1'
                        name='category'
                        className='btn btn-outline-secondary me-2'
                        onClick={this.clickOptHandler}
                      >
                        Pants
                      </button>
                      <button
                        id='1'
                        name='category'
                        className='btn btn-outline-secondary me-2'
                        onClick={this.clickOptHandler}
                      >
                        Shoes
                      </button>
                    </div>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                    >
                      Close
                    </button>
                    <button type='button' className='btn btn-primary'>
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Auth */}
          <div className={css.NavBtn}>
            <img src={CartIcon} className={css.CartIcon} alt='cart-icon' />
            <this.state.navMenu />
          </div>

          <div className={`${css.NavMenu}`}>
            <button className={`${css.Btn} ${css.Primary}`}>
              <i class='fas fa-bars'></i>
            </button>

            <div className={css.MenuList}>
              <div className={css.Menu}>
                <img src={CartIcon} className={css.CartIcon} alt='cart-icon' />
                <p>My Cart</p>
              </div>
              <div className={css.Menu}>
                {auth.isLogin ? (
                  <button
                    className={`${css.Btn} ${css.Secondary}`}
                    onClick={this.logOut}
                  >
                    <Link style={{ color: "white" }} to='/login'>
                      Logout
                    </Link>
                  </button>
                ) : (
                  <this.state.navMenu />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Navbar);

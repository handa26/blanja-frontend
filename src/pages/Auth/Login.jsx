import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

// import auth from "./Auth";

import css from "./Auth.module.css";
import BlanjaLogo from "../../assets/images/blanja-logo.svg";

class Login extends React.Component {
  handleSubmit = (e) => {
    const { dispatch, auth } = this.props;
    const data = {
      email: this.email,
      password: this.password,
      user_type: 2
    }

    axios
      .post(`${process.env.REACT_APP_BASEURL}/auth/login`, data)
      .then((res) => {
        console.log(res.data.data.token);
        localStorage.setItem("token", res.data.data.token);
        res.headers["x-access-token"] = `Bearer ${res.data.data.token}`;
        dispatch({ type: "LOGIN" });
        // this.props.history.push("/");
        console.log(auth.isLogin);
        console.log("Login berhasil");
        console.log(this.props.auth);
        console.log(res);
        console.log(res.headers);
      })
      .catch(err => console.error(err));
  }

  // saveThisUser = () => {
  //   auth.login(() => {
      // this.props.history.push("/");
  //   });
  // }

  render() {
    const { auth } = this.props;
    console.log(auth.isLogin);
    return (
      <section id={css.FormContainer}>
        {auth.isLogin && <Redirect to='/' />}
        <div className={css.Row}>
          <div className={css.Logo}>
            <img src={BlanjaLogo} alt='blanja logo' />
            <h1>Blanja</h1>
          </div>

          <h2>Please login with your account</h2>
          <div className={css.BtnGroup}>
            <div className={`${css.Btn} ${css.BtnGhost}`}>Customer</div>
            <div className={`${css.Btn} ${css.BtnFull} ${css.Link}`}>
              Seller
            </div>
          </div>

          <div className={css.FormSection}>
            <form
              action='#'
              onSubmit={this.handleSubmit}
              className={css.FillForm}
            >
              <div className={`${css.ColInput} ${css.FormInput}`}>
                <input
                  type='email'
                  // name='email'
                  id='email'
                  placeholder='Email'
                  onChange={(e) => (this.email = e.target.value)}
                  required
                />
              </div>
              <div className={`${css.ColInput} ${css.FormInput}`}>
                <input
                  type='password'
                  // name='password'
                  id='password'
                  placeholder='Password'
                  onChange={(e) => (this.password = e.target.value)}
                  required
                />
              </div>
              <div className={`${css.Reset} ${css.FormInput}`}>
                <Link className={`${css.Link}`} to={{ pathname: "/reset" }}>
                  Forgot Password?
                </Link>
              </div>
              <div className={`${css.Submit} ${css.FormInput}`}>
                <button
                  className={`${css.SubmitBtn} ${css.Link}`}
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
          <p className={css.Text}>
            Don't have a Blanja account?{" "}
            <Link className={`${css.Link}`} to={{ pathname: "/register" }}>
              Register
            </Link>
          </p>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Login);
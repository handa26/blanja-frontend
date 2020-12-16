import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Auth from "./Auth";

import css from "./Auth.module.css";
import BlanjaLogo from "../../assets/images/blanja-logo.svg";

class Register extends React.Component {
  handleSubmit = (e) => {
    const data = {
      name: this.name,
      email: this.email,
      telephone: this.tel,
      store_name: this.store_name,
      password: this.password,
      user_type: 2,
    };

    // Auth.register(this.name, this.password, this.tel, this.store_name).then(() => {
      // this.props.history.push("/login");
      // window.location.reload();
    // }).catch(err => console.log(err))

    axios
      .post(`${process.env.REACT_APP_BASEURL}/auth/register`, data)
      .then((res) => {
        console.log(res);
        this.props.history.push("/login");
        window.location.reload();
      })
      .catch(err => console.error(err));

    console.log(data);
  }

  render() {
    return (
      <section id={css.FormContainer}>
        <div className={css.Row}>
          <div className={css.Logo}>
            <img src={BlanjaLogo} alt='blanja logo' />
            <h1>Blanja</h1>
          </div>

          <h2>Please register with your account</h2>
          <div className={css.BtnGroup}>
            <Link to='/customer' className={`${css.Btn} ${css.BtnGhost}`}>
              Customer
            </Link>
            <Link
              to='/seller'
              className={`${css.Btn} ${css.BtnFull} ${css.Link}`}
            >
              Seller
            </Link>
          </div>

          <div className={css.FormSection}>
            <form action="#" className={css.FillForm} onSubmit={this.handleSubmit}>
              <div className={`${css.ColInput} ${css.FormInput}`}>
                <input
                  type='name'
                  name='name'
                  id='name'
                  onChange={(e) => (this.name = e.target.value)}
                  placeholder='Name'
                />
              </div>
              <div className={`${css.ColInput} ${css.FormInput}`}>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  onChange={(e) => (this.email = e.target.value)}
                  required
                />
              </div>
              <div className={`${css.ColInput} ${css.FormInput}`}>
                <input
                  type='tel'
                  name='telephone'
                  id='telephone'
                  placeholder='0831-3131-3131'
                  onChange={(e) => (this.tel = e.target.value)}
                  pattern='[0-9]{4}-[0-9]{4}-[0-9]{4}'
                  required
                />
              </div>
              <div className={`${css.ColInput} ${css.FormInput}`}>
                <input
                  type='text'
                  name='store-name'
                  id='store-name'
                  placeholder='Store Name'
                  onChange={(e) => (this.store_name = e.target.value)}
                  required
                />
              </div>
              <div className={`${css.ColInput} ${css.FormInput}`}>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  onChange={(e) => (this.password = e.target.value)}
                  required
                />
              </div>
              <div className={`${css.Submit} ${css.FormInput}`}>
                <button type='submit' className={`${css.SubmitBtn} ${css.Link}`}>
                  REGISTER
                </button>
              </div>
            </form>
          </div>
          <p className={css.Text}>
            Already have a Blanja account?{" "}
            <Link className={`${css.Link}`} to='/login'>
              Login
            </Link>
          </p>
        </div>
      </section>
    );
  }
}

export default Register;

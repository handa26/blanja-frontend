import React from "react";
import { Link } from "react-router-dom";

import css from "./Auth.module.css";
import BlanjaLogo from "../../assets/images/blanja-logo.svg";

class ResetPassword extends React.Component {
  render() {
    return (
      <section id={css.FormContainer}>
        <div className={css.Row}>
          <div className={css.Logo}>
            <img src={BlanjaLogo} alt='blanja logo' />
            <h1>Blanja</h1>
          </div>

          <h2>Reset password</h2>

          <div className={css.FormSection}>
            <form className={css.FillForm}>
              <div className={`${css.ColInput} ${css.FormInput}`}>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                />
              </div>
              <div className={`${css.Submit} ${css.FormInput}`}>
                <Link className={`${css.SubmitBtn} ${css.Link}`} to='/confirm'>
                  CONFIRM
                </Link>
              </div>
            </form>
          </div>
          <p className={css.Text}>
            Don't have a Blanja account?{" "}
            <Link className={`${css.Link}`} to='/register'>
              Register
            </Link>
          </p>
        </div>
      </section>
    );
  }
}

export default ResetPassword;

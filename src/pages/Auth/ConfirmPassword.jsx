import React from "react";
import { Link } from "react-router-dom";

import css from "./Auth.module.css";
import BlanjaLogo from "../../assets/images/blanja-logo.svg";

class ConfirmPassword extends React.Component {
  render() {
    return (
      <section id={css.FormContainer}>
        <div className={css.Row}>
          <div className={css.Logo}>
            <img src={BlanjaLogo} alt='blanja logo' />
            <h1>Blanja</h1>
          </div>

          <h2>Reset password</h2>
          <p className={css.Text} style={{ color: "#F01F0E" }}>
            You need to change your password to activate your account
          </p>
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
              <div className={`${css.ColInput} ${css.FormInput}`}>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Confirmation New Password'
                />
              </div>
              <div className={`${css.Submit} ${css.FormInput}`}>
                <Link className={`${css.SubmitBtn} ${css.Link}`} to='/login'>
                  CONFIRM
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ConfirmPassword;

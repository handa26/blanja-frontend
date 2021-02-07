import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import css from "./Auth.module.css";
import BlanjaLogo from "../../assets/images/blanja-logo.svg";

const Register = ({history}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [store, setStore] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  const toast = () => {
    return (
      <div
        class='toast d-flex align-items-center'
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
      >
        <div class='toast-body'>Hello, world! This is a toast message.</div>
        <button
          type='button'
          class='btn-close ms-auto me-2'
          data-bs-dismiss='toast'
          aria-label='Close'
        ></button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      store_name: store,
      telephone: number,
      user_type: type,
      password: password,
    };

    axios
      .post(`${process.env.REACT_APP_BASEURL}/auth/register`, data)
      .then((res) => {
        console.log(res);
        history.push("/login");
        toast();
        window.location.reload();
      })
      .catch((err) => console.error(err));

    console.log(data);
  };

  console.log(name);

  return (
    <section id={css.FormContainer}>
      <div className={css.Row}>
        <div className={css.Logo}>
          <img src={BlanjaLogo} alt='blanja logo' />
          <h1>Blanja</h1>
        </div>

        <h2>Please register with your account</h2>
        <div className={css.BtnGroup}>
          <div
            onClick={() => setType(1)}
            className={
              type === 1
                ? `${css.Btn} ${css.BtnFullLeft} ${css.Link}`
                : `${css.Btn} ${css.BtnGhost}`
            }
          >
            Customer
          </div>
          <div
            onClick={() => setType(2)}
            className={
              type === 2
                ? `${css.Btn} ${css.BtnFull} ${css.Link}`
                : `${css.Btn} ${css.BtnGhostRight}`
            }
          >
            Seller
          </div>
        </div>

        <div className={css.FormSection}>
          <form action='#' className={css.FillForm} onSubmit={handleSubmit}>
            <div className={`${css.ColInput} ${css.FormInput}`}>
              <input
                type='name'
                name='name'
                id='name'
                onChange={(val) => setName(val.target.value)}
                placeholder='Name'
              />
            </div>
            <div className={`${css.ColInput} ${css.FormInput}`}>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {type === 2 && (
              <div className={`${css.ColInput} ${css.FormInput}`}>
                <input
                  type='tel'
                  name='telephone'
                  id='telephone'
                  placeholder='0831-3131-3131'
                  onChange={(e) => setNumber(e.target.value)}
                  pattern='[0-9]{4}-[0-9]{4}-[0-9]{4}'
                  required
                />
              </div>
            )}
            {type === 2 && (
              <div className={`${css.ColInput} ${css.FormInput}`}>
                <input
                  type='text'
                  name='store-name'
                  id='store-name'
                  placeholder='Store Name'
                  onChange={(e) => setStore(e.target.value)}
                  required
                />
              </div>
            )}
            <div className={`${css.ColInput} ${css.FormInput}`}>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
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
};

export default Register;

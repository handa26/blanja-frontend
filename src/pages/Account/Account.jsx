import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

import css from "./Account.module.css";

const Account = () => {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "20px" }}>
        <div className='row'>
          <div className='col-lg-3 col-sm-12'>
            <Sidebar />
          </div>
          <div className='col-lg-9 col-sm-12'>
            <div className={css.Head}>
              <h1>My Profile</h1>
              <p className='text-muted'>Manage your profile information</p>
            </div>
            <hr />
            <div className='mb-3'>
              <label
                for='exampleFormControlInput1'
                className={`form-label ${css.Label}`}
              >
                Name
              </label>
              <input
                type='text'
                id='exampleFormControlInput1'
                placeholder='Ananda Muhammad'
                className={css.Input}
              />
            </div>
            <div className='mb-3'>
              <label
                for='exampleFormControlInput1'
                className={`form-label ${css.Label}`}
              >
                Email
              </label>
              <input
                type='email'
                id='exampleFormControlInput1'
                placeholder='example@gmail.com'
                className={css.Input}
              />
            </div>
            <div className='mb-3'>
              <label
                for='exampleFormControlInput1'
                className={`form-label ${css.Label}`}
              >
                Phone Number
              </label>
              <input
                type='tel'
                id='exampleFormControlInput1'
                pattern='[0-9]{4}-[0-9]{4}-[0-9]{4}'
                className={css.Input}
              />
            </div>
            <button
              type='button'
              className={`btn btn-primary ${css.BtnPrimary}`}
            >
              Save
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Account;

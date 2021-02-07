import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {login} from "../../redux/action/authAction";

// import auth from "./Auth";

import css from "./Auth.module.css";
import BlanjaLogo from "../../assets/images/blanja-logo.svg";

const Login = ({login, isLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    axios
      .post(`${process.env.REACT_APP_BASEURL}/auth/login`, data)
      .then((res) => {
        const token = res.data.data.token;
        const id = res.data.data.id;
        const types = res.data.data.type;
        const name = res.data.data.name;
        const email = res.data.data.email;
        login(token, id, types, name, email);
      })
  }

  if (isLogin) {
    return <Redirect to='/' />;
  }
  console.log(isLogin);
  return (
    <section id={css.FormContainer}>
      <div className={css.Row}>
        <div className={css.Logo}>
          <img src={BlanjaLogo} alt='blanja logo' />
          <h1>Blanja</h1>
        </div>

        <h2>Please login with your account</h2>
        <div className={css.BtnGroup}>
          <div className={`${css.Btn} ${css.BtnGhost}`}>Customer</div>
          <div className={`${css.Btn} ${css.BtnFull} ${css.Link}`}>Seller</div>
        </div>

        <div className={css.FormSection}>
          <form className={css.FillForm} onSubmit={handleSubmit}>
            <div className={`${css.ColInput} ${css.FormInput}`}>
              <input
                type='email'
                id='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={`${css.ColInput} ${css.FormInput}`}>
              <input
                type='password'
                id='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={`${css.Reset} ${css.FormInput}`}>
              <Link className={`${css.Link}`} to={{ pathname: "/reset" }}>
                Forgot Password?
              </Link>
            </div>
            <div className={`${css.Submit} ${css.FormInput}`}>
              <button className={`${css.SubmitBtn} ${css.Link}`}>LOGIN</button>
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

// class Login extends React.Component {
//   state = {
//     isLogin: false,
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { dispatch, auth } = this.props;
//     const data = {
//       email: this.email,
//       password: this.password,
//       user_type: 2
//     }

//     axios
//       .post(`${process.env.REACT_APP_BASEURL}/auth/login`, data)
//       .then((res) => {
//         localStorage.setItem("token", res.data.data.token);
//         res.headers["x-access-token"] = `Bearer ${res.data.data.token}`;
//         localStorage.setItem("isLogin", 1);
//         dispatch({ type: "LOGIN" });
//         console.log("Login?" + auth.isLogin);
//       })
//       .catch(err => console.error(err));
//   }

//   render() {
//     const { auth } = this.props;
    
//     // * If user is login, then directed to specific route
    // if (auth.isLogin) {
    //   return <Redirect to='/' />;
    // }
//     return (
//       <section id={css.FormContainer}>
//         <div className={css.Row}>
//           <div className={css.Logo}>
//             <img src={BlanjaLogo} alt='blanja logo' />
//             <h1>Blanja</h1>
//           </div>

//           <h2>Please login with your account</h2>
//           <div className={css.BtnGroup}>
//             <div className={`${css.Btn} ${css.BtnGhost}`}>Customer</div>
//             <div className={`${css.Btn} ${css.BtnFull} ${css.Link}`}>
//               Seller
//             </div>
//           </div>

//           <div className={css.FormSection}>
//             <form
//               onSubmit={this.handleSubmit}
//               className={css.FillForm}
//             >
//               <div className={`${css.ColInput} ${css.FormInput}`}>
//                 <input
//                   type='email'
//                   id='email'
//                   placeholder='Email'
//                   onChange={(e) => (this.email = e.target.value)}
//                   required
//                 />
//               </div>
//               <div className={`${css.ColInput} ${css.FormInput}`}>
//                 <input
//                   type='password'
//                   id='password'
//                   placeholder='Password'
//                   onChange={(e) => (this.password = e.target.value)}
//                   required
//                 />
//               </div>
//               <div className={`${css.Reset} ${css.FormInput}`}>
//                 <Link className={`${css.Link}`} to={{ pathname: "/reset" }}>
//                   Forgot Password?
//                 </Link>
//               </div>
//               <div className={`${css.Submit} ${css.FormInput}`}>
//                 <button
//                   className={`${css.SubmitBtn} ${css.Link}`}
//                 >
//                   LOGIN
//                 </button>
//               </div>
//             </form>
//           </div>
//           <p className={css.Text}>
//             Don't have a Blanja account?{" "}
//             <Link className={`${css.Link}`} to={{ pathname: "/register" }}>
//               Register
//             </Link>
//           </p>
//         </div>
//       </section>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token, id, level, name, email) =>
      dispatch(login(token, id, level, name, email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
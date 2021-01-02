import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../assets/images/profile.png";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div className='d-flex' style={{ flexDirection: "column" }}>
          <div className='col-4'>
            <img
              src={Avatar}
              style={{
                borderRadius: "50%",
                height: "100px",
                width: "100px",
                marginTop: "10px",
              }}
              alt='profile'
            />
          </div>
          <div className='col-8'>
            <p
              style={{ fontSize: "12px", textAlign: "center" }}
              className='mt-3'
            >
              Sean Lennon
            </p>
            <Link to='#'>
              <p style={{ fontSize: "10px" }}>
                <i class='fas fa-pen' style={{ marginRight: "10px" }}></i>Change
                profile
              </p>
            </Link>
          </div>
        </div>
        <div style={{ height: "100px" }} className='ms-2'>
          <div className='btn-group dropend'>
            <button
              type='button'
              className='btn bg-transparent dropdown-toggle'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <i class='fas fa-home me-4'></i>Store
            </button>
          </div>
          <div className='btn-group dropend'>
            <button
              type='button'
              className='btn bg-transparent dropdown-toggle'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <i class='fas fa-box me-4'></i>Product
            </button>
            <ul class='dropdown-menu'>
              <li>
                <Link className='dropdown-item' to='/post'>
                  My product
                </Link>
              </li>
              <li>
                <Link className='dropdown-item' to='/post'>
                  Selling product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

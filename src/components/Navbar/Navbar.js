import React from "react";
import ecom from "../../assets/freedom.jpg";
import "./Navbar.css";

const Navbar = ({ totalCartItems }) => {
  //   console.log("totalCartItems=", totalCartItems);
  return (
    <div>
      <nav className="navbar fixed-top bg-light pt-3 ">
        <div className="container-fluid d-flex align-items-center justify-content-between px-4">
          <div className="brand-img">
            <img src={ecom} className="img-fluid" alt="ecom" />
          </div>
          <div>
            <button type="button" className="btn btn-dark position-relative">
              <i className="fs-3 fa-solid fa-cart-shopping"></i>

              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalCartItems}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

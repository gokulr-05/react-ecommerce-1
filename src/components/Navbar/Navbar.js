import React from "react";
import ecom from "../../assets/freedom.jpg";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const Navbar = ({ totalCartItems }) => {
  let location = useLocation();
  // console.log("location=", location);

  let [locationPathName, setLocationPathName] = useState("");

  useEffect(() => {
    setLocationPathName(location.pathname);
  }, [location]);
  //   console.log("totalCartItems=", totalCartItems);
  return (
    <div>
      <nav className="navbar fixed-top bg-light pt-3 ">
        <div className="container-fluid d-flex align-items-center justify-content-between px-4">
          <Link to="/home">
            <div className="brand-img">
              <img src={ecom} className="img-fluid" alt="ecom" />
            </div>
          </Link>
          <div className="d-flex items-center justify-content-between">
            {locationPathName === "/home" && (
              <Link to="/cart">
                <button
                  type="button"
                  className="btn btn-dark position-relative"
                >
                  <i className="fs-3 fa-solid fa-cart-shopping"></i>

                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalCartItems}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </Link>
            )}
            {locationPathName === "/cart" && (
              <Link to="/home">
                <h5 className="text-capitalize text-primary">home</h5>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./checkoutform.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import commerce from "../../../lib/Commerce";

const Checkout = ({ cart }) => {
  let [stepNum, setStepNum] = useState(1);
  let [checkoutToken, setCheckoutToken] = useState(null);
  let [numDesign, setNumDesign] = useState([]);

  useEffect(() => {
    if (stepNum === 1) {
      let numDesignArr = ["bg-primary text-white", "", ""];
      setNumDesign(numDesignArr);
    } else if (stepNum === 2) {
      let numDesignArr = [
        "bg-success  text-white",
        "bg-primary  text-white",
        "",
      ];
      setNumDesign(numDesignArr);
    } else if (stepNum === 3) {
      let numDesignArr = [
        "bg-success  text-white",
        "bg-success  text-white",
        "bg-primary  text-white",
      ];
      setNumDesign(numDesignArr);
    } else if (stepNum > 3) {
      let numDesignArr = [
        "bg-success  text-white",
        "bg-success  text-white",
        "bg-success  text-white",
      ];
      setNumDesign(numDesignArr);
    }
  }, [stepNum]);

  useEffect(() => {
    let generateToken = async () => {
      try {
        let token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        console.log("generated token=", token);
        setCheckoutToken(token);
      } catch (err) {}
    };
    generateToken();
  }, [cart]);

  return (
    <div className="checkout container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center gap-5 justify-content-center">
            <p className=" mb-0 text-capitalize">
              <span className={`num ${numDesign[0]}`}>1 </span>
              shipping address
            </p>
            <p className=" mb-0 text-capitalize">
              <span className={`num ${numDesign[1]}`}>2 </span> payment form
            </p>
            <p className=" mb-0 text-capitalize">
              <span className={`num ${numDesign[2]}`}>3 </span>confirmation
            </p>
          </div>
        </div>
        <div className="col-12">
          <Outlet />
        </div>
      </div>

      <button
        onClick={() => {
          setStepNum((prev) => {
            return ++prev;
          });
        }}
        className="btn btn-primary"
      >
        ++num
      </button>
    </div>
  );
};

export default Checkout;

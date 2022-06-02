import React from "react";
import "./AddressForm.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import commerce from "./../../../lib/Commerce";
import LoadingSpinner from "../../../LoadingSpinner";

const AddressForm = ({ checkoutToken1 }) => {
  let [ckToken, setCktoken] = useState(checkoutToken1);
  console.log("checkoutToken1=", checkoutToken1);
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  let fetchShippingCountries = async (checkoutId) => {
    let response = await commerce.services.localeListShippingCountries(
      checkoutId
    );

    setShippingCountries(response.countries);

    let con = Object.keys(response.countries)[0];
    setShippingCountry(con);
  };

  let fetchShippingSubDivisions = async (checkoutId, countrycode) => {
    let response = await commerce.services.localeListShippingSubdivisions(
      checkoutId,
      countrycode
    );

    setShippingSubdivisions(response.subdivisions);
    let sub = Object.keys(response.subdivisions)[0];
    setShippingSubdivision(sub);
  };

  let fetchShippingOptions = async (checkoutId, country, region = null) => {
    let response = await commerce.checkout.getShippingOptions(checkoutId, {
      country: country,
      region: region,
    });
    // console.log("options=", response);
    setShippingOptions(response);
    setShippingOption(response[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(ckToken.id);
  }, [ckToken]);

  useEffect(() => {
    if (shippingCountry) fetchShippingSubDivisions(ckToken.id, shippingCountry);
  }, [ckToken, shippingCountry]);

  useEffect(() => {
    if (shippingCountry)
      fetchShippingOptions(ckToken.id, shippingCountry, shippingSubdivision);
  }, [ckToken, shippingCountry, shippingSubdivision]);

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setCktoken(checkoutToken1);
  }, [checkoutToken1]);

  if (!checkoutToken1) return <LoadingSpinner />;

  return (
    <div className="container addressform d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <label htmlFor="">First Name:</label>
            </div>
            <div className="col-6">
              <input
                type="text"
                placeholder="First Name"
                {...register("firstname")}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="">Last Name:</label>
            </div>
            <div className="col-6">
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastname")}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="">Address 1:</label>
            </div>
            <div className="col-6">
              <input
                type="text"
                placeholder="Address 1"
                {...register("address1")}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="">Email:</label>
            </div>
            <div className="col-6">
              <input type="email" placeholder="Email" {...register("email")} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="">City:</label>
            </div>
            <div className="col-6">
              <input type="text" placeholder="City" {...register("city")} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="">ZIP/Postal code:</label>
            </div>
            <div className="col-6">
              <input
                type="text"
                placeholder="Zip/Postal Code"
                {...register("zipcode")}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="">Shipping Country</label>
            </div>
            <div className="col-6">
              <select
                value={shippingCountry}
                onChange={(e) => {
                  setShippingCountry(e.target.value);
                }}
                name=""
                id=""
              >
                {Object.entries(shippingCountries).map(
                  ([countryCode, countryName]) => {
                    return (
                      <option
                        value={countryCode}
                        key={countryCode}
                        name={countryCode}
                      >
                        {countryName}
                      </option>
                    );
                  }
                )}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="">Subdivision</label>
            </div>
            <div className="col-6">
              <select
                value={shippingSubdivision}
                onChange={(e) => {
                  setShippingSubdivision(e.target.value);
                }}
                name=""
                id=""
              >
                {Object.entries(shippingSubdivisions).map(
                  ([subdivCode, subdivname]) => {
                    return (
                      <option
                        value={subdivCode}
                        key={subdivCode}
                        name={subdivCode}
                      >
                        {subdivname}
                      </option>
                    );
                  }
                )}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="shipping options" className="text-capitalize">
                shipping options
              </label>
            </div>
            <div className="col-6">
              <select name="" id={shippingOption}>
                {shippingOptions.map((opt) => {
                  return (
                    <option key={opt.id} value={opt.id}>
                      {`${opt.description}-${opt.price.formatted_with_symbol}`}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <br />
          {/* <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="text-center">
                  <Link to="/cart" className="text-capitalize btn btn-primary">
                    back to cart
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={() => {
                      setStepNum1(2);
                    }}
                    to="/checkout/payment"
                    className="text-capitalize btn btn-primary"
                  >
                    next
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddressForm;

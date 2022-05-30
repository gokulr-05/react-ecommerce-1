import React from "react";
import "./FilterCartItems.css";
import { useState, useEffect } from "react";

const FilledCartItems = ({
  id,
  name,
  price,
  image,
  quantity,
  updateCartQuantity,
  removeItemFromCart,
}) => {
  if (name === "OPPO MOBILE") console.log("oppo mobile quantity=", quantity);

  return (
    <div className="container filtercartitem-bucket-1">
      <div className="row row-bucket-1">
        <div className="col-4">
          <div className=" filtercartitem-img-bucket-1">
            <img
              className="shadow img-thumbnail filtercartitem-img"
              src={image}
              alt={name}
            />
          </div>
        </div>
        <div className="col-4">
          <div className="filled-cart-items-name-bucket d-flex flex-column align-items-center justify-content-center">
            <p className="text-capitalize">{name}</p>
          </div>
          <div className="d-flex gap-3 align-items-center justify-content-center">
            <div>
              <button
                onClick={() => {
                  updateCartQuantity(id, quantity + 1);
                }}
                className="plus-btn bg-primary text-white"
              >
                +
              </button>
            </div>
            <div>{quantity}</div>
            <div>
              <button
                onClick={() => {
                  updateCartQuantity(id, quantity - 1);
                }}
                className="minus-btn bg-primary text-white"
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="filled-cart-items-price-bucket d-flex align-items-center justify-content-center">
            <p>{price}</p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <button
              onClick={() => {
                removeItemFromCart();
              }}
              className="btn btn-primary text-capitalize"
            >
              remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilledCartItems;

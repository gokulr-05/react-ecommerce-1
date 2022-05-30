import { useState, useEffect } from "react";
import "./Cart.css";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

let Cart = ({ cart, updateCartQuantity, removeItemFromCart, emptyCart }) => {
  console.log("cart in cart.js=", cart);

  let cartItems = cart.line_items;
  // console.log("cartItems:", cartItems);

  let isEmpty = cartItems.length > 0 ? false : true;

  return (
    <div>
      <div className="cart-bucket-1">
        <div>
          <h1 className="text-capitalize text-center bg-primary text-white">
            my cart
          </h1>
        </div>
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <FilledCart
            updateCartQuantity={updateCartQuantity}
            removeItemFromCart={removeItemFromCart}
            cart={cart}
          />
        )}
      </div>
      <div className="container cart-bucket-2">
        <div className="row">
          <div className="col-6">
            <h3 className=" text-capitalize">
              subtotal:
              <span className="subtotal">
                {cart.subtotal.formatted_with_symbol}
              </span>
            </h3>
          </div>
          <div className="col-6">
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <button
                onClick={() => {
                  emptyCart();
                }}
                className="btn btn-danger text-capitalize"
              >
                empty cart
              </button>
              <button className="btn btn-primary text-capitalize">
                check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

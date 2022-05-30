import { useState, useEffect } from "react";
import "./Cart.css";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

let Cart = ({ cart }) => {
  console.log("cart=", cart);

  let cartItems = cart.line_items;
  console.log("cartItems:", cartItems);

  let isEmpty = cartItems.length > 0 ? false : true;

  return (
    <div className="cart-bucket-1">
      <div>
        <h1 className="text-capitalize text-center bg-primary text-white">
          my cart
        </h1>
      </div>
      {isEmpty ? <EmptyCart /> : <FilledCart cart={cart} />}
    </div>
  );
};

export default Cart;

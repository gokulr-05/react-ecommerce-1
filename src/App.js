import { useState, useEffect } from "react";

import Products from "./components/products/Products";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import commerce from "./lib/Commerce";
import LoadingSpinner from "../src/LoadingSpinner";
import Cart from "./components/Cart/Cart";
import AddressForm from "./components/CheckOutForm/CheckOut/AddressForm";
import PaymentForm from "./components/CheckOutForm/CheckOut/PaymentForm";
import Checkout from "./components/CheckOutForm/CheckOut/Checkout";

import { useForm } from "react-hook-form";

import {
  Route,
  Routes,
  Outlet,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";

let App = () => {
  let [checkoutToken1, setCheckoutToken1] = useState("");
  let [isLoading, setIsLoading] = useState(true);
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState({ cart: { total_items: 0 } });
  console.log("cart in App.js=", cart);

  let checkoutTokenHandler = (checkoutToken) => {
    setCheckoutToken1(checkoutToken);
  };

  let fetchProducts = async () => {
    setIsLoading(true);
    let data = await commerce.products.list();

    let products_item = data.data;
    setProducts(products_item);
    setIsLoading(false);
  };

  let fetchCart = async () => {
    setIsLoading(true);
    let response = await commerce.cart.retrieve();

    setCart(response);
    setIsLoading(false);
  };

  let updateCartQuantity = async (productId, quantity) => {
    // console.log(
    //   "updateCartQuantity: productId:",
    //   productId,
    //   "lineItem quantity=",
    //   quantity
    // );
    let response = await commerce.cart.update(productId, { quantity });

    // console.log("updateCartQuantity: response=", response);

    setCart(response.cart);
  };

  let removeItemFromCart = async (productId) => {
    let response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };

  let emptyCart = async () => {
    let response = await commerce.cart.empty();
    setCart(response.cart);
  };

  let handleAddToCart = async (productId, productQuantity) => {
    // console.log("handle add to cart:");

    let cart = await commerce.cart.add(productId, productQuantity);
    // console.log("cart after added items=", cart);
    setCart(cart.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Navbar totalCartItems={cart.total_items} />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />}></Route>
        <Route
          path="/home"
          element={
            <Products handleAddToCart={handleAddToCart} products={products} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              updateCartQuantity={updateCartQuantity}
              removeItemFromCart={removeItemFromCart}
              emptyCart={emptyCart}
              cart={cart}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout checkoutTokenHandler={checkoutTokenHandler} cart={cart} />
          }
        >
          <Route
            path="shippingaddress"
            element={<AddressForm checkoutToken1={checkoutToken1} />}
          />
          <Route path="payment" element={<PaymentForm />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

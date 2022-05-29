import { useState, useEffect } from "react";
import Products from "./components/products/Products";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import commerce from "./lib/Commerce";
import LoadingSpinner from "../src/LoadingSpinner";

let App = () => {
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState({ cart: { total_items: 0 } });
  console.log("cart=", cart);

  let fetchProducts = async () => {
    let data = await commerce.products.list();

    let products_item = data.data;
    setProducts(products_item);
  };

  let fetchCart = async () => {
    let response = await commerce.cart.retrieve();

    setCart(response);
  };

  let handleAddToCart = async (productId, productQuantity) => {
    console.log("handle add to cart:");

    let cart = await commerce.cart.add(productId, productQuantity);
    console.log("cart after added items=", cart);
    setCart(cart.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <Navbar totalCartItems={cart.total_items} />
      <Products handleAddToCart={handleAddToCart} products={products} />
    </div>
  );
};

export default App;

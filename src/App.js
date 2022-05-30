import { useState, useEffect } from "react";
import Products from "./components/products/Products";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import commerce from "./lib/Commerce";
import LoadingSpinner from "../src/LoadingSpinner";
import Cart from "./components/Cart/Cart";

let App = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState({ cart: { total_items: 0 } });
  console.log("cart=", cart);

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

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Navbar totalCartItems={cart.total_items} />
      {/* <Products handleAddToCart={handleAddToCart} products={products} /> */}
      <Cart cart={cart} />
    </div>
  );
};

export default App;

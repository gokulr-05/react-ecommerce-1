import { useState, useEffect } from "react";
import Products from "./components/products/Products";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import commerce from "./lib/Commerce";

let App = () => {
  let [products, setProducts] = useState([]);
  console.log("products=", products);

  let fetchProducts = async () => {
    let data = await commerce.products.list();

    let products_item = data.data;
    setProducts(products_item);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;

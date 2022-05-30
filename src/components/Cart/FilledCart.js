import { useState, useEffect } from "react";
import FilledCartItems from "./FilledCartItems";

const FilledCart = ({ cart, updateCartQuantity, removeItemFromCart }) => {
  let [cartItems, setCartItems] = useState(cart.line_items);

  console.log("cart in FilledCart js=", cart);

  useEffect(() => {
    setCartItems(cart.line_items);
  }, [cart]);

  return (
    <div>
      {cartItems.map((val) => {
        return (
          <FilledCartItems
            id={val.id}
            key={val.id}
            name={val.name}
            price={val.price.formatted_with_symbol}
            image={val.image.url}
            quantity={val.quantity}
            updateCartQuantity={updateCartQuantity}
            removeItemFromCart={removeItemFromCart}
          />
        );
      })}
    </div>
  );
};

export default FilledCart;

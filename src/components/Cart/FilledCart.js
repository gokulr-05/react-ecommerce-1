import { useState, useEffect } from "react";
import FilledCartItems from "./FilledCartItems";

const FilledCart = ({ cart }) => {
  let [cartItems, setCartItems] = useState(cart.line_items);

  //   console.log("cart in FilledCart js=", cart.line_items);

  return (
    <div>
      {cartItems.map((val) => {
        return (
          <FilledCartItems
            key={val.id}
            name={val.name}
            price={val.price.formatted_with_symbol}
            image={val.image.url}
            quantity={val.quantity}
          />
        );
      })}
    </div>
  );
};

export default FilledCart;

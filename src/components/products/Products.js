import React from "react";
import Product from "./Product/Product";
import shoes from "../../assets/shoe.jpg";
import mac from "../../assets/mac.jpg";
import "./Products.css";
let products1 = [
  {
    id: 1,
    image: shoes,
    name: "shoes",
    description: "Nice shoes",
    price: "$5",
  },
  {
    id: 2,
    image: mac,
    name: "mac book",
    description: "impressive performance",
    price: "$10",
  },
];

const Products = ({ products }) => {
  return (
    <main>
      <div className="container products-bucket-1">
        <div className="row">
          {products.map((val) => {
            return (
              <Product
                key={val.id}
                id={val.id}
                image={val.image}
                name={val.name}
                description={val.description}
                price={val.price}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;

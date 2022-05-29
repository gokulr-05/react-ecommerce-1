import React from "react";
import "./Product.css";
const Product = ({ id, image, name, description, price, handleAddToCart }) => {
  let image1 = image.url;
  let price1 = price.formatted_with_symbol;

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 m-3 card-bucket-1 ">
      <div className="card ">
        <img
          src={image1}
          className="card-img-top card-img img-fluid"
          alt={name}
        />

        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title  text-uppercase m-0 p-0">{name}</h5>
            <h5 className="m-0 p-0">{price1}</h5>
          </div>
          <div className="text-center my-3">
            <p
              className="card-text text-muted   text-capitalize"
              dangerouslySetInnerHTML={{ __html: `${description}` }}
            ></p>
          </div>
          <div className="text-center">
            <a
              onClick={() => {
                handleAddToCart(id, 1);
              }}
              href="#1"
              className="btn btn-primary text-capitalize"
            >
              add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

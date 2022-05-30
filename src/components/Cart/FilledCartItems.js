import React from "react";
import "./FilterCartItems.css";

const FilledCartItems = ({ name, price, image, quantity }) => {
  return (
    <div className="container filtercartitem-bucket-1">
      <div className="row row-bucket-1">
        <div className="col-4">
          <div className=" filtercartitem-img-bucket-1">
            <img
              className="shadow img-thumbnail filtercartitem-img"
              src={image}
              alt={name}
            />
          </div>
        </div>
        <div className="col-4">
          <div className="filled-cart-items-name-bucket d-flex flex-column align-items-center justify-content-center">
            <p className="text-capitalize">{name}</p>
          </div>
          <div className="d-flex gap-3 align-items-center justify-content-center">
            <div>
              <button className="plus-btn bg-primary text-white">+</button>
            </div>
            <div>{quantity}</div>
            <div>
              <button className="minus-btn bg-primary text-white">-</button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="filled-cart-items-price-bucket d-flex align-items-center justify-content-center">
            <p>{price}</p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <button className="btn btn-primary text-capitalize">remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilledCartItems;

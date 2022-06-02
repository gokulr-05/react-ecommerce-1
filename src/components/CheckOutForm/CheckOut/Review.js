import React from "react";
import "./Review.css";
const Review = ({ checkoutToken1 }) => {
  console.log("checkoutToken1=", checkoutToken1);
  return (
    <div className="container margin-top-100 ">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <h1 className="text-capitalize">order summary</h1>
          </div>
          <div className="">
            {checkoutToken1.line_items.map((val) => {
              return (
                <div
                  key={val.id}
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="">
                    <h4 className="text-capitalize">{val.product_name}</h4>
                    <p>{`Quantity: ${val.quantity}`}</p>
                  </div>
                  <div className="">
                    <p>{val.price.formatted_with_symbol}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <p>Total:</p>
            <strong>{checkoutToken1.live.total.formatted_with_symbol}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

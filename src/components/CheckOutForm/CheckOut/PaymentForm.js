import React from "react";
import Review from "./Review";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise = loadStripe(
  "pk_test_51L5refSHBbhIoBwPhZjWQL9lJhbq5488onNW1gOMLGtyfuEN0EPvb2jK416Hx6BxSaRLq9Er5nd0rqKZMkq2TajK00hFKMhfUY"
);
const PaymentForm = ({ checkoutToken1 }) => {
  let handleSubmit = (event, elements, stripe) => {
    event.preventDefault();
  };

  console.log("payment form");
  return (
    <div>
      <Review checkoutToken1={checkoutToken1} />
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => {
            <form>
              <CardElement />
              <br />
              <br />
              <div className="d-flex align-items-center justify-content-center gap-4">
                <div>
                  <button className="btn btn-primary">Back</button>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={!stripe}
                  >
                    {`Pay ${checkoutToken1.live.subtotal.formatted_with_symbol}`}
                  </button>
                </div>
              </div>
            </form>;
          }}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default PaymentForm;

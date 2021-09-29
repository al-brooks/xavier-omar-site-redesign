// import logo from '../images/logo-min.png';
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

function App() {
  const [product, setProduct] = useState({
    name: 'if You Feel Sweatshirt',
    price: 39,
    productBy: 'Xavier Omar'
  });

  const handlePayment = (token) => {
    const body = {
      token,
      product
    };
    const headers = {
      'Content-Type': 'application/json'
    };

    // when in production http needs to be https for Stripe to work
    return fetch(`http://localhost:8080/payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
      .then((response) => {
        console.log('RESPONSE', response);
        const { status } = response;
        console.log('STATUS', status);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {/* <img src={logo} alt="xavier omar logo" /> */}
      <StripeCheckout
        stripeKey={process.env.REACT_APP_KEY}
        token={handlePayment}
        name="Buy Merch"
        amount={product.price * 100}
        shippingAddress
        billingAddress
      >
        <button>
          Pay ${product.price} for {product.name}
        </button>
      </StripeCheckout>
    </div>
  );
}

export default App;

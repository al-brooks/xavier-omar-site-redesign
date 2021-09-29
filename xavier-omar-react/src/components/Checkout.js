import '../css/output.css';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[Payment Method]', paymentMethod);
    }
  };
  return (
    <div id="checkoutWrapper">
      <form onSubmit={handleSubmit} id="checkout">
        <input placeholder="name" />
        <input placeholder="email" />
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424778',
                '::placeholder': {
                  color: '#aab7c4'
                }
              },
              invalid: {
                color: '#9e2146'
              }
            }
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default Checkout;

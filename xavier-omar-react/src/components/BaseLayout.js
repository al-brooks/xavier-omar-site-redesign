import '../css/output.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  'pk_test_51Jf3jRBtLagWahwGH9hb5ULTrV49yzRMlopqCfDlRlHA7NSmoTwTtzDcNwiESXNMH1HGEuQwo3nQtjwCb2YMAiyc00fC84UoEK'
);

const BaseLayout = (props) => {
  return (
    <div id="baseLayout">
      <Elements stripe={stripePromise}>{props.children}</Elements>
    </div>
  );
};

export default BaseLayout;

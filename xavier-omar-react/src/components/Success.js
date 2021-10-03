import { NavLink } from 'react-router-dom';

const Success = () => {
  return (
    <div id="success">
      <NavLink id="exitBtn" to="/">
        X
      </NavLink>
      <div id="successMsg">
        <h4>Thank you for your order!</h4>
        <p>Be on the look out for new merch!</p>
      </div>
    </div>
  );
};

export default Success;

import { NavLink } from 'react-router-dom';

const EmailSuccess = () => {
  return (
    <div id="emailSuccess">
      <NavLink id="exitBtn" to="/">
        X
      </NavLink>
      <div id="emailMsg">
        <h4>Thanks for subscribing!</h4>
        <p>Check your email for exclusive gifts and offers :)</p>
      </div>
    </div>
  );
};

export default EmailSuccess;

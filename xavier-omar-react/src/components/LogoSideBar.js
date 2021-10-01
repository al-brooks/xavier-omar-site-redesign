import { NavLink } from 'react-router-dom';
import logo from '../images/logo-min.png';

const LogoSideBar = () => {
  return (
    <section id="logoSideBar">
      <NavLink to="/">
        <img id="logo" src={logo} alt="xavier omar logo" />
      </NavLink>
    </section>
  );
};

export default LogoSideBar;

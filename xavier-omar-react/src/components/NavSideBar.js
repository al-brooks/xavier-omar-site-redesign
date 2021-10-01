import { NavLink } from 'react-router-dom';

const NavSideBar = () => {
  return (
    <section id="navSideBar">
      <NavLink to="/merch">Merch</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/videos">Videos</NavLink>
    </section>
  );
};

export default NavSideBar;

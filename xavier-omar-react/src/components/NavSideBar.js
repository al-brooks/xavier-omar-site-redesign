import { NavLink } from 'react-router-dom';

const NavSideBar = () => {
  return (
    <section id="navSideBar">
      <NavLink className="link" to="/merch">
        Merch
      </NavLink>
      <NavLink className="link" to="/music">
        Music
      </NavLink>
      <NavLink className="link" to="/videos">
        Videos
      </NavLink>
    </section>
  );
};

export default NavSideBar;

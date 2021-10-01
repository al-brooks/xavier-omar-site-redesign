import '../css/output.css';
import LogoSideBar from './LogoSideBar';
import NavSideBar from './NavSideBar';

const BaseLayout = (props) => {
  return (
    <main id="baseLayout">
      <LogoSideBar />
      <NavSideBar />
      {props.children}
    </main>
  );
};

export default BaseLayout;

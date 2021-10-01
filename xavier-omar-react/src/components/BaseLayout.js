import '../css/output.css';
import Header from './Header';
import LogoSideBar from './LogoSideBar';
import NavSideBar from './NavSideBar';

const BaseLayout = (props) => {
  return (
    <main id="baseLayout">
      <Header />
      <LogoSideBar />
      <NavSideBar />
      {props.children}
    </main>
  );
};

export default BaseLayout;

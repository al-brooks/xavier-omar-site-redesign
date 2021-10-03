import '../css/output.css';
import Header from './Header';
import LogoSideBar from './LogoSideBar';
import NavSideBar from './NavSideBar';
import EmailList from './EmailList';

const BaseLayout = (props) => {
  return (
    <main id="baseLayout">
      <Header />
      <LogoSideBar />
      <NavSideBar />
      <EmailList />
      {props.children}
    </main>
  );
};

export default BaseLayout;

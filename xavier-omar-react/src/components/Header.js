import insta from '../images/Insta-logo-min.png';
import twitter from '../images/Twitter-logo-min.png';
import facebook from '../images/Facebook-logo-min.png';
import apple from '../images/Apple-logo-min.png';
import spotify from '../images/Spotify-logo-min.png';
import tidal from '../images/Tidal-logo-min.png';

const Header = () => {
  return (
    <nav id="socialNav">
      <a href="https://www.instagram.com/xvromar/?hl=en">
        <img className="socialBtns" src={insta} alt="instagram icon" />
      </a>
      <a href="https://twitter.com/XvrOmar">
        <img className="socialBtns" src={twitter} alt="twitter icon" />
      </a>
      <a href="https://www.facebook.com/XvrOmar/">
        <img className="socialBtns" src={facebook} alt="facebook icon" />
      </a>
      <a href="https://music.apple.com/us/artist/xavier-om%C3%A4r/1119391043">
        <img className="socialBtns" src={apple} alt="apple music icon" />
      </a>
      <a href="https://open.spotify.com/artist/3UjPnt2nRmw10N58bBeNOg">
        <img className="socialBtns" src={spotify} alt="spotify music icon" />
      </a>
      <a href="https://tidal.com/browse/artist/7885320">
        <img className="socialBtns" src={tidal} alt="tidal music icon" />
      </a>
    </nav>
  );
};

export default Header;

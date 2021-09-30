import { connect } from 'react-redux';
import { useEffect } from 'react';
import logo from '../images/logo-min.png';
import '../css/output.css';
import Merch from './Merch';
import MusicList from './MusicList';
import VideoList from './VideoList';
import * as actionCreators from '../store/creators/actionCreators';

const App = (props) => {
  useEffect(() => {
    props.onMusicLoaded();
    props.onVideosLoaded();
    props.onMerchLoaded();
  }, [props]);

  return (
    <div>
      <img id="logo" src={logo} alt="xavier omar logo" />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMusicLoaded: () => dispatch(actionCreators.fetchMusic()),
    onVideosLoaded: () => dispatch(actionCreators.fetchVideos()),
    onMerchLoaded: () => dispatch(actionCreators.fetchMerch())
  };
};

export default connect(null, mapDispatchToProps)(App);

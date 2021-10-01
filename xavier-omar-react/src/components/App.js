import { connect } from 'react-redux';
import { useEffect } from 'react';
import '../css/output.css';
import * as actionCreators from '../store/creators/actionCreators';

const App = (props) => {
  useEffect(() => {
    props.onMusicLoaded();
    props.onVideosLoaded();
    props.onMerchLoaded();
  }, [props]);

  return <div id="app"></div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMusicLoaded: () => dispatch(actionCreators.fetchMusic()),
    onVideosLoaded: () => dispatch(actionCreators.fetchVideos()),
    onMerchLoaded: () => dispatch(actionCreators.fetchMerch())
  };
};

export default connect(null, mapDispatchToProps)(App);

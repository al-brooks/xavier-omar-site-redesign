import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';

const VideoList = (props) => {
  useEffect(() => {
    props.onVideosLoaded();
  }, []);

  const Videos = props.videos.map((video) => {
    return (
      <div key={video.video_id} className="video">
        <h4>{video.title}</h4>
        <iframe
          width="560"
          height="315"
          src={video.embed_url}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  });

  return <section id="videoSection">{Videos}</section>;
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVideosLoaded: () => dispatch(actionCreators.fetchVideos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);

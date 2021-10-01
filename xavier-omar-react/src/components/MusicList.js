import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';

const MusicList = (props) => {
  useEffect(() => {
    props.onMusicLoaded();
  }, []);

  const musicItems = props.music.map((album) => {
    return (
      <section key={album.music_id} className="musicSection">
        <div className="album">
          <h4>{album.title}</h4>
          <img src={album.cover_art_url} alt="album cover" />
          <div className="streamingLinks">
            <a href={album.apple_url}>apple music</a>
            <a href={album.spotify_url}>spotify music</a>
            <a href={album.tidal_url}>tidal music</a>
          </div>
        </div>
      </section>
    );
  });

  return <div>{musicItems}</div>;
};

const mapStateToProps = (state) => {
  return {
    music: state.music
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMusicLoaded: () => dispatch(actionCreators.fetchMusic())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);

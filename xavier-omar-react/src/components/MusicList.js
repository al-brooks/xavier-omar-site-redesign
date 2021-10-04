import { connect } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import apple from '../images/Apple-logo-min.png';
import spotify from '../images/Spotify-logo-min.png';
import tidal from '../images/Tidal-logo-min.png';
import * as actionCreators from '../store/creators/actionCreators';

const MusicList = (props) => {
  useEffect(() => {
    props.onMusicLoaded();
  }, []);

  const musicItems = props.music.map((album) => {
    return (
      <div key={album.music_id} className="albumListing">
        <img
          className="albumCovers"
          src={album.cover_art_url}
          alt="album cover"
        />
        <div className="streamingLinks">
          <h4>Listen On:</h4>
          <a href={album.apple_url}>
            <img src={apple} alt="apple music icon" />
          </a>
          <a href={album.spotify_url}>
            <img src={spotify} alt="spotify music icon" />
          </a>
          <a href={album.tidal_url}>
            <img src={tidal} alt="tidal music icon" />
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id="musicSection">
      <NavLink id="exitBtn" to="/">
        X
      </NavLink>
      {musicItems}
    </section>
  );
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

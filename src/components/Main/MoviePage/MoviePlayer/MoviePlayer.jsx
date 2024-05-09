import ReactPlayer from 'react-player/youtube';
import './MoviePlayer.css';

function MoviePlayer({ movieLink }) {
  return (
    <div id='movie-player'>
      <ReactPlayer url={movieLink} controls />
    </div>
  );
}

export default MoviePlayer;

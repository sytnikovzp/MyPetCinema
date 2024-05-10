import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMovie,
  deleteMovieAction,
} from '../../../../store/actions/movieActions';
import './MovieItem.css';

function MovieItem({ movie }) {
  const dispatch = useDispatch();

  const currentMovie = useSelector((state) => state.currentMovie);
  const [currMovie, setCurrMovie] = useState(currentMovie);

  useEffect(() => {
    setCurrMovie(currentMovie);
  }, [currentMovie]);

  const {
    id,
    movieTitle,
    moviePosterURL,
    movieGenreList,
    directorsList,
    countryName,
    releaseYear,
  } = movie;

  const onMovieEdit = () => {
    dispatch(selectMovie(movie));
  };

  const onItemDelete = (event) => {
    event.stopPropagation();
    dispatch(deleteMovieAction(id));
  };

  return (
    <div
      className={
        'movie-item-wrapper ' + (id === currMovie.id ? 'edit-now' : '')
      }
      onDoubleClick={onMovieEdit}
    >
      {/* <p className='content'>
        {movieTitle} directed by {directorsList} was released in {releaseYear} year
      </p> */}

      <div className='movie-item-img-container'>
        <img
          src={
            moviePosterURL
              ? moviePosterURL
              : 'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png'
          }
          alt={movieTitle ? movieTitle : 'NoName movie'}
          className='movie-item-poster'
        />
      </div>
      <div className='movie-item-info-container'>
          <h3>{movieTitle ? movieTitle : 'NoName movie'}</h3>
        <div className='movie-item-info'>
          <div className='bold'>
            <p>Страна:</p>
            <p>Режисёр:</p>
            <p>Жанр:</p>
            <p>Год:</p>
          </div>
          <div className='movie-item-data-column'>
            <p>{countryName ? countryName : 'Unknown'}</p>
            <p>{directorsList ? directorsList : 'Unknown'}</p>
            <p>{movieGenreList ? movieGenreList : 'Unknown'}</p>
            <p>{releaseYear ? releaseYear : 'Unknown'}</p>
          </div>
        </div>
      </div>

      <span className='delete-btn' onClick={onItemDelete}>
        X
      </span>
    </div>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default MovieItem;

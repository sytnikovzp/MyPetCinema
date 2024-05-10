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
    >
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

      <div className='item-button-block'>
        <span className='item-button edit-btn' onClick={onMovieEdit}>
          <i className='fa fa-pencil-square-o' aria-hidden='true'></i>
        </span>

        <span className='item-button delete-btn' onClick={onItemDelete}>
          <i className='fa fa-trash-o' aria-hidden='true'></i>
        </span>
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default MovieItem;

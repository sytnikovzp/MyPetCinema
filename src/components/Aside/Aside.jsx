import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addNewMovie,
  createMovieAction,
  updateMovieAction,
  deleteMovieAction,
} from '../../store/actions/movieActions';
import './Aside.css';

function Aside() {
  const dispatch = useDispatch();

  const currentMovie = useSelector((state) => state.currentMovie);
  const [movie, setMovie] = useState(currentMovie);

  useEffect(() => {
    setMovie(currentMovie);
  }, [currentMovie]);

  const onInputChange = (event) => {
    setMovie({
      ...movie,
      [event.target.name]: event.target.value,
    });
  };

  const onInputClear = (event) => {
    const sibling = event.target.previousSibling;
    setMovie({
      ...movie,
      [sibling.name]: '',
    });
  };

  const onNewMovie = () => {
    dispatch(addNewMovie());
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (movie.id) {
      dispatch(updateMovieAction(movie));
    } else {
      dispatch(createMovieAction(movie));
    }
  };

  const onMovieDelete = () => {
    dispatch(deleteMovieAction(movie.id));
  };

  return (
    <form id='movie-form' onSubmit={onFormSubmit}>
      <div id='wrapper-form'>
        <h3>Service</h3>
        <div className='movie-form-item'>
          <input
            type='text'
            name='movieTitle'
            id='movieTitle'
            placeholder='Movie title'
            value={movie.movieTitle}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            X
          </span>
        </div>
        <div className='movie-form-item'>
          <input
            type='text'
            name='directorName'
            id='directorName'
            placeholder='Director name'
            value={movie.directorName}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            X
          </span>
        </div>
        <div className='movie-form-item'>
          <input
            type='text'
            name='countryName'
            id='countryName'
            placeholder='Country'
            value={movie.countryName}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            X
          </span>
        </div>
        <div className='movie-form-item'>
          <input
            type='text'
            name='releaseYear'
            id='releaseYear'
            placeholder='Year'
            value={movie.releaseYear}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            X
          </span>
        </div>
      </div>

      <div className='btn-form-block'>
        <button className='btn' id='new-btn' onClick={onNewMovie}>
          New
        </button>

        <button type='submit' id='save-btn' className='btn'>
          Save
        </button>

        {movie.id ? (
          <button id='delButton' className='btn' onClick={onMovieDelete}>
            Delete
          </button>
        ) : (
          ''
        )}
      </div>
    </form>
  );
}

Aside.propTypes = {
  currentMovie: PropTypes.object,
  onFormSubmit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Aside;

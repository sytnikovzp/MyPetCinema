import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addNewMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from '../../store/slices/movieSlice';
import './Aside.css';

function Aside() {
  const dispatch = useDispatch();

  const currentMovie = useSelector((state) => state.movieList.currentMovie);
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
      dispatch(updateMovie(movie));
    } else {
      dispatch(createMovie(movie));
    }
  };

  const onMovieDelete = (event) => {
    event.preventDefault();
    dispatch(deleteMovie(movie.id));
  };

  return (
    <div id='wrapper-form'>
      <h3>Service</h3>
      <form id='movie-form' onSubmit={onFormSubmit}>
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
            <i className='fa fa-times' aria-hidden='true'></i>
          </span>
        </div>

        <div className='movie-form-item'>
          <input
            type='text'
            name='moviePosterURL'
            id='moviePosterURL'
            placeholder='Movie poster URL'
            value={movie.moviePosterURL}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            <i className='fa fa-times' aria-hidden='true'></i>
          </span>
        </div>

        <div className='movie-form-item'>
          <input
            type='text'
            name='movieLink'
            id='movieLink'
            placeholder='Movie link (URL)'
            value={movie.movieLink}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            <i className='fa fa-times' aria-hidden='true'></i>
          </span>
        </div>

        <div className='movie-form-item'>
          <input
            type='text'
            name='studioName'
            id='studioName'
            placeholder='Film studio name'
            value={movie.studioName}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            <i className='fa fa-times' aria-hidden='true'></i>
          </span>
        </div>

        <div className='movie-form-item'>
          <input
            type='text'
            name='movieGenreList'
            id='movieGenreList'
            placeholder='Movie genre list'
            value={movie.movieGenreList}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            <i className='fa fa-times' aria-hidden='true'></i>
          </span>
        </div>

        <div className='movie-form-item'>
          <input
            type='text'
            name='directorsList'
            id='directorsList'
            placeholder='Directors list'
            value={movie.directorsList}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            <i className='fa fa-times' aria-hidden='true'></i>
          </span>
        </div>

        <div className='movie-form-item'>
          <input
            type='text'
            name='actorsList'
            id='actorsList'
            placeholder='Actors list'
            value={movie.actorsList}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            <i className='fa fa-times' aria-hidden='true'></i>
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
            <i className='fa fa-times' aria-hidden='true'></i>
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
            <i className='fa fa-times' aria-hidden='true'></i>
          </span>
        </div>

        <div className='movie-form-item'>
          <textarea
            name='storyline'
            id='storyline'
            rows={3}
            cols={80}
            placeholder='Storyline movie...'
            value={movie.storyline}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            <i className='fa fa-times' aria-hidden='true'></i>
          </span>
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
    </div>
  );
}

Aside.propTypes = {
  currentMovie: PropTypes.object,
  onFormSubmit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Aside;

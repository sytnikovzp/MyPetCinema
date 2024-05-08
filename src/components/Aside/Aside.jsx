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
            name='fName'
            id='fName'
            placeholder='First name'
            value={movie.fName}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            X
          </span>
        </div>
        <div className='movie-form-item'>
          <input
            type='text'
            name='lName'
            id='lName'
            placeholder='Last name'
            value={movie.lName}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            X
          </span>
        </div>
        <div className='movie-form-item'>
          <input
            type='email'
            name='eMail'
            id='eMail'
            placeholder='E-mail'
            value={movie.eMail}
            onChange={onInputChange}
          />
          <span className='clear-btn' onClick={onInputClear}>
            X
          </span>
        </div>
        <div className='movie-form-item'>
          <input
            type='tel'
            name='cPhone'
            id='cPhone'
            placeholder='Phone'
            value={movie.cPhone}
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

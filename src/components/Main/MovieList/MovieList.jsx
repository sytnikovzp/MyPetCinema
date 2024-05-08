import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem/MovieItem';
import {
  getMoviesAction,
  addNewMovie,
} from '../../../store/actions/movieActions';
import './MovieList.css';

function MovieList() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.arrMovies);

  useEffect(() => {
    dispatch(getMoviesAction());
  }, [dispatch]);

  const onNewMovie = () => {
    dispatch(addNewMovie());
  };

  return (
    <div id='wrapper-list'>
      <div id='movie-list'>
        {movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
      <div className='btn-list-block'>
        <button className='btn' id='new-btn' onClick={onNewMovie}>
          New
        </button>
      </div>
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;

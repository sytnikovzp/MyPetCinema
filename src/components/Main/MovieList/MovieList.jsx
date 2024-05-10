import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem/MovieItem';
import { getMoviesAction } from '../../../store/actions/movieActions';
import './MovieList.css';

function MovieList() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.arrMovies);

  useEffect(() => {
    dispatch(getMoviesAction());
  }, [dispatch]);

  return (
    <div id='movie-list-wrapper'>
      <h3>Bestselling movies:</h3>
      <div id='movie-list'>
        {movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from './MovieItem/MovieItem';
import { getMovies } from '../../../store/slices/movieSlice';
import './MovieList.css';

function MovieList() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movieList.arrMovies);

  useEffect(() => {
    dispatch(getMovies());
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

export default MovieList;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesAction } from '../../../store/actions/movieActions';
import MovieItem from './MovieItem/MovieItem';

function MovieList() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.moviesList.movies);
  
  // const actors = useSelector((state) => state.actorsList.actors);
  // console.log(actors);

  useEffect(() => {
    dispatch(getMoviesAction());
  }, [dispatch]);

  return (
    <div className='list'>
      {movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;

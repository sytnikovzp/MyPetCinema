import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesAction } from '../../store/actions/movieActions';
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.arrMovies);

  useEffect(() => {
    dispatch(getMoviesAction());
  }, [dispatch]);

  return (
    <>
      <div id='header'>
        <div className='img-header'>
          <i className='fa fa-film' aria-hidden='true'></i>
        </div>
        <h2>Сегодня в прокате:</h2>
        <ul>
          <li>
            {movies.map((movie) => {
              return (
                <a href={movie.id} key={movie.id}>
                  {movie.movieTitle}
                </a>
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;

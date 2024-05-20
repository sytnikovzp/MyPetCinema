import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../store/slices/movieSlice';
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieList.arrMovies);

  const headerMovies = movies.slice(-3);

  useEffect(() => {
    dispatch(getMovies());
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
            {headerMovies.map((movie) => {
              return (
                <a href={movie.id} key={movie.id}>
                  {movie.movieTitle ? movie.movieTitle : 'NoName movie'}
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

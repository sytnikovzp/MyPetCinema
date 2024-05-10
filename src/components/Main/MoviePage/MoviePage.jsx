import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MoviePlayer from './MoviePlayer/MoviePlayer';
import './MoviePage.css';

function MoviePage() {
  const currentMovie = useSelector((state) => state.currentMovie);
  const [currMovie, setCurrMovie] = useState(currentMovie);

  useEffect(() => {
    setCurrMovie(currentMovie);
  }, [currentMovie]);

  const {
    movieTitle,
    moviePosterURL,
    movieLink,
    studioName,
    movieGenreList,
    directorsList,
    actorsList,
    countryName,
    releaseYear,
    storyline,
  } = currMovie;

  return (
    <>
      <div id='movie-item'>
        <div className='movie-name'>
          <h1>
            {movieTitle ? movieTitle : 'NoName movie'}
            {releaseYear ? ', ' + releaseYear : ''}
          </h1>
        </div>
        <div className='movie-container'>
          <div className='movie-information'>
            <div className='img-container'>
              <img
                src={
                  moviePosterURL
                    ? moviePosterURL
                    : 'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png'
                }
                alt={movieTitle ? movieTitle : 'NoName movie'}
                className='poster'
              />
            </div>
            <div className='info-container'>
              <div className='movie-info'>
                <div className='bold'>
                  <p>Страна:</p>
                  <p>Студия:</p>
                  <p>Режисёр:</p>
                  <p>Жанр:</p>
                  <p>Год:</p>
                  <p>Актеры:</p>
                </div>
                <div className='data-column'>
                  <p>{countryName ? countryName : 'Unknown'}</p>
                  <p>{studioName ? studioName : 'Unknown'}</p>
                  <p>{directorsList ? directorsList : 'Unknown'}</p>
                  <p>{movieGenreList ? movieGenreList : 'Unknown'}</p>
                  <p>{releaseYear ? releaseYear : 'Unknown'}</p>
                  <p>
                    {actorsList ? actorsList + ' и другие.' : 'Unknown'}
                  </p>
                </div>
              </div>
              <div className='storyline-container'>
                <p className='bold'>Cюжет:</p>
                <p>{storyline ? storyline : 'Unknown'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoviePlayer movieLink={movieLink} />
    </>
  );
}

export default MoviePage;

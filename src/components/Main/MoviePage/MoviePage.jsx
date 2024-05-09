import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
            {movieTitle}, {releaseYear}
          </h1>
        </div>
        <div className='movie-container'>
          <div className='movie-information'>
            <div className='img-container'>
              <img src={moviePosterURL} alt={movieTitle} className='poster' />
            </div>
            <div className='info-container'>
              <div className='movie-info'>
                <div className='bold'>
                  <p>Страна:</p>
                  <p>Студия:</p>
                  <p>Режисёр:</p>
                  <p>Жанр:</p>
                  <p>Год выпуска:</p>
                  <p>Перечень актеров:</p>
                </div>
                <div className='data-column'>
                  <p>{countryName}</p>
                  <p>{studioName}</p>
                  <p>{directorsList}</p>
                  <p>{movieGenreList}</p>
                  <p>{releaseYear}</p>
                  <p>
                    {actorsList}
                    <span> и другие.</span>
                  </p>
                </div>
              </div>
              <div className='storyline-container'>
                <p className='bold'>Cюжет:</p>
                <p>{storyline}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoviePage;

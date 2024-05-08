import MoviePage from './MoviePage/MoviePage';
import MovieList from './MovieList/MovieList'
import MovieForm from './MovieList/MovieForm/MovieForm'
import './Main.css';

function Main() {

  return (
    <div id='main'>
      {/* <MoviePage /> */}
      <MovieList />
      <MovieForm />
    </div>
  );
}

export default Main;

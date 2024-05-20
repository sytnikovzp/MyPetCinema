import { Switch, Route, useRouteMatch } from 'react-router-dom';
import MoviesList from './MoviesList/MoviesList';
import MoviePage from './MoviePage/MoviePage';
import './Movies.css';

function Movies() {
  const { path } = useRouteMatch();

  return (
    <div id='main'>
      <Switch>
        <Route path={`${path}/:id`}>
          <MoviePage />
        </Route>
        <Route path={`${path}`}>
          <MoviesList />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;

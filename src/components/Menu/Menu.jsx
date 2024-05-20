import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import MovieList from '../MovieList/MovieList';
import ActorsList from '../ActorsList/ActorsList';
import DirectorsList from '../DirectorsList/DirectorsList';
import StudiosList from '../StudiosList/StudiosList';
import './Menu.css';

function Menu() {
  return (
    <Router>
      <div id='menu'>
        <h3>Menu</h3>
        <nav>
          <ul>
            <li>
              <NavLink to='/' activeClassName='selected'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/movies' activeClassName='selected'>
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to='/actors' activeClassName='selected'>
                Actors
              </NavLink>
            </li>
            <li>
              <NavLink to='/directors' activeClassName='selected'>
                Directors
              </NavLink>
            </li>
            <li>
              <NavLink to='/studios' activeClassName='selected'>
                Studios
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path='/' component={MovieCarousel} exact />
        <Route path='/movies' component={MovieList} />
        <Route path='/actors' component={ActorsList} />
        <Route path='/directors' component={DirectorsList} />
        <Route path='/studios' component={StudiosList} />
        <Redirect path='*' to='' />
      </Switch>
    </Router>
  );
}

export default Menu;

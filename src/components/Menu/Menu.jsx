import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MoviesCarousel from '../MoviesCarousel/MoviesCarousel';
import Movies from '../Movies/Movies';
import Actors from '../Actors/Actors';
import Directors from '../Directors/Directors';
import Studios from '../Studios/Studios';
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
        <Route path='/' component={MoviesCarousel} exact />
        <Route path='/movies' component={Movies} />
        <Route path='/actors' component={Actors} />
        <Route path='/directors' component={Directors} />
        <Route path='/studios' component={Studios} />
        <Redirect path='*' to='' />
      </Switch>
    </Router>
  );
}

export default Menu;

import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import './Menu.css';

function Menu() {
  return (
    <Router>
      <div id='menu'>
        <h3>Menu</h3>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
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
        <Redirect path='*' to='' />
      </Switch>
    </Router>
  );
}

export default Menu;

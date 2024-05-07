import { Component } from 'react';
import './Header.css';

export class Header extends Component {
  render() {
    const movies = this.props.movies;
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
                  <a href='#' key={movie}>
                    {movie}
                  </a>
                );
              })}
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Header;

import { Component } from 'react';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <>
        <div id='header'>
          <div className='img-header'>
            <i className='fa fa-film' aria-hidden='true'></i>
          </div>
          <h2>Сегодня в прокате:</h2>
          <ul>
            <li>
              <a href='#'>Сердце из стали</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Header;

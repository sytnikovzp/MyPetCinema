import { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render() {
    const movieStudio = this.props.movieStudio;
    return (
      <>
        <div id='footer'>
          <div className='social-net footer-border'>
            <div className='img-footer'>
              <i className='fa fa-location-arrow' aria-hidden='true'></i>
            </div>
            <div className='text-footer'>
              <span>Адрес киностудии</span>
              <p>
                <a href='https://maps.app.goo.gl/c8b7NSXnsYFPatBZ9'>
                  {movieStudio[0]}
                </a>
              </p>
            </div>
          </div>
          <div className='social-net footer-border'>
            <div className='img-footer'>
              <i className='fa fa-envelope' aria-hidden='true'></i>
            </div>
            <div className='text-footer'>
              <span>E-mail режисёра</span>
              <p>
                <a href={'mailto:' + movieStudio[1]}>{movieStudio[1]}</a>
              </p>
            </div>
          </div>
          <div className='social-net'>
            <div className='img-footer'>
              <i className='fa fa-phone' aria-hidden='true'></i>
            </div>
            <div className='text-footer'>
              <span>Телефон автора сайта</span>
              <p>
                <a href={'tel:' + movieStudio[2]}>{movieStudio[2]}</a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;

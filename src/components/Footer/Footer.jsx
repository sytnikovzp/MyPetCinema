import './Footer.css';

function Footer() {
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
              <a href='https://maps.app.goo.gl/c8b7NSXnsYFPatBZ9' target='_blank'>
                г. Киев, ул. Закревского, 22
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
              <a href={'mailto:' + 'director@mail.ua'}>director@mail.ua</a>
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
              <a href={'tel:' + '+38 044 123 45 67'}>+38 044 123 45 67</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

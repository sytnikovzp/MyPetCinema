import { Component } from 'react';
import './Main.css';

export class Main extends Component {
  render() {
    const actors = this.props.actors;
    return (
      <>
        <div id='main'>
          <div className='movie-name'>
            <h1>Назад в будущее</h1>
          </div>
          <div className='movie-container'>
            <div className='movie-information'>
              <div className='img-container'>
                <img
                  src='https://static.hdrezka.ac/i/2021/2/21/w399fb56a333fke75x37l.jpeg'
                  alt='Назад в будущее'
                  className='poster'
                />
              </div>
              <div className='info-container'>
                <div className='movie-info'>
                  <div className='bold'>
                    <p>Страна:</p>
                    <p>Студия:</p>
                    <p>Жанр:</p>
                    <p>Год выпуска:</p>
                    <p>Перечень актеров:</p>
                  </div>
                  <div className='data-column'>
                    <p>США</p>
                    <p>"Universal"</p>
                    <p>Приключения, фантастика, комедии, зарубежное</p>
                    <p>1985</p>{' '}
                    <p>
                      {actors.map((actor) => {
                        return <span key={actor}>{actor + ', '}</span>;
                      })}
                      <span>и другие.</span>
                    </p>
                  </div>
                </div>
                <div className='storyline-container'>
                  <p className='bold'>Cюжет:</p>
                  <p>
                    Марти Макфлай – обычный американский подросток из
                    Калифорнии. Его слабохарактерный отец Джордж постоянно
                    подвергается насмешкам и издевательствам начальник Биффа
                    Таннена, мать парня страдает депрессией и ожирением, а его
                    старшие братья и сестры – классические неудачники. Однажды
                    ночью 1985 года парень встречает со своим эксцентричным
                    другом-ученым по прозвищу Док, который представляет главному
                    герою настоящую машину времени. Вот только дальнейшие
                    события идут совсем не по плану изобретателя – вместо него в
                    1955 год отправляется Марти, который совершенно не понимает,
                    что любое действие может кардинальным образом изменить
                    будущее.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;

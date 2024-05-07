import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  state = {
    movies: [
      'Терминатор 2: Судный день',
      'Назад в будущее',
      'Звездные войны: Возвращение Джедая',
    ],
    actors: [
      'Майкл Дж. Фокс',
      'Кристофер Ллойд',
      'Лиа Томпсон',
      'Криспин Гловер',
      'Томас Ф. Уилсон',
      'Клаудия Уэллс',
      'Марк МакКлюр',
      'Уэнди Джо Спербер',
      'Джордж ДиЧенцо',
      'Фрэнсис Ли МакКейн',
    ],
    movieStudio: [
      'г. Киев ул. Закревского, 22',
      'faculty@film.ua',
      '+38 044 459 46 10',
    ],
  };

  render() {
    return (
      <>
        <Header movies={this.state.movies} />
        <Main actors={this.state.actors} />
        <Footer movieStudio={this.state.movieStudio} />
      </>
    );
  }
}

export default App;

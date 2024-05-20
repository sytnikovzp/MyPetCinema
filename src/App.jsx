import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div id='main-wrapper'>
          <Menu />
          {/* <Main /> */}
          <Aside />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;

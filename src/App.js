import React, { Component } from 'react';
import './bootstrap/freelancer.min.css';
import './App.css';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Portfolio />
      </>
    );
  }
}

export default App;
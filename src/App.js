import React, { Component } from 'react';
import './bootstrap/freelancer.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
      </>
    );
  }
}

export default App;

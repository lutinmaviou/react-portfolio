import React, { Component } from 'react';
import './bootstrap/freelancer.min.css';
import './App.css';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Copyright from './components/footer/Copyright';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
        <Copyright />
      </>
    );
  }
}

export default App;
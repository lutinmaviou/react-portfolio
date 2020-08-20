import React, { Component } from 'react';
import './bootstrap/freelancer.min.css';
import './App.css';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Copyright from './components/footer/Copyright';
import ContactForm from './components/contact/ContactForm';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Portfolio />
        <About />
        <ContactForm />
        <Footer />
        <Copyright />
      </>
    );
  }
}

export default App;
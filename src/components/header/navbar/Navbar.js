import React, { Component } from 'react';
//import Style from '../../bootstrap/scss/layout/_navbar.scss';
import './Navbar.css';
import Job from './Job';

export default class Navbar extends Component {
    render() {
        return (
            //<div className={Style.mainNav}>
                <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div className="container">

                        <a className="navbar-brand js-scroll-trigger" id="name" href="#">
                            <h1 className="mb-n3 mt-2">Bertrand Bourion</h1>
                            {this.props.isCorrect === true ? <Job /> : <></>}
                        </a>

                        <button id="menu-button"
                            className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded text-right"
                            type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto" id="nav-bar">
                                <li className="nav-item mx-0 mx-lg-1">
                                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">À propos</a>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            //</div>
        )
    }
}


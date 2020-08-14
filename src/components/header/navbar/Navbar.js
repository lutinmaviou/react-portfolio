import React, { Component } from 'react';
import './Navbar.css';
import Job from './Job';
import BarsIcon from './BarsIcon';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container-fluid">

                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <h1 className="ml-lg-5" id="name">Bertrand Bourion</h1>
                        {this.props.isCorrect === true ? <Job /> : <></>}
                    </a>

                    <button id="menu-button"
                        className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded text-right"
                        type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span><BarsIcon /></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end mr-lg-5 mt-md-n3" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link mr-md-3" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-md-3" href="#about">À propos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            /* <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand text-light text-uppercase" href="#">Bertrand Bourion</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-light" href="#">Home <span class="sr-only">(current)</span></a>
                        <a className="nav-link text-light" href="#">Features</a>
                        <a className="nav-link text-light" href="#">Pricing</a>
                        <a className="nav-link disabled text-light" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </nav> */
        )
    }
}


import React, { Component } from 'react';
import Style from '../../bootstrap/scss/layout/_masthead.scss';
import './Header.css';
import Navbar from './navbar/Navbar';
import Riddle from './riddle/Riddle';
import NoRiddle from './noRiddle/NoRiddle';
import Photo from './photo/Photo';
import { withGetScreen } from 'react-getscreen';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCorrect: false,
            showRiddle: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        if (window.scrollY >= 600) {
            this.setState({ isCorrect: true });
        }
    }

    handleIsCorrect = jobName => {
        jobName === 'développeur web' || jobName === 'developpeur web' ? this.setState({ isCorrect: true }) : this.setState({ isCorrect: false });
    }

    handleShowRiddle = () => {
        this.setState({ showRiddle: true });
    }

    handleHideRiddle = () => {
        this.setState({ showRiddle: false });
    }

    render() {
        if (this.props.isMobile())
            return (
                <div className={Style.masthead}>
                    <header className="masthead text-white text-center" id="page-top">
                        <Navbar isCorrect={this.state.isCorrect} />
                        <div className="d-lg-flex">
                            <Photo />
                            <h2 className="mt-5 text-warning animated rubberBand" id="welcome-text">BIENVENUE !</h2>
                        </div>
                    </header>
                </div>
            );
        return (
            <div className={Style.masthead}>
                <header className="masthead text-white text-center" id="page-top">
                    <Navbar isCorrect={this.state.isCorrect} />
                    <div className="d-lg-flex">
                        <Photo />
                        <div className="container d-flex align-items-center flex-column justify-content-center animated slideInRight" id="header">
                            {this.state.showRiddle === false ? (<NoRiddle showRiddle={this.handleShowRiddle} />) : (<Riddle showRiddle={this.handleHideRiddle} isCorrect={this.handleIsCorrect} />)}
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default withGetScreen(Header);
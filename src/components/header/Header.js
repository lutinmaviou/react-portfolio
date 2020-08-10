import React, { Component } from 'react';
import Style from '../../bootstrap/scss/layout/_masthead.scss';
import './Header.css';
import Navbar from './navbar/Navbar';
import Riddle from './riddle/Riddle';
import Photo from './photo/Photo';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isCorrect: false };
    }

    handleIsCorrect = job => {
        job === 'web developer' ? this.setState({ isCorrect: true }) : this.setState({ isCorrect: false });
    }

    render() {
        return (
            <div className={Style.masthead}>
                <header className="masthead bg-dark text-white text-center">
                    <div className="d-flex">
                        <Navbar isCorrect={this.state.isCorrect}/>
                        <Riddle isCorrect={this.handleIsCorrect} />
                        <Photo />
                    </div>
                </header>
            </div>
        )
    }
}

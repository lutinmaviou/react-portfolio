import React, { Component } from 'react';
import Style from '../../bootstrap/scss/layout/_masthead.scss';
import './Header.css';
import Riddle from './riddle/Riddle';
import Photo from './photo/Photo';

export default class Header extends Component {
    render() {
        return (
            <div className={Style.masthead}>
                <header className="masthead bg-dark text-white text-center">
                    <div className="d-flex">
                        <Riddle />
                        <Photo />
                    </div>
                </header>
            </div>
        )
    }
}

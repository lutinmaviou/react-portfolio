import React, { Component } from 'react';
import Me from '../../../shared/img/moi.jpg';

export default class Photo extends Component {
    render() {
        return (
            <div>
                <img src={Me} alt="" width="300px" height="auto" id="my-face" />
            </div>
        )
    }
}
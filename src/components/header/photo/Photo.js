import React from 'react';
import MeMini from '../../../shared/img/dark-me-mini.jpg';
import Me from '../../../shared/img/dark-me.jpg';
import ProgressiveImage from 'react-progressive-image';

export default () => {
    return <div>
        <ProgressiveImage src={Me} placeholder={MeMini}>
            {src => <img src={src} alt="Moi" width="300px" height="auto" id="my-face" className="ml-lg-5 mt-lg-5 rounded animated fadeIn" />}
        </ProgressiveImage>
    </div>
}
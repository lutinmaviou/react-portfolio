import React from 'react';
import Github from './icons/Github';
import LinkedIn from './icons/LinkedIn';
import Twitter from './icons/Twitter';

export default () => {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Localisation</h4>
                        <p className="lead mb-0">1 avenue des prés verts
						<br />25370 Métabief</p>
                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Autours du Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/lutinmaviou"
                            target="blank">
                            <Github />
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/bourionbertrand"
                            target="blank">
                            <LinkedIn />
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://linkedin.com/in/lutinmaviou"
                            target="blank">
                            <Twitter />
                        </a>
                    </div>

                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by
						<a href="http://startbootstrap.com"> Start Bootstrap</a>.</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}
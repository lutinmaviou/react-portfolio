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
                        <a className="btn btn-outline-light btn-social mx-1" href="https://linkedin.com/in/lutinmaviou"
                            target="blank">
                            <LinkedIn />
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/bourionbertrand"
                            target="blank">
                            <Twitter />
                        </a>
                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Telephone</h4>
                        <p className="lead mb-0">+33 (0)6 72 95 36 64</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}
import React from 'react';
import StarIcon from '../../icons/StarIcon';
import P1 from '../../shared/img/projects/P1.PNG';
import P2 from '../../shared/img/projects/P2.PNG';
import P3 from '../../shared/img/projects/P3.PNG';
import P4 from '../../shared/img/projects/P4.PNG';
import P5 from '../../shared/img/projects/P5.PNG';

export default () => {
    return (
        <>
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <StarIcon></StarIcon>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row">

                        <div className="col-md-6 col-lg-4">
                            <p className="text-center text-secondary font-weight-bold">Projet 1 / OpenClassrooms</p>
                            <div className="portfolio-item mx-auto project-item" data-toggle="modal" data-target="#portfolioModal1">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white">
                                        <h4 id="portfolio-items">
                                            <a href="https://p1.yourwebagency.fr" target="blank">Visiter le site</a>
                                        </h4>
                                    </div>
                                </div>
                                <img src={P1} alt="Projet 1" className="img-fluid"></img>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <p className="text-center text-secondary font-weight-bold">Projet 2 / OpenClassrooms</p>
                            <div className="portfolio-item mx-auto project-item" data-toggle="modal" data-target="#portfolioModal1">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white">
                                        <h4 id="portfolio-items">
                                            <a href="https://p2.yourwebagency.fr" target="blank">Visiter le site</a>
                                        </h4>
                                    </div>
                                </div>
                                <img src={P2} alt="Projet 2" className="img-fluid"></img>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <p className="text-center text-secondary font-weight-bold">Projet 3 / OpenClassrooms</p>
                            <div className="portfolio-item mx-auto project-item" data-toggle="modal" data-target="#portfolioModal1">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white">
                                        <h4 id="portfolio-items">
                                            <a href="https://p3.yourwebagency.fr" target="blank">Visiter le site</a>
                                        </h4>
                                    </div>
                                </div>
                                <img src={P3} alt="Projet 3" className="img-fluid"></img>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <p className="text-center text-secondary font-weight-bold">Projet 4 / OpenClassrooms</p>
                            <div className="portfolio-item mx-auto project-item" data-toggle="modal" data-target="#portfolioModal1">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white">
                                        <h4 id="portfolio-items">
                                            <a href="https://writerblog.yourwebagency.fr" target="blank">Visiter le site</a><br />
                                            <a href="https://github.com/lutinmaviou/writerBlog.git" target="blank">Le code sur GitHub</a>
                                        </h4>
                                    </div>
                                </div>
                                <img src={P4} alt="Projet 4" className="img-fluid"></img>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <p className="text-center text-secondary font-weight-bold">Projet 5 / OpenClassrooms</p>
                            <div className="portfolio-item mx-auto project-item" data-toggle="modal" data-target="#portfolioModal1">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white">
                                        <h4 id="portfolio-items">
                                            <a href="http://webotek.yourwebagency.fr" target="blank">Visiter le site</a><br />
                                            <a href="https://github.com/lutinmaviou/webotek.git" target="blank">Le code sur GitHub</a>
                                        </h4>
                                    </div>
                                </div>
                                <img src={P5} alt="Projet 5" className="img-fluid"></img>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
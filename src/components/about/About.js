import React, { Component } from 'react';
import StarIcon from '../../icons/StarIcon';
import Cv from './Cv';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = { showCv: false }
    }

    handleShowCv = () => {
        this.setState({ showCv: true });
    }

    handleCloseCv = () => {
        this.setState({ showCv: false });
    }

    render() {
        return (
            <>
                <section className="page-section bg-primary text-white mb-0" id="about">
                    <div className="container">

                        <h2 className="page-section-heading text-center text-uppercase text-white">À propos de moi</h2>

                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><StarIcon /></div>
                            <div className="divider-custom-line"></div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 ml-auto">
                                <p className="lead font-weight-bolder">Ancien professionnel de la restauration, j'ai décidé en 2019 de me reconvertir dans
                                la programmation de sites web et applications. Le titre de développeur web est désormais acquis
                                grâce au parcours
                                du même nom que j'ai suivi par correspondance avec l'école
						<a href="https://openclassrooms.com/fr/paths/48-developpeur-web-junior" target="blank"
                                        id="ocr"> Openclassrooms</a>
                                </p>
                            </div>
                            <div className="col-lg-4 mr-auto">
                                <p className="lead font-weight-bolder text-right">Ce site est destiné à en savoir un peu sur moi et découvrir mes réalisations.
                                Mon temps étant désormais consacré à la création de divers projets, la section portfolio devrait
						s'alimenter régulièrement, car je suis définitivement corrompu par ce métier passionant !</p>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <a onClick={this.handleShowCv} id="show-cv" className="btn btn-xl btn-outline-light rounded js-scroll-trigger" href="#myCv">
                                Voir mon CV
				    </a>
                        </div>
                    </div>
                </section>
                <div id="myCv" className="mb-3 text-center d-flex flex-column bg-secondary" >

                    {this.state.showCv === true ?
                        <>
                            <Cv onCloseCv={this.handleCloseCv} />
                            <a
                                onClick={this.handleCloseCv} id="close-cv"
                                className="btn btn-primary btn-xl rounded js-scroll-trigger mt-5 mb-5 mx-auto" href="#about">
                                Fermer</a>
                        </>
                        : <></>}

                </div>
            </>
        )
    }
}
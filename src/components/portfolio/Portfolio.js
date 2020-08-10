import React from 'react';
import StarIcon from '../../icons/StarIcon';

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
{/* 						</div><img class="img-fluid" src="img/portfolio/P1.png" alt="Projet 1">
 */}					</div>
				</div>

                    </div>

                </div>
            </section>
        </>
    )
}
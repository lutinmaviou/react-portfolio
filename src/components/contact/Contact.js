import React from 'react';
import ToolsIcon from '../../icons/ToolsIcon';

export default () => {
    return (
        /* <section className="page-section" id="contact">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Me contacter</h2>
                <h4 className="text-center text-uppercase text-secondary mt-3 mb-0">(Formulaire en construction)</h4>

                <div className="text-center mt-5 mb-5">
                    <ToolsIcon />
                </div>

                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h5 className="text-center text-secondary">bertrandbou@hotmail.fr</h5>
                    </div>
                </div>
            </div>
        </section> */

        <section className="page-section" id="contact">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Me contacter</h2>

                <div className="row">

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control" />
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control" />
                                        <label for="email" class="">Your email</label>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control" />
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div class="text-center text-md-left">
                            <a class="btn btn-primary">Send</a>
                        </div>
                        <div class="status"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
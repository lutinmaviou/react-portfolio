import React from 'react';
import StarIcon from '../../icons/StarIcon';
import { Formik } from 'formik';

const ContactForm = () => (
    <section className="page-section" id="contact">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Me contacter</h2>

            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <StarIcon />
                </div>
                <div className="divider-custom-line"></div>
            </div>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Nom requis';
                    }
                    if (!values.email) {
                        errors.email = 'Champs requis';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Adresse email invalide';
                    }
                    if (!values.message) {
                        errors.message = 'Message requis';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert('Message envoyé !');
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (

                        <div className="row justify-content-center bg-light rounded">

                            <div className="col-md-9 mb-md-0 mb-5">
                                <form onSubmit={handleSubmit}>

                                    <div className="row">

                                        <div className="col-md-6 mt-4">
                                            <div>
                                                <label className="ml-md-1" htmlFor="name">Votre nom *</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name}
                                                />
                                                <p className="text-danger ml-md-1">{errors.name && touched.name && errors.name}</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 mt-4">
                                            <div>
                                                <label className="ml-md-1" htmlFor="email">Votre email *</label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                />
                                                <p className="text-danger ml-md-1">{errors.email && touched.email && errors.email}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 mt-4">
                                            <div>
                                                <label className="ml-md-1" htmlFor="subject">Sujet (optionnel)</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.subject}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 mt-4">
                                            <div>
                                                <label className="ml-md-1" htmlFor="message">Votre message *</label>
                                                <textarea
                                                    type="text"
                                                    id="message"
                                                    name="message"
                                                    rows="2"
                                                    className="form-control md-textarea"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.message}>
                                                </textarea>
                                                <p className="text-danger ml-md-1">{errors.message && touched.message && errors.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit" disabled={isSubmitting}
                                            className="btn btn-primary btn-sm mt-5 mb-md-5">
                                            Envoyer
                                    </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    )}
            </Formik>

<h4 className="text-center text-warning mt-5 mb-2">Pas encore fonctionnel... Bientôt !</h4>
<h4 className="text-center text-secondary">bertrandbou@hotmail.fr</h4>

        </div>
    </section>
);

export default ContactForm;
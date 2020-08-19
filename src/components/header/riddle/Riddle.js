import React, { Component } from 'react';
import './Riddle.css';
import TrueIcon from './icons/TrueIcon';
import FalseIcon from './icons/FalseIcon';
import {withGetScreen} from 'react-getscreen';

class Riddle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            firstAnswer: null,
            secondAnswer: null,
            thirdAnswer: null,
            fourthAnswer: null,
            fifthAnswer: null,
            solution: null
        }
    }

    componentDidMount() {
        const inputs = document.querySelectorAll('.riddle-input');
        const questionsInputs = Array.prototype.slice.call(inputs);
        this.state.questions.push(questionsInputs);
        for (let i = 0; i < questionsInputs.length; i++) {
            const questions = this.state.questions.push(questionsInputs[i]);
            this.setState({ questions: questions })
        }
        this.setState({ questions: questionsInputs });
    }

    handleChange = event => {
        const value = event.target.value.toLowerCase();
        switch (event.target.name) {
            case 'first-step': {
                if ( value === 'dés' || value === 'des') {
                    this.setState({
                        firstAnswer: true
                    })
                } else {
                    this.setState({
                        firstAnswer: false
                    })
                }
            } break;
            case 'second-step': {
                if (value === 'voeu') {
                    this.setState({
                        secondAnswer: true
                    })
                } else {
                    this.setState({
                        secondAnswer: false
                    })
                }
            } break;
            case 'third-step': {
                if (value === 'l\eau' || value === 'eau') {
                    this.setState({
                        thirdAnswer: true
                    })
                } else {
                    this.setState({
                        thirdAnswer: false
                    })
                }
            } break;
            case 'fourth-step': {
                if (value === 'peur') {
                    this.setState({
                        fourthAnswer: true
                    })
                } else {
                    this.setState({
                        fourthAnswer: false
                    })
                }
            } break;
            case 'fifth-step': {
                if (value === 'web') {
                    this.setState({
                        fifthAnswer: true
                    })
                } else {
                    this.setState({
                        fifthAnswer: false
                    })
                }
            } break;
            default: { return this.state }
        }
    }

    handleSubmit = event => {
        const target = this.state.questions[5];
        const value = target.value.toLowerCase();
        if (value === 'développeur web' || value === 'developpeur web') {
            this.setState({
                solution: true
            });
            this.props.isCorrect(value);
        } else {
            this.setState({
                solution: false
            })
        }
        event.preventDefault();
    }

    render() {
        if (this.props.isMobile()) return <h2 className="mt-5 text-warning animated rubberBand">BIENVENUE !</h2>;
        return (
            <div className="container d-flex align-items-center flex-column" id="header">
                <h2 className="mt-lg-n5 mb-5 text-primary"><u>Petite charade :</u></h2>
                <form>
                    <div className="text-lg-left">
                        <label className="riddle-label">Mes premiers servent à jouer au Craps ou au 421 :</label>
                        <input className="ml-3 riddle-input" type="text" name="first-step" onChange={this.handleChange} />
                        {this.state.firstAnswer === null ? <></> : this.state.firstAnswer === false ? (<FalseIcon />) : (<TrueIcon />)}
                    </div>
                    <div className="text-lg-left">
                        <label className="riddle-label">Mon deuxième se fait devant une étoile filante :</label>
                        <input className="ml-3 riddle-input" type="text" name="second-step" onChange={this.handleChange} />
                        {this.state.secondAnswer === null ? <></> : this.state.secondAnswer === false ? (<FalseIcon />) : (<TrueIcon />)}
                    </div>
                    <div className="text-lg-left">
                        <label className="riddle-label">Mon troisième est un des 4 éléments naturels :</label>
                        <input className="ml-3 riddle-input" type="text" name="third-step" onChange={this.handleChange} />
                        {this.state.thirdAnswer === null ? <></> : this.state.thirdAnswer === false ? (<FalseIcon />) : (<TrueIcon />)}
                    </div>
                    <div className="text-lg-left">
                        <label className="riddle-label">Mon quatrième se ressent devant un film d'horreur :</label>
                        <input className="ml-3 riddle-input" type="text" name="fourth-step" onChange={this.handleChange} />
                        {this.state.fourthAnswer === null ? <></> : this.state.fourthAnswer === false ? (<FalseIcon />) : (<TrueIcon />)}
                    </div>
                    <div className="text-lg-left">
                        <label className="riddle-label">Mon cinquième est une toile tissée à l'infini :</label>
                        <input className="ml-3 riddle-input" type="text" name="fifth-step" onChange={this.handleChange} />
                        {this.state.fifthAnswer === null ? <></> : this.state.fifthAnswer === false ? (<FalseIcon />) : (<TrueIcon />)}
                    </div>
                    <div className="text-lg-left">
                        <label htmlFor="riddle-whole" id="riddle-solution" className="riddle-label font-weight-bold">Mon tout est mon métier :</label>
                        <input id="riddle-whole" className="ml-3 riddle-input" type="text" name="last-step" onChange={this.handleChange} />
                        <i className="fas fa-check fa-2x text-success ml-3"></i>
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-dark mt-5 w-50 mx-auto">Vérifier</button>
                </form>
                {this.state.solution === null ? <></> : this.state.solution === false ? <h2 className="text-danger mt-5 mb-n4">OUCH !</h2> : <h2 className="text-success mt-5 mb-n4">BRAVO !!!</h2>}
            </div>
        )
    }
}

export default withGetScreen(Riddle);
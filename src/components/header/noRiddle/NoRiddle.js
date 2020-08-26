import React, { Component } from 'react';

export default class NoRiddle extends Component {
    constructor(props) {
        super(props);
        this.state = { showRiddle: false }
    }

    handleShowRiddle = () => {
        this.setState({ showRiddle: true });
        this.props.showRiddle();
    }

    render() {
        return (
            <>
                <h2 className="text-warning">Une petite devinette ?</h2>
                <button onClick={this.handleShowRiddle} className="btn btn-dark w-25 mt-5">Jouer</button>
            </>
        );
    }
}
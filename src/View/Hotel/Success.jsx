import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Container } from '@material-ui/core';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <MuiThemeProvider >
                <React.Fragment>
                    <br />
                    <Container
                        style={{ border: "1px  solid blue", borderRadius: "20px" }}
                        maxWidth="md"
                    >
                        <h1>Thank You For Your Submission</h1>
                        <p>You will get an email with further instructions</p>
                    </Container>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;

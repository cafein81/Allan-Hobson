import React, { Component } from 'react';
import './Museum.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import museum from '../assets/mus.jpg';
import Button from '@material-ui/core/Button';

export default class Realestate extends Component {
    render() {
        return (
            <div>
                <Container className="page">
                    <Grid item xs={8}>
                        <h1>Museum</h1>

                        <p>The North Star Farm dairy barn has been renovated to house the Dreamstage Brain and Sleep Science Museum.
                             The museum can be visited by school groups free of charge by arrangement with Dr. Hobson.  It can also be visited
                             online via extensive photographs, audio commentary and other multimedia content.  Click the button below to be
                             transferred to the museum site. </p>
                        <Button size="large" className="button">
                            <a href="https://dreamstage-museum.web.app" target="_blank" rel="noopener noreferrer">Go to Museum</a>
                        </Button>
                        <br />
                        <br />

                        <img className="museum" src={museum} alt="museum" />

                    </Grid>
                </Container>
            </div>
        )
    }
}


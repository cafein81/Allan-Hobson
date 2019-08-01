import React, { Component } from 'react';
import './Books.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Bookcard1 from '../components/Bookcard1';
import Bookcard2 from '../components/Bookcard2';
import Bookcard3 from '../components/Bookcard3';
import Bookcard4 from '../components/Bookcard4';
import Bookcard5 from '../components/Bookcard5';
import Bookcard6 from '../components/Bookcard6';
import Bookcard7 from '../components/Bookcard7';
import Bookcard8 from '../components/Bookcard8';
import Bookcard9 from '../components/Bookcard9';
import Bookcard10 from '../components/Bookcard10';
import Bookcard11 from '../components/Bookcard11';




export default class Books extends Component {
    render() {
        return (
            <div>
                <Container className="page">
                    <Grid item xs={8}>
                        <h1>Books</h1>

                        <p>Allan Hobson is a prolific writer with ten published books to his credit.
                            Some of the older out of print titles are still available from the author;
                            see the For Sale section of this site for ordering details.</p>
                        <br />
                        <Bookcard1 />
                        <br />
                        <Bookcard2 />
                        <br />
                        <Bookcard3 />
                        <br />
                        <Bookcard4 />
                        <br />
                        <Bookcard5 />
                        <br />
                        <Bookcard6 />
                        <br />
                        <Bookcard7 />
                        <br />
                        <Bookcard8 />
                        <br />
                        <Bookcard9 />
                        <br />
                        <Bookcard10 />
                        <br />
                        <Bookcard11 />
                        <br />
                        <br />
                        <br />
                        <br />

                    </Grid>



                </Container>
            </div>
        )
    }
}




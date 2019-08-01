import React, { Component } from 'react';
import './Biography.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import lobsterallan from '../assets/lobsterallan.jpg';

export default class Biography extends Component {
    render() {
        return (
            <div>
                <Container className="page">
                    <Grid item xs={8}>
                        <h1>Biography</h1>

                        <p>Allan Hobson is an experimentalist with a broad range of interests. As a scientist, he has conducted pioneering
                            investigations on the brainstem mechanisms of sleep and dreaming which have revolutionized dream theory.
                             His strong interest in the arts led him to design the award-winning scientific exhibit called Dreamstage.</p>

                        <p> As a psychiatrist he has championed a direct and interpersonal approach to psychotherapy with as much emphasis on
                            adaptive behavior as on biographical interpretation. In his personal life, he has experimented by creating a group
                            of friends to compensate for the relative weakness of the extended family in the USA. He has also developed numerous
                         intimate relationships to compensate for the shortcomings of institutional relationships.</p>

                        <p> On his dairy farm in East Burke, Vermont, he has experimented in the design and restoration of 8 antique buildings.
                            The dairy barn, built in 1860, now houses a new Dreamstage exhibition, recreated laboratory office, and an installed silo
                            library. He is now building the Art of Life art gallery. Allan Hobson lives half-time with his new wife, Rosalia Silvestri,
                             and their twin sons, Andrew and Matthew, in Messina, Sicily. With his first wife, Joan Harlowe, he fathered 3 children:
                              Ian, Christopher, and Julia. He has four grandchildren, Henry, Lucy, Chance and Jude. </p>
                        <br />

                        <img className="allan" src={lobsterallan} alt="Hobson" />


                    </Grid>
                </Container>

            </div>
        )
    }
}

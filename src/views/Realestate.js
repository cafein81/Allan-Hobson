import React, { Component } from 'react';
import './Realestate.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import farm from '../assets/farm.jpg';

export default class Realestate extends Component {
    render() {
        return (
            <div>
                <Container className="page">
                    <Grid item xs={8}>
                        <h1>Real Estate</h1>
                        <br />
                        <h3>Vermont Farm</h3>
                        <p>In 1860, Samuel Gilfillan, an immigrant from Scotland, founded what is now Allan Hobson's property,
                            North Star Farm. Eight handmade buildings have been lovingly restored on what is now 106 acres of well-kept woods and field.</p>

                        <p> The chicken house has been restored for vacation rentals in all seasons but is particularly popular with skiers because of
                             the proximity to Burke Mountain. Sleeps 8 (easily), has kitchen, dining room, living room and 4 bedrooms with 2 baths.
                             Rates are $450 weekend, $700 week an $1500/month. Christmas and New Year's rates are 50% higher.</p>

                        <p> The entire property can be rented for weddings at a rate of $2500/weekend from June 1 to August 31. 25 people can be accommodated
                            overnight and the newly renovated art gallery in the barn is available as a wet-weather alternative for the ceremony.
                             There is ample space for a tent to house receptions or the barn stable can be used for that purpose. Catering is the renters'
                              responsibility but we offer that service by separate contract. </p>
                        <br />
                        <img className="farm" src={farm} alt="farm" />
                        <br />
                        <h3>Sicilian Villa</h3>

                        <p> As a psychiatrist he has championed a direct and interpersonal approach to psychotherapy with as much emphasis on
                      adaptive behavior as on biographical interpretation. In his personal life, he has experimented by creating a group
                      of friends to compensate for the relative weakness of the extended family in the USA. He has also developed numerous
                         intimate relationships to compensate for the shortcomings of institutional relationships.</p>
                        <br />
                        <br />
                        <br />

                    </Grid>



                </Container>
            </div>
        )
    }
}


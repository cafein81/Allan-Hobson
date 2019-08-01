import React, { Component } from 'react';
import './Home.css'
import { render } from 'react-dom';
import Typed from 'react-typed';
import Grid from '@material-ui/core/Grid';


export default class Home extends Component {
    render() {
        return (
            <div className="wrapper">

                <div className="hero">

                    <Typed
                        className="animated"
                        strings={[
                            'J. Allan Hobson',
                            'Professor of Psychiatry',
                            'Harvard Medical School',
                            'J. Allan Hobson',]}
                        typeSpeed={40}
                        backSpeed={50}
                    >
                    </Typed>

                </div>

                <Grid
                    container
                    className="home-text"
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <h3>REM Sleep and Dreaming: Towards a Theory of Protoconsciousness</h3>
                    <p><strong>Abstract<span> </span>|</strong><span> </span>Dreaming has fascinated and mystified humankind for ages: the bizarre and evanescent qualities of dreams have invited
                    boundless speculation about their origin, meaning and purpose. For most of the twentieth century, scientific dream theories were
                    mainly psychological. Since the discovery of rapid eye movement (REM) sleep, the neural underpinnings of dreaming have become
                    increasingly well understood, and it is now possible to complement the details of these brain mechanisms with a theory
                     of consciousness that is derived from the study of dreaming. The theory advanced here emphasizes data that suggest that REM
                     sleep may constitute a protoconscious state, providing a virtual reality model of the world that is of functional use to the
                        development and maintenance of waking consciousness.</p>

                    <p> J. Allan Hobson   -   from Nature Vol. 10, Nov. 2009</p>
                </Grid>






            </div>
        )
    }
}

render(
    <Home />,
    document.getElementById('root'),
);

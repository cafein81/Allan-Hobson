import React, { Component } from 'react';
import './Science.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import science from '../assets/science.jpg';

export default class Science extends Component {
    render() {
        return (
            <div>
                <Container className="page">
                    <Grid item xs={8}>
                        <h1>Science</h1>

                        <p>Allan Hobson has recently proposed a new theory of REM sleep dreaming as a protoconscious state upon which consciousness
                            is constructed. Rather than viewing dreaming as an unconscious state in conflict with consciousness, Hobson theorizes that neurones,
                             whose address and chemical identity are determined genetically, interact and self-organize so as to generate first REM sleep,
                              then NREM sleep and finally waking. The mammalian brain is thus automatically equipped before birth with an integrated model
                               of the self, self-as-agent, movement, perceptual space, and emotion. In later waking periods, external information is organized
                             and incorporated into what will become dreaming and waking consciousness.</p>

                        <p> Hobson turned to neurophysiology in 1961 because of his disappointment with psychiatric psychology. Educated at Wesleyan (AB 1955)
                            and Harvard Medical School (MD 1959), he was shocked at the ignorance and arrogance of the psychoanalytic psychiatrists at the Massachusetts
                            Mental Health Center, Harvard's flagship teaching hospital where he began his residency. At the NIMH in Bethesda, he was introduced to
                            sleep and dream research by Frederick Snyder and Edward Evarts. He learned more about experimental approaches to the animal model of
                            REM from Michel Jouvet in Lyon, France.</p>

                        <img className="science" src={science} alt="science" />

                        <p> In the laboratory of Elwood Henneman, Hobson learned to record from single neurones in unanesthetized animals. In 1968, Hobson founded the Laboratory of
                            Neurophysiology at Massachusetts Mental Health Center. Working with Robert McCarley, he developed the reciprocal interaction model of sleep cycle control
                             (Science, 1975) and the activation-synthesis model of conscious state determination (American Journal of Psychiatry, 1977). These theories formed the basis
                             of a brain-oriented theory of dreaming radically different from that of Freud.   </p>

                        <p>Tests of the physiological model followed throughout the 1980's.  Strong evidence for the cholinergic genesis of REM sleep was collected with many collaborators
                            including Helen Baghdoyan, Subimal Datta, and Jose Calvo. The role of aminergic neurones was established by the work of Ralph Lydic. Hobson and McCarley's discovery
                             that both noradrenergic and serotonergic cells were active in waking but silent in REM was widely confirmed.</p>

                        <p> Beginning in 1988, a formal analysis of dream content was pursued in eighteen studies conducted in collaboration with Robert Stickgold, Edward Pace-Schott,
                             David Kahn, and others. This work has revealed that much of dream content was species (rather than individual) specific, leading to Hobson's theory of
                              dreaming as a protoconscious state</p>

                        <p> Dr. Allan Hobson remains active in sleep and dream research since his closure of the MMHC lab in 2003 and his retirement in 2007. He is the Rupert Riedl
                            Professor at the University of Vienna and holds visiting professor appointments in Lisbon, Naples, London, Milan, and Tuebingen. His current experimental
                            collaboration is with Ursula Voss who studies the brain basis of lucid dreaming at the University of Frankfurt. </p>



                    </Grid>



                </Container>
            </div>
        )
    }
}

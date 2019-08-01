import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import bk from '../assets/bk6.jpg';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        height: 300,
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
    },

    cover: {
        height: 300,
        width: 205,
        alignContent: 'right',

    },
    title: {
        fontFamily: 'Source Serif Pro, serif',
        fontSize: 22,
        flexGrow: 1,
        color: '#00363d',
        fontWeight: 600,
        textAlign: 'left',
        paddingLeft: 25,
    },
    body: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 16,
        color: '#333333',
        fontWeight: 400,
        textAlign: 'justify',
        textJustify: 'inter-word',
        lineHeight: 25,
        paddingLeft: 25,
        paddingRight: 25,
    }

}));

export default function Bookcard1() {
    const classes = useStyles();
   

    return (
        <Card className={classes.card}>
            <Grid item xs={9}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <div className={classes.title}>
                            Out of Its Mind: Psychiatry in Crisis
                        </div>
                        <Typography className={classes.body}>
                            <p>
                                Perseus Press 2001.  A critique of modern psychiatry in the light of biological discoveries on the brain basis of mind.
                                The central thesis is that the psychological and social assumptions of psychiatry are both in need of replacement.
                                 Co-authored by Jonathan Leonard.  Still available from Perseus.
                            </p>

                        </Typography>
                    </CardContent>

                </div>
            </Grid>
            <Grid item xs={3}>
                <CardMedia
                    className={classes.cover}
                    image={bk}
                    title="book 1"
                />
            </Grid>

        </Card>
    );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import bk from '../assets/bk10.jpg';
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
                            From Angels to Neurones: Art and the New Science of Dreaming
                        </div>
                        <Typography className={classes.body}>
                            <p>
                                Mattioli 1885, 2005.  Co-authored with Hellmut Wohl, Professor of Art History at Boston University.
                                 The representations of historical views of dreaming are reviewed through a selective discussion of works of Western Art.
                                   The brain basis of creativity and dreaming is detailed as it is revealed in modern sleep and dream science.
                                    Limited availability.
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

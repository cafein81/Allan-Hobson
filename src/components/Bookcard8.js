import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import bk from '../assets/bk8.jpg';
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
                            Dreaming: An Introduction to the Science of Sleep
                        </div>
                        <Typography className={classes.body}>
                            <p>
                                Oxford University Press 2002.  First published as a trade book and now available reissued in the "A Very Short Introduction" series,
                                 this user-friendly and concise text summarizes most of the new findings of sleep and dream science integrated according to the reciprocal
                                 interaction and activation synthesis models.  Ideal for classroom teaching.  Available from Oxford.
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

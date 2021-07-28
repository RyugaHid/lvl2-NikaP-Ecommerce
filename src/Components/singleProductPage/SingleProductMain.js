import React from 'react'
import SingleProductImages from './SingleProductImages';
import SingleProductRight from './SingleProductRight';
import { AppBar, Typography, Box, Button, Grid, Link, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({




}))

function SingleProductMain() {
    const classes = useStyles();

    return (
        <>
            <Container>
                <Grid container  >
                    <Grid item lg={6} >

                        <SingleProductImages />
                    </Grid>

                    <Grid item lg={6}>

                        <SingleProductRight />

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default SingleProductMain

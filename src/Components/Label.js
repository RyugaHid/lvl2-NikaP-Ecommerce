import React from 'react';
import {  Typography, Box, Button, Grid, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListIcon from '@material-ui/icons/List';
import ViewListIcon from '@material-ui/icons/ViewList';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({

    sort: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 40
    },

    numBtn: {
        borderRadius: '100%'
    },
}))

function Label() {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.sort}>
                <Box >
                    <Button><ListIcon /></Button>
                    <Button><ViewListIcon /></Button>

                </Box>

                <Box>
                    <Typography >
                        Label example
                    </Typography>
                </Box>
                <Box>
                    <Button><ArrowBackIosIcon /></Button>

                    <Button className={classes.numBtn}>1</Button>
                    <Button className={classes.numBtn}>2</Button>
                    <Button className={classes.numBtn}>3</Button>



                    <Button><ArrowForwardIosIcon /></Button>
                </Box>

            </Grid>
        </>
    )
}

export default Label

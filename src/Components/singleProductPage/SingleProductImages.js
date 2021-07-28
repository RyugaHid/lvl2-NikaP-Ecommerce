import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button, Grid, Link, Paper, Card } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    images: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '25px'
    },
    imagess: {
        paddingTop: '25px'
    }
}))
function SingleProductImages() {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.images}>
                <Box style={{ width: '100%' }}>
                    <Paper style={{
                        height: '450px', textAlign: 'center',
                        backgroundImage: 'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg")',
                        backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                    }} />
                </Box>
                <Grid container className={classes.imagess} spacing={2} >
                    <Grid item lg={3}>
                        <Paper>
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" alt=""  style={{
                                width: '100%'
                            }} />
                        </Paper>
                    </Grid>
                    <Grid item lg={3}>
                        <Paper>
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" alt=""  style={{
                                width: '100%'
                            }} />
                        </Paper>
                    </Grid>
                    <Grid item lg={3}>
                        <Paper>
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" alt=""  style={{
                                width: '100%'
                            }} />
                        </Paper>
                    </Grid>
                    <Grid item lg={3}>
                        <Paper>
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" alt=""  style={{
                                width: '100%'
                            }} />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SingleProductImages

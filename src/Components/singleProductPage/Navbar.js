import React from 'react';
import { AppBar, Typography, Box, Button, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ProductPage from './ProductPage';

const useStyles = makeStyles((theme) => ({
    navBar: {
        backgroundColor: 'white',
        maxHeight: '80px',
        boxShadow: 'none'

    },

    text: {
        color: 'black'
    },


    btn: {
        borderRadius: 15,
        border: '1px solid white'
    },
    rightNav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',

    },

    link: {
        padding: 15,
        boxShadow: 'none',
        underline: 'none',
        color: 'black'
    },
    logo: {
        padding: 15,
        color: 'black'

    },



}))

function Navbar() {
    const classes = useStyles();
    return (
        <>
            <Grid container>

                <AppBar className={classes.navBar} position='sticky'>
                    <Grid container >
                        <Grid item xs={6}>
                            <Typography variant='h4' className={classes.logo}>
                                <i className="fab fa-mdb" ></i>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className={classes.rightNav}>
                                <Link underline='none' className={classes.link} href="#" >
                                    <ShoppingCartIcon />
                                </Link >
                                <Link underline='none' className={classes.link} href="#" >
                                    <ArrowDropDownIcon />
                                </Link>
                                <Link underline='none' className={classes.link} href="#" >
                                    Shop
                                </Link >
                                <Link underline='none' className={classes.link} href="#" >
                                    Sign in
                                </Link>
                                <Link underline='none' className={classes.link} href="#" >
                                    <Button variant='contained' className={classes.btn}>Sign Up</Button>
                                </Link>
                            </Box>

                        </Grid>

                    </Grid>
                </AppBar>

            </Grid>
            <ProductPage />
        </>
    )
}

export default Navbar

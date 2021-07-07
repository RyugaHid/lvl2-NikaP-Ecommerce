import React from 'react';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Button, Paper, Grid, Link, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import ListIcon from '@material-ui/icons/List';
import ViewListIcon from '@material-ui/icons/ViewList';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    subCat: {
        display: 'flex',
        flexDirection: 'column',
    },
    subCatLink: {
        color: 'black',
        paddingTop: 25,
    },

    searchField: {
        display: 'flex',
        alignItems: 'center'
    },
    shopItems: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-evenly',
        margin: 0,
    },
    sort: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        alignItems: 'center'
    },

    numBtn: {
        borderRadius: '100px'
    }



}))

function Sidebar() {
    const classes = useStyles();
    const [data, setData] = useState([
        {
            title: 'rame maika',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
            price: '100$'
        }, {
            title: 'rame maika',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
            price: '100$'
        },
        {
            title: 'rame maika',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
            price: '100$'
        },
        {
            title: 'rame maika',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
            price: '100$'
        },
        {
            title: 'rame maika',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
            price: '100$'
        }, {
            title: 'rame maika',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
            price: '100$'
        },
        {
            title: 'rame maika',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
            price: '100$'
        },
        {
            title: 'rame maika',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg',
            price: '100$'
        }, {
            title: 'rame maika',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
            price: '100$'
        },

    ])

    return (
        <>

            <Container>
                <Grid container  >
                    <Grid item lg={4}>
                        <Typography variant='h5' style={{
                            paddingTop: 50
                        }}>
                            Subcategories
                        </Typography>

                        <Box className={classes.subCat}>
                            <Link underline='none' href="#" style={{
                                color: 'black'
                            }} >RETURN TO CLOTHING, SHOES, ACCESSORIES</Link>
                            <Link underline='none' href="#" className={classes.subCatLink} >DRESSES</Link>
                            <Link underline='none' href="#" className={classes.subCatLink} >TOPS, TEES & BLOUSES</Link>
                            <Link underline='none' href="#" className={classes.subCatLink} >SWEATERS</Link>
                            <Link underline='none' href="#" className={classes.subCatLink} >FASHION HOODIES & SWEATSHIRTS</Link>
                            <Link underline='none' href="#" className={classes.subCatLink} >JEANS</Link>

                        </Box>

                        <Typography variant='h5' style={{
                            paddingTop: 50
                        }}>
                            Filters
                        </Typography>

                        <Box className={classes.searchField}>
                            <TextField id="standard-search" label="Search field" type="search" />
                            <Button><SearchIcon /></Button>
                        </Box>
                    </Grid>

                    <Grid item lg={8}>
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
                        <Grid container spacing={4}>
                            {data.map(el => (
                                <Grid item lg={4} md={6} xs={12} className={classes.shopItems}>
                                    <Paper>   <img style={{
                                        width: '100%'
                                    }} src={el.img} alt="" className={classes.shopItemImg} /> </Paper>
                                    <h5 className={classes.shopItemTitle}>{el.title}</h5>
                                    <p className={classes.shopItemPrice}>{el.price}</p>

                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Sidebar

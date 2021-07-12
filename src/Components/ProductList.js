import React from 'react';
import { Paper, Grid, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Label from './Label';

const useStyles = makeStyles((theme) => ({
    shopItems: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-evenly',
        margin: 0,
    },
    prodItem: {
        paddingTop: 25
    }
}))
function ProductList() {
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
    const classes = useStyles();
    return (
        <div>

            <Grid container spacing={4} className={classes.prodItem}>
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

            <Label/>
        </div>
    )
}

export default ProductList

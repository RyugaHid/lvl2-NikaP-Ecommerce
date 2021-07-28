import React from 'react'
import { makeStyles, } from '@material-ui/core/styles';
import { Container, Typography, Box } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    title: {
        backgroundColor: '#fbfbfb',
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    titleText: {
        fontWeight: '500'

    }

}))

function ProductPage() {

    const classes = useStyles();

    return (
        <>
            <Box lg={12} className={classes.title}>
                <Typography variant='h4' className={classes.titleText}>
                    Product page
                </Typography>
            </Box>
        </>
    )
}

export default ProductPage

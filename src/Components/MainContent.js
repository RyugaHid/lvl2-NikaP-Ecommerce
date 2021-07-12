import React from 'react';
import { Container, Grid, } from '@material-ui/core';
import Label from './Label';
import ProductList from './ProductList';
import Sidebar from './Sidebar';



function MainContent() {
    return (
        <>

            <Container>
                <Grid container  >
                    <Grid item lg={4} >
                        <Sidebar />
                    </Grid>

                    <Grid item lg={8}>


                        <Label />
                        <ProductList />

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default MainContent

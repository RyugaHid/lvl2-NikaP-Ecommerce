import React from 'react';
import { Box, makeStyles, Container, Typography } from "@material-ui/core";
import RelatedProducts from './RelatedProducts';


const useStyle = makeStyles({

})

function Related() {
    const classes = useStyle();

    return (
        <>
            <Container style={{
                paddingTop: '25px'
            }}>
                <Box>
                    <Typography variant='h5' style={{
                        textAlign: 'center'
                    }}>
                        Related products
                    </Typography>
                </Box>

                <RelatedProducts />

            </Container>
        </>
    )
}

export default Related

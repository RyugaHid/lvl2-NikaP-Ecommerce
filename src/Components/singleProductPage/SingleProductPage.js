import React from 'react';
import Navbar from './Navbar';
import SingleProductMain from './SingleProductMain';
import Des from './Des';
import Related from './Related';
import Footer  from '../Footer'

function SingleProductPage() {
    return (
        <>
            <Navbar />
            <SingleProductMain />
            <Des />
            <Related />
            <Footer />
        </>
    )
}

export default SingleProductPage

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box, Grid, Link } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    icons: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        letterSpacing: '1px'
    },
    footText: {
        color: 'white'
    }

}))

function Footer() {
    const classes = useStyles();

    return (
        <>
            <Box lg={12} style={{
                marginTop: 40,
                padding: 20,
                backgroundColor: '#1266f1'
            }}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={5} md={6} lg={5}>
                            <Typography variant='h6' style={{
                                color: 'white'
                            }}>Get connected with us on social networks!</Typography>
                        </Grid>
                        <Grid item xs={9} sm={7} md={6} lg={7} className={classes.icons}>
                            <Link href="#" style={{
                                paddingRight: 20,
                                color: 'white'
                            }}><FacebookIcon /></Link>
                            <Link href="#" style={{
                                paddingRight: 20,
                                color: 'white'
                            }}><InstagramIcon /></Link>
                            <Link href="#" style={{
                                paddingRight: 20,
                                color: 'white'
                            }}><TwitterIcon /></Link>
                            <Link href="#" style={{
                                paddingRight: 20,
                                color: 'white'
                            }}><LinkedInIcon /></Link>
                            <Link href="#" style={{
                                paddingRight: 20,
                                color: 'white'
                            }}><MailIcon /></Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box lg={12} style={{
                backgroundColor: '#2e2e2e',
                paddingTop: 50,
                paddingBottom: 50
            }}>
                <Container >
                    <Grid container>
                        <Grid item lg={3} md>
                            <Typography variant='h6' className={classes.text} >
                                About me
                            </Typography>
                            <hr style={{
                                width: '60px',
                                display: 'inline-block',
                                border: '1px solid rgb(18, 102, 241)'
                            }} />
                            <Typography className={classes.text}>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </Typography>
                        </Grid>
                        <Grid item lg={3} md>
                            <Typography variant='h6' className={classes.text}>
                                Products
                            </Typography>
                            <hr style={{
                                width: '60px',
                                display: 'inline-block',
                                border: '1px solid rgb(18, 102, 241)'
                            }} />
                            <Box display='flex' flexDirection='column'>
                                <Link style={{
                                    color: 'white',
                                    paddingBottom: 10
                                }} underline='none' href='#'>MDBootstrap</Link>
                                <Link style={{
                                    color: 'white',
                                    paddingBottom: 10
                                }} underline='none' href='#'>MDWordPress</Link>
                                <Link style={{
                                    color: 'white',
                                    paddingBottom: 10
                                }} underline='none' href='#'>BrandFlow</Link>
                                <Link style={{
                                    color: 'white',
                                    paddingBottom: 10
                                }} underline='none' href='#'>Bootstrap Angular</Link>
                            </Box>

                        </Grid>
                        <Grid item lg={3} sm={12}>
                            <Typography variant='h6' className={classes.text}>
                                Useful links
                            </Typography>
                            <hr style={{
                                width: '60px',
                                display: 'inline-block',
                                border: '1px solid rgb(18, 102, 241)'
                            }} />
                            <Box display='flex' flexDirection='column'>
                                <Link style={{
                                    color: 'white',
                                    paddingBottom: 10
                                }} underline='none' href='#'>Your Account</Link>
                                <Link style={{
                                    color: 'white',
                                    paddingBottom: 10
                                }} underline='none' href='#'>Become an Affiliate</Link>
                                <Link style={{
                                    color: 'white',
                                    paddingBottom: 10
                                }} underline='none' href='#'>Shipping Rates</Link>
                                <Link style={{
                                    color: 'white',
                                    paddingBottom: 10
                                }} underline='none' href='#'>Help</Link>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md>
                            <Typography variant='h6' className={classes.text}>
                                Contacts
                            </Typography>
                            <hr style={{
                                width: '60px',
                                display: 'inline-block',
                                border: '1px solid rgb(18, 102, 241)'
                            }} />
                            <Typography style={{
                                color: 'white',
                                paddingBottom: 10
                            }}>New York, Avenue Street 10</Typography>
                            <Typography style={{
                                color: 'white',
                                paddingBottom: 10
                            }}>042 876 836 908</Typography>
                            <Typography style={{
                                color: 'white',
                                paddingBottom: 10
                            }}>company@example.com</Typography>
                            <Typography style={{
                                color: 'white',
                                paddingBottom: 10
                            }}>Monday - Friday: 10-17</Typography>
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            <Box lg={12} style={{
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#252525'
            }}>
                <Typography className={classes.footText}>© 2020 Copyright: MDBootstrap.com</Typography>
            </Box>
        </>

    )
}

export default Footer

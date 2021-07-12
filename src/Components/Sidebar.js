import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Link, TextField, Button, Checkbox, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, Slider, } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Circle from "./Circle";



const useStyles = makeStyles((theme) => ({
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
    check: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        paddingTop: 20
    },
    rating: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 20
    },
    minMax: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    slider: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 25
    },
    sliderSl: {
        width: '150px'
    }
}))



function Sidebar() {
    const classes = useStyles();



    return (
        <>
            <Typography variant='h5' style={{
                paddingTop: 50
            }}>
                Subcategories
            </Typography>

            <Box className={classes.subCat}>
                <Link underline='none' href="#" style={{
                    color: 'black',
                    paddingTop: 20
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

            <Box style={{
                paddingTop: 20
            }}>
                <Typography variant='h6'>
                    Condition
                </Typography>

                <Box className={classes.check}>
                    <Checkbox style={{
                        width: 20,
                        height: 20,
                        padding: 0,
                        paddingRight: 20,
                    }} />
                    <Typography>
                        New
                    </Typography>
                </Box>
                <Box className={classes.check}>
                    <Checkbox style={{
                        width: 20,
                        height: 20,
                        padding: 0,
                        paddingRight: 20
                    }} />
                    <Typography>
                        Used
                    </Typography>
                </Box>
                <Box className={classes.check}>
                    <Checkbox style={{
                        width: 20,
                        height: 20,
                        padding: 0,
                        paddingRight: 20
                    }} />
                    <Typography>
                        Collectible
                    </Typography>
                </Box>
                <Box className={classes.check}>
                    <Checkbox style={{
                        width: 20,
                        height: 20,
                        padding: 0,
                        paddingRight: 20
                    }} />
                    <Typography>
                        Revewed
                    </Typography>
                </Box>
            </Box>

            <Box style={{
                paddingTop: 20
            }}>
                <Typography variant='h6'>
                    Avg. Customer Review
                </Typography>

                <Box className={classes.rating}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarBorderIcon />

                    <Typography style={{
                        paddingLeft: 10
                    }} >
                        & up
                    </Typography>
                </Box>
                <Box className={classes.rating}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />


                    <Typography style={{
                        paddingLeft: 10
                    }} >
                        & up
                    </Typography>
                </Box>
                <Box className={classes.rating}>

                    <StarIcon />
                    <StarIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />

                    <Typography style={{
                        paddingLeft: 10
                    }} >
                        & up
                    </Typography>
                </Box>
                <Box className={classes.rating}>
                    <StarIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />

                    <Typography style={{
                        paddingLeft: 10
                    }} >
                        & up
                    </Typography>
                </Box>
            </Box>

            <Box style={{
                paddingTop: 20
            }}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Price
                    </FormLabel>
                    <RadioGroup aria-label="gender" name="gender1">
                        <FormControlLabel value="UNDER $25" control={<Radio />} label="UNDER $25" />
                        <FormControlLabel value="$25 TO $50" control={<Radio />} label="$25 TO $50" />
                        <FormControlLabel value="$50 TO $100" control={<Radio />} label="$50 TO $100" />
                        <FormControlLabel value="100 TO $200" control={<Radio />} label="$100 TO $200" />
                        <FormControlLabel value="$200 TO ABOVE" control={<Radio />} label="$200 TO ABOVE" />

                    </RadioGroup>
                </FormControl>


            </Box>

            <Box className={classes.minMax}>


                <TextField id="standard-search" label="$ Min" type="search" />
                <Typography>-</Typography>
                <TextField id="standard-search" label="$ Max" type="search" />


            </Box>
            <Typography variant='h6' style={{
                paddingTop: 20
            }}>Price</Typography>

            <Box className={classes.slider}>
                <Box> <Typography>$0</Typography> </Box>
                <Box><Slider className={classes.sliderSl} /></Box>
                <Box><Typography>$100</Typography></Box>
            </Box>

            <Box style={{
                paddingTop: 20
            }}>
                <Typography variant='h6'>
                    Size
                </Typography>

                <Box className={classes.check}>
                    <Checkbox style={{
                        width: 20,
                        height: 20,
                        padding: 0,
                        paddingRight: 20,
                    }} />
                    <Typography>
                        34
                    </Typography>
                </Box>
                <Box className={classes.check}>
                    <Checkbox style={{
                        width: 20,
                        height: 20,
                        padding: 0,
                        paddingRight: 20
                    }} />
                    <Typography>
                        36
                    </Typography>
                </Box>
                <Box className={classes.check}>
                    <Checkbox style={{
                        width: 20,
                        height: 20,
                        padding: 0,
                        paddingRight: 20
                    }} />
                    <Typography>
                        38
                    </Typography>
                </Box>
                <Box className={classes.check}>
                    <Checkbox style={{
                        width: 20,
                        height: 20,
                        padding: 0,
                        paddingRight: 20
                    }} />
                    <Typography>
                        40
                    </Typography>
                </Box>
            </Box>

            <Typography variant='h6' style={{
                paddingTop: 20
            }}>
                Color
            </Typography>
            <Box display='flex' flexWrap='wrap' ml='-15px' flexDirection='row'>
                <Circle bgcolor='#FFFFFF' />
                <Circle bgcolor='#9E9E9E' />
                <Circle bgcolor='#000000' />
                <Circle bgcolor='#4CAF50' />
                <Circle bgcolor='#2196F3' />
                <Circle bgcolor='#9C27B0' />
                <Circle bgcolor='#FFEB3B' />
                <Circle bgcolor='#3F51B5' />
                <Circle bgcolor='#F44336' />
                <Circle bgcolor='#FF9800' />



            </Box>
        </>
    )
}

export default Sidebar

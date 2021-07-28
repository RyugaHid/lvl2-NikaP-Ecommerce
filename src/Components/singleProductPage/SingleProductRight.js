import React from 'react'
import { Typography, Box, Button, Input, FormControlLabel, Radio, FormControl, RadioGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    table: {
        width: '250px',
    },
    tablee: {
        borderBottom: '1px solid #e4e4e4',
        padding: '0',
        margin: '0'
    },
    tableee: {
        width: '400px'
    },



}))
function SingleProductRight() {
    const classes = useStyles();

    const [quantity, setQuantity] = useState(1);

    let increase = () => {
        let currentCount = quantity;
        currentCount++;
        setQuantity(currentCount)

    }

    let decrease = () => {
        let currentCount = quantity;
        currentCount--;
        if (currentCount <= 0) {
            return
        }
        setQuantity(currentCount)



    }

    return (
        <>
            <Box style={{ paddingTop: '25px', paddingLeft: '25px' }}>
                <Typography variant='h4'>Blue denim shirt</Typography>
                <Typography variant='h6' style={{
                    paddingTop: '25px'
                }}>SHIRTS</Typography>
                <Box style={{
                    paddingTop: '25px'
                }}>
                    <StarIcon />

                    <StarIcon />

                    <StarIcon />

                    <StarIcon />

                    <StarBorderIcon />
                </Box>

                <Typography style={{
                    paddingTop: '25px'
                }}>$17.99</Typography>

                <Typography style={{
                    paddingTop: '25px'
                }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum dolorem vitae veniam natus! Debitis dolorem doloremque nesciunt ab dolore delectus veritatis blanditiis iste magni!
                </Typography>
                <TableContainer className={classes.tablee}>
                    <Table className={classes.table} aria-label="simple table">

                        <TableBody>

                            <TableRow>
                                <TableCell style={{ border: 'none', paddingLeft: '0' }}>

                                    Model
                                </TableCell>
                                <TableCell align="left" style={{ border: 'none', paddingLeft: '0' }}>Shirt 5407X</TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell style={{ border: 'none', paddingLeft: '0' }}>
                                    Color
                                </TableCell>
                                <TableCell align="left" style={{ border: 'none', paddingLeft: '0' }}>	Blue</TableCell>

                            </TableRow>
                            <TableRow style={{}}>
                                <TableCell style={{ border: 'none', paddingLeft: '0' }}>
                                    Delivery
                                </TableCell>
                                <TableCell align="left" style={{ border: 'none', paddingLeft: '0' }}>USA, Europe</TableCell>

                            </TableRow>



                        </TableBody>
                    </Table>
                </TableContainer>


                <Box style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '260px',
                    paddingTop: '25px'
                }}>
                    <Typography>Quantity</Typography>
                    <Typography>Select Size</Typography>

                </Box>



                <Box style={{ paddingTop: '25px' }}>
                    <Button onClick={decrease} >-</Button>
                    <Input style={{ width: '50px', height: '30px', }} value={quantity - 1} className={classes.quantityInput}  >  </Input>
                    <Button onClick={increase}>+</Button>

                    <FormControl>
                        <RadioGroup aria-label="gender" name="gender1" style={{ flexDirection: 'row' }}>
                            <FormControlLabel value="female" control={<Radio />} label="SMALL" />
                            <FormControlLabel value="male" control={<Radio />} label="MEDIUM" />
                            <FormControlLabel value="other" control={<Radio />} label="LARGE" />
                        </RadioGroup>
                    </FormControl>
                </Box>


                <Box style={{
                    paddingTop: '25px'
                }}>
                    <Button variant="contained" color="primary">BUY NOW</Button>
                    <Button variant='contained'>ADD TO CARD</Button>

                </Box>





            </Box >
        </>
    )
}

export default SingleProductRight

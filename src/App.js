import './App.css';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Button, Paper, Grid, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const useStyles = makeStyles((theme) => ({


  navBar: {
    backgroundColor: 'transparent',

  },

  text: {
    color: 'black'
  },

  container: {
    backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg')",
    backgroundColor: 'rgba(0,0,0,0.7)' ,
    height: 400,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },

  btn: {
    backgroundColor: 'transparent',
    borderRadius: 15,
    color: 'white',
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
    color: 'white'
  },
  logo: {
    padding: 15,

  },


}))

function App() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
    
        <AppBar className={classes.navBar} position='fixed'>
          <Grid container >
            <Grid item xs={6}>
              <Typography variant='h4' className={classes.logo}>
                <i className="fab fa-mdb"></i>
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

    </>

  );
}

export default App;
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
    height: "300px",
    marginLeft: "80px",
    display: "block",
    justifyContent: "center",
    justifyItems: "center",
    border: "1px solid grey",
  },
  img: {
    width: "90%",
    height: "150px",
    marginLeft: "10px",
    border: "1px solid grey",
  },
  title: {
    width: "90%",
    height: "50px",
    marginLeft: "10px",
    display: "felx",
    justifyContent: "center",
    textAlign: "center",
    border: "1px solid grey",
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "inherit",
    boxSizing: "border-box",
  },
  input:{
      width:'80%',
      height:'50px',
      border:'1px solid blue',
  }
}));
const Loladtry = () => {

    const classes = useStyles();
    return (
      <div className={classes.root}>
        <div className={classes.img}><img style={{height:'100%'}}src='https://z.nooncdn.com/products/tr:n-t_240/v1584606601/N11265059A_1.jpg' alt="Logo" /></div>
        <div className={classes.title}>Stainless Steel Electric</div>
        <div className={classes.title}> 
        <input className={classes.input} type='text' placeholder='Search bar'></input>
        
        </div>
      </div>
    );
}

export default Loladtry

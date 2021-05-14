import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Badge, Stack } from "@chakra-ui/react";
import { Button } from "@material-ui/core";
import { BsTrashFill } from "react-icons/bs";
import "./productpagecheckout1.css";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Button as MuiButton, Grid as MuiGrid } from "@material-ui/core";
import { FcMoneyTransfer } from "react-icons/fc";
import Productcontdown from "./Productcontdown";
import axios from "axios";
import { useHistory } from "react-router-dom";
 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: "cursive",
  },
  paperTitle: {
    fontFamily: "cursive",
    fontSize: "20px ",
    textAlign: "left",
  },
  papercontdown: {
    fontFamily: "cursive",
    fontSize: "20px ",
    position: "relative",
    right: "130px",
  },

  paperbuyitnow: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: "cursive",
  },
  addtocart: {
    width: "400px",
    backgroundColor: "black",
    borderRadius: "10px",
    height: "40px",
    color: "white",
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
    [theme.breakpoints.down('sm')]: {
     position:'relative',
     right:'5px',
     top:'20px'
    },
  },
  buyitnow: {
    width: "500px",
    backgroundColor: "black",
    borderRadius: "10px",
    height: "40px",
    color: "white",
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
    [theme.breakpoints.down('sm')]: {
      position:'relative',
      right:'5px',
      width: "400px",
     },
  },
  paperprice: {
    fontFamily: "cursive",
    textAlign: "left",
  },
  oldprice: {
    fontFamily: "cursive",
    textAlign: "left",
    position: "relative",
    right: "60px",
  },
  discount: {
    fontFamily: "cursive",
    textAlign: "left",
    position: "relative",
    right: "150px",
  },
  description: {
    fontFamily: "Josefin Sans",
  },
  countdown: {
    fontFamily: "Josefin Sans",
  },
  stock: {
    fontFamily: "Josefin Sans",
    textAlign: "center",
  },
}));



export default function CenteredGrid() {
  let history = useHistory();
  var Pathname = window.location.pathname;
  var Pathnamearray = Pathname.split("/");
  
  const [productpage, setproductpage] = useState([]);
  const person = {
    name: "Obaseki Nosa",
    location: "Lagos",
}
  useEffect(() => {
    // this is only executed once
    window.localStorage.removeItem('Buyit');
  
    localStorage.setItem('Buyit', JSON.stringify(Pathnamearray[2]));
    
  
    axios
      .post(`http://localhost:2000/getProductpage`, { Pathnamearray })
      .then((res) => {
        setproductpage(res.data[0]);
        console.log(res.data[0]);
      });
  }, []);
  const classes = useStyles();
  const [product, setproduct] = useState({
    imagesrc:
      "//cdn.shopify.com/s/files/1/0356/4008/2491/products/product-image-1017689827_medium.jpg?v=1586282477",
    name: '20" Dog Folding Cage',
    qt: 1,
    priceold: 150,
    pricenew: 100,
  });

  const handleincrement = (qt) => {
    setproduct({ ...product, qt: qt + 1 });
  };
  const handledecrement = (qt) => {
    setproduct({ ...product, qt: qt - 1 });
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paperTitle} elevation={0}>
            <h1> Super Soft Round Bed for Small Dog</h1>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperprice} elevation={0}>
            <Grid container>
              <Grid item xs={3}>
                <Badge ml="1" fontSize="md" colorScheme="green">
                  <h1>$65.00</h1>
                </Badge>
              </Grid>
              <Grid item xs={3}>
                <Badge>
                  <h5 className={classes.oldprice}> $85.00</h5>
                </Badge>
              </Grid>
              <Grid item xs={3}>
                <Badge
                  className={classes.discount}
                  colorScheme="red"
                  fontSize="md"
                >
                  {" "}
                  -24% OFF
                </Badge>
              </Grid>

              <Grid item xs={3}></Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.description}>
            <br></br>
            <br></br>
            <h1> Product description</h1>
            <br></br>
            <h2>
              Fluffy bed for your small dog so he don't annoy you during night.
            </h2>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.countdown}>
            <h1>COUNTDOWN TITLE</h1>
            <br></br>
            <Productcontdown />
          </div>
        </Grid>
        <div className={classes.stock}>
          <h1>5 LEFT IN STOCK</h1>
        
        </div>


        <Grid item xs={12}>
          <Grid container>
            <Grid item lg={4} xs={12}>
              <div className="Productcheckout__buttons" >
                <Button
                  onClick={() => handleincrement(product.qt)}
                  className="Productcheckout__addbuttons"
                >
                  +
                </Button>
                <p className="Productcheckout__qyt"> {product.qt} </p>
                <Button
                  disabled={product.qt === 0}
                  onClick={() => handledecrement(product.qt)}
                  className="Productcheckout__minusbuttons"
                >
                  -
                </Button>
              </div>
            </Grid>
            <Grid item lg={8} xs={12}>
              <Button
                className={classes.addtocart}
                startIcon={<DeleteIcon />}
                variant="contained"
                color="primary"
              
              >
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button
            className={classes.buyitnow}
            variant="contained"
            color="primary"
            onClick={()=> history.push("/BuyIt")}
          >
            Buy it now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

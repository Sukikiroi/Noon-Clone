import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
const photo1 =
  "https://cdn.shopify.com/s/files/1/0356/4008/2491/products/product-image-1340037844_200x.jpg?v=1586352454";
const photo2 =
  "https://cdn.shopify.com/s/files/1/0356/4008/2491/products/product-image-1340037841_200x.jpg?v=1586352453";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "400px",
  },
  paperphoto: {
    height: "400px",
  },
  papersection: {
    backgroundColor: "white",
    height: "80px",
    width: "80px",
  },
  img: {
    width: "500px",
    height: "300px",
    backgroundSize: "300px 100px",
    backgroundRepeat: "no-repeat",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  var Pathname = window.location.pathname;
  var Pathnamearray = Pathname.split("/");
  const [productpage, setproductpage] = useState([]);
  useEffect(() => {
    // this is only executed once

    axios
      .post(`http://localhost:2000/getProductpage`, { Pathnamearray })
      .then((res) => {
        setproductpage(res.data[0]);
        console.log(res.data[0]);
      });
  }, []);
  const [photo, setphoto] = useState(photo1);
  let handleimage = (img) => {
    setphoto(photo2);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <button onClick={() => handleimage(1)}>
                <Paper className={classes.papersection}>
                  <img
                    className={classes.imgchange}
                    alt="complex"
                    src={photo}
                  />
                </Paper>
              </button>
            </Grid>
            <Grid item xs={12}>
              <button onClick={() => handleimage(2)}>
                <Paper className={classes.papersection}>
                  <img
                    className={classes.imgchange}
                    alt="complex"
                    src={photo}
                  />
                </Paper>
              </button>
            </Grid>
            <Grid item xs={12}>
              <button onClick={() => handleimage(3)}>
                <Paper className={classes.papersection}>
                  <img
                    className={classes.imgchange}
                    alt="complex"
                    src={photo}
                  />
                </Paper>
              </button>
            </Grid>
            <Grid item xs={12}>
              <button onClick={() => handleimage(4)}>
                <Paper className={classes.papersection}>
                  <img
                    className={classes.imgchange}
                    alt="complex"
                    src={photo}
                  />
                </Paper>
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paperphoto} elevation={0}>
            <img className={classes.img} alt="complex" src={photo} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

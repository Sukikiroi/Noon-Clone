import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ProductSubtotal from "./Productsubtotal";
import PayingDebitCard from "./PayingDebitCard";

const Checkoutright = () => {
  const [divheight, setdivheight] = useState("600px");
  const useStyles = makeStyles((theme) => ({
    root: {
      border: "2px solid grey",
      height: "80%",
      width: "80%",
      borderRadius: "10px",
      margin: "0 auto",
      alignItems: "center",
      [theme.breakpoints.up("lg")]: {
        width: "80%",
      },
    },

    order: {
      backgroundColor: "black",
      height: "50px",
      width: "300px",
      borderRadius: "10px",
      textTransform: "capitalize",
    },
    producttitle: {
      fontWeight: "bold",
    },
    price: {
      fontWeight: "bold",
    },

    subtotaltitle: {
      fontWeight: "bold",
      whiteSpace: "nowrap",
      marginLeft: "-20px",
    },

    subtotaltitle2: {
      fontWeight: "bold",
      whiteSpace: "nowrap",
    },
    productgrid: {
      whiteSpace: "nowrap",
      fontWeight: "bold",
    },
    shippinggrid: {
      whiteSpace: "nowrap",
      fontWeight: "bold",
    },
    shippingmethode: {
      whiteSpace: "nowrap",
    },

    totalgrid: {
      fontWeight: "bold",
    },
    shippingtitle: {
      fontWeight: "bold",
    },
  }));
  const classes = useStyles();
  return (
    <div style={{ alignItems: "center" }}>
      <div className={classes.root}>
        YOUR ORDER
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={3} className={classes.producttitle}>
                Product
              </Grid>
              <Grid item xs={3}>
                {" "}
              </Grid>
              <Grid item xs={3}>
                {" "}
              </Grid>
              <Grid item xs={3} className={classes.subtotaltitle}>
                Subtotal(USD)
              </Grid>
            </Grid>
            <Divider />
            <br></br>
          </Grid>
          <ProductSubtotal
            Subtotal={" 35.00"}
            Title={"Flux Basketball Tank -   - M  × 1 "}
          />
          <ProductSubtotal
            Subtotal={" 120.00"}
            Title={"Flux Basketball Tank -   - M  × 1 "}
          />
          <ProductSubtotal
            Subtotal={" 120.00"}
            Title={"Flux Basketball Tank -   - M  × 1 "}
          />
          <ProductSubtotal
            Subtotal={" 120.00"}
            Title={"Flux Basketball Tank -   - M  × 1 "}
          />
          <ProductSubtotal
            Subtotal={" 120.00"}
            Title={"Flux Basketball Tank -   - M  × 1 "}
          />
          <ProductSubtotal
            Subtotal={" 60.00"}
            Title={"Flux Basketball Tank -   - M  × 1 "}
          />

          <Divider />

          <Grid item xs={12}>
            <br></br>
            <Divider />
            <Grid container>
              <Grid item xs={3} className={classes.subtotaltitle2}>
                Subtotal
              </Grid>
              <Grid item xs={3}>
                {" "}
              </Grid>
              <Grid item xs={3}>
                {" "}
              </Grid>
              <Grid item xs={3} className={classes.price}>
                USD 300
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <br></br>
            <Divider />
            <Grid container>
              <Grid item xs={3} className={classes.shippingtitle}>
                Shipping
              </Grid>
              <Grid item xs={3} className={classes.shippingmethode}>
                {" "}
                DHL Eco Express Delivery :{" "}
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3} className={classes.shippinggrid}>
                {" "}
                USD 15.00
              </Grid>
            </Grid>
          </Grid>

          <br></br>
          <Divider />

          <Grid item xs={12}>
            <br></br>
            <Divider />
            <Grid container>
              <Grid item xs={3} className={classes.totalgrid}>
                Total
              </Grid>
              <Grid item xs={3}>
                {" "}
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3} className={classes.totalgrid}>
                {" "}
                USD 315.00
              </Grid>
            </Grid>
          </Grid>

          <br></br>
          <PayingDebitCard />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Grid item xs={12}>
            <br></br>

            <br></br>
            {/* <Button className={classes.order} variant="contained" color="primary">
            Place Order
          </Button> */}
            <br></br>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Checkoutright;

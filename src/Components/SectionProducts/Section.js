import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { RiMoneyDollarBoxLine } from "react-icons/ri";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "AliceBlue",
    width:'500px',
    display: "grid",
    marginLeft: "2px",
    flexDirection: "row",
    gridTemplateColumns: " auto auto auto auto auto auto auto  ",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "auto auto ",
      display: "grid",
      alignContent: "center",
      justifyContent: "center",
      margin: "auto",
    },
  },
  ttitle: {
    fontWeight: "bold",
    marginTop: "10px",
    fontSize: "20px",
    felx: "1 1 0%",
    width: "80px",
    whiteSpace: "nowrap",
    fontFamily: "OpenSans,Arial,Helvetica,sans-serif",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  header_section: {
    display: "grid",
    gridTemplateColumns: "auto auto ",
    justifyContent: "space-between",
    justifyItems: "center",
    alignItems: "flex-start",
    padding: "0px 5px",
    marginBottom: "14px",
    width: "100%",
    height: "50px",
    backgroundColor: "BlanchedAlmond",
  },
  viewallbutton: {
    width: "100px",
    textTransform: "capitalize",
    backgroundColor: "balck",
    marginTop: "5px",
    whiteSpace: "nowrap",
    border: "1px solid grey",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    color: "black",
    "&:hover": {
      border: "1px solid grey",
    },

    [theme.breakpoints.down("xs")]: {
      width: "80px",
      whiteSpace: "nowrap",
      border: "1px solid grey",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      borderRadius: "5px",
    },
  },
}));
const Section = ({ Title, children }) => {
  const classes = useStyles();
  return (
    <div>
      <br></br>
      <br></br>
      <div className={classes.header_section}>
        <h1 className={classes.ttitle}>{Title}</h1>

        <Button
          className={classes.viewallbutton}
          variant="outlined"
          color="primary"
        >
          view All
        </Button>
      </div>

      <div className={classes.root}>{children}</div>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Section;

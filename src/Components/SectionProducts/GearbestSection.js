import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { GrLike } from 'react-icons/gr';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "AliceBlue",
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
    fontFamily: "OpenSans,Arial,Helvetica,sans-serif",
    lineHeight: "1",
    display: "inline-block",
    verticalAlign: "baseline",
    marginLeft: "5px",
    fontSize: "20px",
    color: "#000",
    marginTop: "10px",
  },

  header_section: {
    width: "400px",
    display: "flex",
    marginLeft: "30px",
  },
  section_img: {
    fontSize: "30px",
    marginBottom: "20px",
  },
}));
const Gearbestsection = ({ Title, children,Image }) => {
    const classes = useStyles();
    return (
        <div>
        <div className={classes.header_section}>
             <GrLike   className={classes.section_img}          />
            <h2 className={classes.ttitle}>{Title}</h2>
 
           
         
        </div>
        <div className={classes.root}>{children}</div>
        </div>
    )
}

export default Gearbestsection

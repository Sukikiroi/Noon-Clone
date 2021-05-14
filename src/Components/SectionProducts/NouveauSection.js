import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineWindows } from 'react-icons/ai';
 
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "400px",
   
    backgroundColor: "Azure",
    
  },
  header_section: {
    width: "100%",
    height: "50px",
    backgroundColor: "white",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "OpenSans,Arial,Helvetica,sans-serif",
    paddingLeft:'20px'
  },
  side_section: {
    width: "250px",
    height: "350px",

    background: "linear-gradient(139deg,#fc644a,#f33258);",
    marginLeft: "20px",
  },
  children:{
       display:'flex'
  
  },
  product_container:{
    paddingLeft:'30px',
    paddingTop:'20px',
      height:'350px',
    display: "grid",
    flexDirection: "row",
    gridTemplateColumns: " auto auto auto auto auto   ",
    [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "auto  ",
        display: "grid",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
       
      },
  },
  title:{
      paddingLeft:'20px',
  }
}));
const Nouveausection = ({ Title, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header_section}>
        <AiOutlineWindows style={{ fontSize: "30px" }} />
        <h2 className={classes.title}>{Title}</h2>
      </div>
      <div className={classes.children}>
        <div className={classes.side_section}>ddd</div>
        <div className={classes.product_container}>{children}</div>
      </div>
    </div>
  );
};

export default Nouveausection;

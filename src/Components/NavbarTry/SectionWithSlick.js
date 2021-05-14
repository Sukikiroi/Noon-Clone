import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root_div: {
    width: "100%",
 
    marginTop: "40px",
    margin: "auto",
  },
  children:{
    width: "100%",
    margin: "auto",
   
  },
  title:{
    width: "100%",
    margin: "auto",
 padding:'0px 10px 0px 10px',
    display:'flex',
    justifyContent:'space-between',
    '& h2':{
fontWeight:'bold',
fontSize:' 1.5rem',
color:'rgb(64, 69, 83);'
    },
    '& button':{
        border:'2px solid black',
        width:'70px',
        height:'35px'
    }
  }
}));
const Sectionwithslick = ({ Title, children }) => {
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.root_div}>
      <div className={classes.title}><h2>{Title}</h2>
      
    

          <button>View All</button>
      
      </div>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export default Sectionwithslick;

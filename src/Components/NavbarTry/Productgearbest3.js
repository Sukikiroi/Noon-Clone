/**
 * Description
 * @authors Your Name (you@example.org)
 * @date    2021-04-24 13:49:38
 * @version 1.0.0
 */

import React from "react";
import { button } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import Rating from '@material-ui/lab/Rating';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    marginBottom: "5px",
    width: "210px",
    height: "334px",
    boxShadow: " 0 2px 2px 0 rgba(0,0,0,0.2)",
    position: "relative",
    display: "inline-block",
    verticalAlign: "top",
    padding: "15px",
    "&:hover": {
      "& $discount": {
        opacity: "1",
        transform: "scale(1.2)",
      },
      "& button": {
        height: "50px",
      },
    },
  },
  img: {
    margin: "13px auto",
    height: "177px",
  },
  discount: {
    position: "absolute",
    opacity: "0",
    right: "120px",
    bottom: "290px",
    height: "30px",
    width: "80px",
    borderRadius: "4px",
    display: "block",
    backgroundColor: "#f30240",
    color: "#fff",
    textAlign: "center",
    fontFamily: "OpenSans,Arial,Helvetica,sans-serif",
    paddingTop: "5px",
  },
  wishlist: {
    position: "absolute",
    left: "180px",
    bottom: "270px",
    height: "50px",
  },
  strong: {
    // fontSize:'20px',
    // fontWeight: '400',
    // color: '#fff',
    // textAlign: 'center',
  },
  title: {
   
    textDecoration: "none",
    padding: "0",
    whiteSpace: "nowrap",
    margin: "0",
    lineHeight: "20px",
    overflow: "hidden",
    '& a':{
      color: 'rgb(64, 69, 83)',
      fontSize:'12px'
    }
  },
  price: {
    display: "flex",
    '& strong':{
      marginLeft: '4px',
      fontWeight:'bold',
      fontSize:'18px'
    },
    '& span':{
      fontWeight:'bold',
      fontSize:'18px'
    }
  },
  addtocart: {
    width: "100%",
    backgroundColor: "black",
    color: "white",
    height: "0px",
    position: "absolute",
    bottom: "0",
    left: "3px",
    transition: " all 0.2s linear",
    fontWeight: "bold",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "18px",
  },
  price_previos:{
    width:'100%',
    height:'30px',
    
    display:'flex',
    '& strong':{
      color:'green',
      lineHeight:'20px'
    },
    '& h1':{
    color:'grey',
    fontSize:'12px',
    lineHeight:'20px',
    textDecoration:'line-through'
    }

  },
  rating:{
    width:'100%',
    height:'20px',
    
    display:'flex',
    justifyContent:'space-between'
  }
}));
const Productgearbest = ({ Imageproduct }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className={classes.root}>
      <div className={classes.img}>
        <a
          href="https://fr.gearbest.com/flash-sale.html?top-goods=476308201-1433363"
          title="Monclique X7 Tête de Brosse à Dents Remplaçable de Type de Nettoyage 5 Pièces"
          tabindex="0"
        >
          <img
            class="js-lazyload lazy-loaded"
            src={Imageproduct}
            alt="Monclique X7 Tête de Brosse à Dents Remplaçable de Type de Nettoyage 5 Pièces"
            data-was-processed="true"
          />
        </a>
      </div>
      <div className={classes.wishlist}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedH"
            />
          }
        />
      </div>
      <div className={classes.discount}>
        <strong className={classes.strong}>28</strong>
        <em>%OFF</em>
      </div>
      <div className={classes.title}>
        <a
          class="gbItem_titleTrack"
          href="https://fr.gearbest.com/flash-sale.html?top-goods=476308201-1433363"
          title="Monclique X7 Tête de Brosse à Dents Remplaçable de Type de Nettoyage 5 Pièces"
          tabindex="0"
        >
          Monclique X7 Tête de Brosse à Dents Remplaçable de Type de Nettoyage 5
          Pièces
        </a>
      </div>
      <div className={classes.price}>
      <span  >SAR</span>
      <strong>6099.00</strong>
       
      </div>
     <div className={classes.price_previos}>
<h1>SAR 6000</h1>
<strong>34%</strong>
     </div>
     <div className={classes.rating}>
 
     <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" alt="noon-express" width="80px" height="20px"></img>
     <Rating name="size-small" defaultValue={2} size="small" />
     </div>
      <button className={classes.addtocart}>Add to cart</button>
    </div>
  );
};

export default Productgearbest;

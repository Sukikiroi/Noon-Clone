import React,{useState,useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import Productincheckout from '../ordersummary/Productincheckout'
import { CartContext } from "../Cart Shopping/contexts/CartContext";
 


const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    borderBottomLeftRadius:'30px',
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "300px",
    width: "250px",
  },
  itemsdetails:{
    width: "250px",
    position:'relative' ,
    right:'16px',
    // wla Left

  borderBottomLeftRadius:'30px',
  }
}));

export default function CenteredGrid() {

  const {
    cartItems,CountItem,
    itemCount,
   wished,wishlist,total
  } = useContext(CartContext);

  const [Icon, setIcon] = useState(true);
  const changeicon =()=>{
    setIcon(!Icon)
  }
  const classes = useStyles();

  return (
  
      <Paper className={classes.paper} elevation={0}>
        <Grid container>
         
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
              <br></br>
                <h2>Subtotal({itemCount} items)</h2>
              </Grid>
              <Grid item xs={6}>
              <br></br>
                <h2> ${total}</h2>
              </Grid>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <br></br>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <h2>Delivery </h2>
              </Grid>
              <Grid item xs={6}>
                <h2> Free</h2>
              </Grid>
            </Grid>
          </Grid>

          <br></br>
          <br></br>
          <br></br>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <h2>Taxes & fees </h2>
              </Grid>
              <Grid item xs={6}>
                <h2> — —</h2>
              </Grid>
            </Grid>
            (calculated once address is confirmed)
          </Grid>
       
          <Grid item xs={12}>
          <br></br>
          <br></br>
          <br></br>

          <Accordion className={classes.itemsdetails}>
        <AccordionSummary onClick={changeicon}
          expandIcon= {(Icon && <AddIcon />) || <MinimizeIcon/>} 
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>See Items Details </Typography>
        </AccordionSummary>
        <AccordionDetails>
        {({itemCount}!=0 &&  <img src='https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png' alt="Logo" />)
        
        
        ||  <Typography>
          {cartItems.map((product) => (
                
                <Productincheckout
                  key={product.id}
                  product={product}
                  productpictur={product.imgSrc}
                  producttitle={product.titleProduct}
                  productdescription={product.titleProduct}
                  price={product.price}
                  discount={product.discount}
                  is_in_wishlist={product.is_in_wishlist}
                />
                 
              ))}
          </Typography>}
         
        </AccordionDetails>
      </Accordion>
      
          </Grid>
       
       
        </Grid>
      </Paper>
   
  );
}

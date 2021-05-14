import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
 
import Badge from "@material-ui/core/Badge";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { FcSearch, FcManager, FcBusinesswoman } from "react-icons/fc";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },

  appbar: {
    backgroundColor: "white",
    zIndex: "1",
  },
  search: {
    color: "#DCDCDC",
    position: "relative",
    left: "200px",
  },
  man: {
    height: "40px",
    borderRadius: "10px",
    width: "120px",
    backgroundColor: "white",
    color: "black",
    position: "relative",
    left: "20px",
    textTransform:'lowercase',
    
  },
  man2: {
    height: "40px",
    borderRadius: "10px",
    width: "120px",
    backgroundColor: "#FFB6C1",
    color: "white",
    position: "relative",
    left: "20px",
    textTransform:'lowercase',
    '&:hover': {
        background: "#FFB6C1",
     },
  },
  women: {
    height: "40px",
    borderRadius: "10px",
    width: "120px",
    backgroundColor: "#FFB6C1",
    color: "black",
    position: "relative",
    left: "40px",
    textTransform:'lowercase',
    '&:hover': {
        background: "#FFB6C1",
     },
  },
  women2: {
    height: "40px",
    borderRadius: "10px",
    width: "120px",
    backgroundColor: "white",
    color: "black",
    position: "relative",
    left: "40px",
    textTransform:'lowercase',
   
  },
  searchicon: {
    fontSize: "35px",
    position: "relative",
    left: "200px",
  },
  logo:{
      position:'relative',
      bottom:'100px'
  },
  shipingbutton: {
    disableRipple: true
  }
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function DenseAppBar() {
  const classes = useStyles();
  const [man, setman] = useState(false);
  const [women, setwomen] = useState(false);

  const handleman=()=>{
    setman(!man)
    setwomen(!women)
}
const handlewomen=()=>{
    setwomen(!women)
    setman(!man)

}



  return (
    <div className={classes.root}>
      <br></br>
      <Grid container>
        <Grid item lg={3}>
      

        </Grid>
        <Grid item lg={9}>
          <Grid container>
            <Grid item lg={1}>
            {(man 
            
            
            &&
            
            
            <Button onClick= {handleman}
                color="primary"
                className={classes.man}
                startIcon={<FcManager />}
              >
                Man
              </Button>

               ||  
              
              <Button onClick= {handleman}
                color="primary"
                className={classes.man2}
                startIcon={<FcManager />}
              >
                Man
              </Button>
              
              )
              
              }
             
            </Grid>
            <Grid item lg={1}>
             


              {(women 
            
            
            &&
            
            
            <Button  onClick= {handlewomen}
                color="primary"
                className={classes.women}
                startIcon={<FcBusinesswoman />}
              >
                Women
              </Button>

               ||  
              
               <Button  onClick= {handlewomen}
               color="primary"
               className={classes.women2}
               startIcon={<FcBusinesswoman />}
             >
               Women
             </Button>
              
              )
              
              }













            </Grid>
            <Grid item lg={8} xs={12}>
              <SearchIcon className={classes.searchicon} />

              <InputBase
                className={classes.search}
                id="input-with-icon-adornment"
                defaultValue="Search for Items"
              />
            </Grid>


            <Grid item lg={1} xs={12}>
              <Button   className={classes.shipingbutton}  >
                <StyledBadge    badgeContent={4} color="secondary">
                  <ShoppingCartIcon  />
                </StyledBadge>
              </Button>
            </Grid>
            <Grid item lg={1}>
              <Avatar
                alt="Cindy Baker"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAyQp54rDPMakrfCNaRV6pVDoeHHCbMqyCw&usqp=CAU"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

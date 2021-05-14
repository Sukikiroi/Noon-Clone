import { fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "black",
  },

  root: {
    flexGrow: 1,
  },
  menuButton: {
    [theme.breakpoints.up("sm", "md", "lg")]: {
      visibility: "hidden",
    },

    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "yellow",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "relative",
      right: "40px",
    },
  },

  search: {
    position: "relative",
    borderRadius: "25px",
    borderColor:'gold',
    borderStyle:'solid',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
   
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
    
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      left: "50px",
      width:'400px'
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  buttonsmall: {
    width: "12ch",
    color: "transparent",
    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  shoppcart: {
    color: "gold",
    position: "relative",
    right: "40px",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      right: "280px",
    },
    "&:active": {
outline:'none',
borderColor:'black',

    },
  },

  darkmde: {
    position: "relative",
    right: "70px",
    width: "10px",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      right: "190px",
    },
  },
  drawerPaper: {
    width: "600px",
  },
  checkoutbutton:{
width:'550px',
height:'50px',
borderRadius:'10px',
backgroundColor:'black',
position:'relative',
left:'15px',
outline:'none',
"&:hover": {
  backgroundColor: 'gold',
  outline:'none',
  color:'black'
}

  },

  picturproduct:{
height:'100px',
width:'100px',
// backgroundImage :`url("data:image/jpeg;base64,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")`,
backgroundRepeat:"no-repeat"
  },

  deleteicon:{
color:'gold'
  },

  product:{
    height:'470px',
    

  },
  total:{

    fontWeight:"bold",
  },


  navbar1:{
    textAlign: 'center',
    width:"900px",
position:'relative',

    [theme.breakpoints.only('lg')]: {
      width:"550px",
      position:'relative',
      right:'45px',
  
    },

  [theme.breakpoints.down('sm')]: {
      width:"100%",
      position:'relative',
      right:'45px',
  
    },
 
    [theme.breakpoints.between('sm','md')]: {
      width:"850px",
      position:'relative',
      right:'45px',
  
    },
   
},
navbar2:{

   textAlign: 'center',
   position:'relative',
   top:'10px',
   [theme.breakpoints.down('xs')]: {
      position:'relative',
      left:'90px'
    },
}
}));

export default useStyles;

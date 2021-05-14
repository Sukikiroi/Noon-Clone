import React ,{useState}from 'react'
import Box from '@material-ui/core/Box';
import Searchinput from './Searchfiled'
import Shoppingcarticon2 from "./shopingcarticon.png";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import { withStyles,makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { FcSearch, FcManager, FcBusinesswoman } from "react-icons/fc";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  searchpaper:{
    width:'200px',
    position:'relative',
    right:'40px',
    top:'10px'
  }
  
  
  ,
  dropdown:{
width:'200px',
borderRadius:'10px',
height:'300px'
  },
  logo:{
   
    position:'relative',
    top:'150px'
  },
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
    height: "45px",
    zIndex: "3",
    cursor: "pointer",
    fontSize: "20px",
    borderRadius: "10px",
    width: "120px",
    backgroundColor: "white",
    color: "black",
    position: "relative",
    left: "20px",
    textTransform: "lowercase",
  },
  man2: {
    height: "45px",
    borderRadius: "10px",
    width: "120px",
    fontSize: "20px",
    backgroundColor: "#FFB6C1",
    color: "white",
    position: "relative",
    left: "20px",
    textTransform: "lowercase",
    "&:hover": {
      background: "#FFB6C1",
    },
  },
  women: {
    height: "45px",
    borderRadius: "10px",
    width: "120px",
    fontSize: "20px",
    backgroundColor: "#FFB6C1",
    color: "white",
    position: "relative",
    left: "40px",
    textTransform: "lowercase",
    "&:hover": {
      background: "#FFB6C1",
    },
  },
  women2: {
    height: "45px",
    borderRadius: "10px",
    width: "120px",
    fontSize: "20px",
    backgroundColor: "white",
    color: "black",
    position: "relative",
    left: "40px",
    textTransform: "lowercase",
  },
  searchicon: {
    color:'gold',
    fontSize: "45px",
    position: "relative",
 left:'50px'
    
  },
  logo: {
    position: "relative",
    bottom: "100px",
  },
  shipingbutton: {
    disableRipple: true,
  },
  search: {
    color: "Gainsboro",
  },
  categorybutton: {
    textTransform: "unset",
    color: "black",
    fontSize: "20px",
  },
  categorydisplay:{
    columnCount: "6",
    columngap: "4",
   
  
  }
}));



const Navbarbox = () => {
  const classes = useStyles();
  const [showcat, setshowcat] = React.useState(false);
  const [man, setman] = useState(false);
  const [women, setwomen] = useState(false);
  const  showcategory=()=>{
    setshowcat(!showcat)
  }
    const StyledBadge = withStyles((theme) => ({
        badge: {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: "0 4px",
        },
      }))(Badge);
      const theme = createMuiTheme({
        props: {
          // Name of the component
          MuiButtonBase: {
            // The properties to apply
            disableRipple: true, // No more ripple, on the whole application!
          },
        },
      });
      const handleman = () => {
        setman(!man);
        setwomen(!women);
      };
      const handlewomen = () => {
        setwomen(!women);
        setman(!man);
      };
    return (
      <MuiThemeProvider theme={theme}>
        <div>
             <Box
        display="flex"
        flexWrap="nowrap"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{ width: '100%',position:'relative',bottom:'30px' }}
      >
         <Box p={1}  >
       
       </Box>
       <Box p={15}  >
       
       </Box>
       <Box p={1}  >
       
       </Box>
       <Box p={1}  >
       
       </Box>
        <Box p={1}  >
        {(man && (
              <Button
                onClick={handleman}
                color="primary"
                className={classes.man}
                startIcon={<FcManager />}
              >
                Man
              </Button>
            )) || (
              <Button
                onClick={handleman}
                color="primary"
                className={classes.man2}
                startIcon={<FcManager />}
              >
                Man
              </Button>
            )}

           
        </Box>
        <Box p={1}  >
        {(women && (
              <Button
                onClick={handlewomen}
                color="primary"
                className={classes.women}
                startIcon={<FcBusinesswoman />}
              >
                Women
              </Button>
            )) || (
              <Button
                onClick={handlewomen}
                color="primary"
                className={classes.women2}
                startIcon={<FcBusinesswoman />}
              >
                Women
              </Button>
            )}
        </Box>
        <Box p={1}  >
       
       </Box>
       <Box p={1}  >
       
       </Box>
       <Box p={1}  >
       
       </Box>
        <Box p={1}  >
        <Button 
                onClick={showcategory}
                  className={classes.categorybutton}
                  color="primary"
                  endIcon=    {(showcat &&    <ArrowDropUpIcon />      ) ||      <ArrowDropDownIcon />}
               
                >
                  Category
                </Button>
        </Box>
        <Box p={1}  >
       
        </Box>
        <Box p={1}  >
         <Searchinput/>
        </Box>
        <Box p={1}  >
        <Button  >
                    <StyledBadge badgeContent={16} color="secondary">
                      <img src={Shoppingcarticon2} height="20px" width="40px" />
                    </StyledBadge>
                    </Button>
        </Box>
        <Box p={1}  >
        <Button color="primary"         onClick={showcategory} endIcon=    {(showcat &&    <ArrowDropUpIcon />      ) ||      <ArrowDropDownIcon />}>
        <Avatar
                    alt="Cindy Baker"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAyQp54rDPMakrfCNaRV6pVDoeHHCbMqyCw&usqp=CAU"
                  />
          
          Developer
          
          </Button>
        
        </Box>
       
      </Box>
      
        </div>
        </MuiThemeProvider>
    )
}

export default Navbarbox

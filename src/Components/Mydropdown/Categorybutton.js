import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
 
  categorybutton: {
    borderRadius: "50%",
    height: "80px",
    width: "80px",
    alignItems: "center",
    backgroundImage: `url('https://www.retailmenot.com/tng/static/images/icons/beauty_v3.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    '&:hover': {
   border:'solid'
   },
  },
  categorytitle:{
      position:'relative',
      left:'20px',
       fontWeight:'bold'
  }
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
 


<Box style={{position:'relative', left:'350px',bottom:'100px'}}
display="flex"
flexWrap="nowrap"
p={1}
m={1}
bgcolor="background.paper"
css={{ maxWidth: 300 }}
>
<Box p={1}  >
<Button style={{ backgroundImage: `url('https://www.retailmenot.com/tng/static/images/icons/food_v3.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",}}
            className={classes.categorybutton}
            variant="outlined"
            color="primary"
          ></Button>
           <h1 style={{fontSize:'20px',position:'relative',left:'15px',top:'20px'}}>New in</h1>
</Box>
<Box p={1}  >
<Button   style={{ backgroundImage: `url('https://www.retailmenot.com/tng/static/images/icons/food_v3.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",}}
            className={classes.categorybutton}
            variant="outlined"
            color="primary"
          ></Button>
           <h1 style={{fontSize:'20px',position:'relative',left:'15px',top:'20px'}}>New in</h1>
</Box>
<Box p={1}  >
<Button   style={{ backgroundImage: `url('https://www.retailmenot.com/tng/static/images/icons/food_v3.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",}}
            className={classes.categorybutton}
            variant="outlined"
            color="primary"
          ></Button>
           <h1 style={{fontSize:'20px',position:'relative',left:'15px',top:'20px'}}>Travel</h1>
</Box>
<Box p={1}  >
    
<Button   style={{ backgroundImage: `url('https://www.retailmenot.com/tng/static/images/icons/shopping_v1.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",}}
            className={classes.categorybutton}
            variant="outlined"
            color="primary"
          ></Button>
          <h1 style={{fontSize:'20px',position:'relative',left:'15px',top:'20px'}}>Buying  </h1>
</Box>
 
<Box p={1}  >
<Button   style={{ backgroundImage: `url('https://www.retailmenot.com/tng/static/images/icons/travel_v3.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",}}
            className={classes.categorybutton}
            variant="outlined"
            color="primary"
          ></Button>
           <h1 style={{fontSize:'20px',position:'relative',left:'15px',top:'20px'}}>Clothing</h1>
  </Box>
  <Box p={1}  >
  <Button   style={{ backgroundImage: `url('https://www.retailmenot.com/tng/static/images/icons/clothing_v3.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",}}
            className={classes.categorybutton}
            variant="outlined"
            color="primary"
          ></Button>
           <h1 style={{fontSize:'20px',position:'relative',left:'15px',top:'20px'}}>Electronics</h1>
</Box>
<Box p={1}  >
<Button   style={{ backgroundImage: `url('https://www.retailmenot.com/tng/static/images/icons/more.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",}}
            className={classes.categorybutton}
            variant="outlined"
            color="primary"
          ></Button>
           <h1 style={{fontSize:'20px',position:'relative',left:'15px',top:'20px'}}>More</h1>
</Box>
</Box>
 
  );
}

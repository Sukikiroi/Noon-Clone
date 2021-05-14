import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkoutleft from './Checkoutleft'
import Checkoutright from './Checkoutright'
import Checkoutpic from './checkoutpic.svg'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  left:{
    textAlign: 'center',
  },
  right:{
    textAlign: 'center',
  },
  piccheckout:{
    height:'240px',
    width:'140px',
    position:'relative',
    right:'200px',
    [theme.breakpoints.down('lg')]: {
      position:'relative',
      left:'500px',

    },
  }
}));

export default function Checkoutcontainer() {
  const classes = useStyles();
  const [data, setdata] = useState(0);


 const  handleCallback = (childData) =>{
    setdata(childData)
    console.log(childData)
}
  return (
    <div className={classes.root}>
      <Grid container  >
       
        <Grid item xs={12} sm={6}   className={classes.left}>
       <Checkoutleft parentCallback={handleCallback} />
        </Grid>
       
        <Grid item xs={12} sm={6}   className={classes.right}>
        <Checkoutright/>
        </Grid>
       
      </Grid>
    </div>
  );
}

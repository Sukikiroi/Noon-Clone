import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import MenuSide from './MenuSide'
import InfoSide from './InfoSide'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [Data, setData] = useState(1);

 


const handleCallback =(childData)=>{
    setData(childData);
    console.log(childData)
}
  return  (
    <div className={classes.root}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      <Grid container spacing={3}>


      <Hidden mdDown>
        <Grid item  lg={1} sm={0}>
          <Paper className={classes.paper} elevation={0}>
    <  MenuSide parentCallback = {  handleCallback}/>
          
              
              </Paper>
        </Grid>
        </Hidden>


        <Grid item lg={11} sm={12} xs={12}>
          <Paper className={classes.paper} elevation={0}>
              
          <InfoSide Menuvalue={Data}/>
              
              </Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}

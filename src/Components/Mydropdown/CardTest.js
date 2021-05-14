import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ImageOverlay } from 'react-image-overlay-effect'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },


  paper1:{
      width:'300px',
      height:'300px',
      position:'relative',
      left:'500px',
      backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFWVCUkvGnkpXMG5RDhSwOMbRlhjFuK2ATw&usqp=CAU ')`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      borderRadius:'10px',
    
  },

  glass:{
    width:'300px',
    height:'100px',
    boxShadow:'inset 0 0 2000px rgba(255, 255, 255, .5)',
    borderRadius:'10px',
    backgroundColor:'rgba(255, 255, 255, .15)',
    position:'relative',
    top:'200px',
    filter: 'blur(10px)',
    

  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Paper  className={classes.paper1} elevation={3}>
 

      </Paper>
    </div>
  );
}

import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import PageviewIcon from '@material-ui/icons/Pageview';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
const useStyles = makeStyles((theme) => ({
    searchicon:{
        color:'gold',
        fontSize:'35px'
    }
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [defvalue, setdefvalue] = useState(true);
const changedefaultvalue=(e)=>{
    setdefvalue(!defvalue)
    console.log(defvalue)
    e.target.defaultValue=defvalue;
}



  return (
 <div>

<TextField  
    id="outlined-secondary"
    label="Outlined secondary"
    variant="outlined"
    color="secondary"
     
      InputProps={{
        startAdornment: <InputAdornment position="start">  <PageviewIcon  className={classes.searchicon}  /></InputAdornment>,
      }}
  />
   

    {/* <Input  
    id="input-with-icon-adornment"
    startAdornment={
      <InputAdornment position="end">
        <PageviewIcon  className={classes.searchicon}  />
      </InputAdornment>
    }
  /> */}

</div>
      
  
  );
}

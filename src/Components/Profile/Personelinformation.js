import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
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

export default function CenteredGrid() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div className={classes.root}>
      <Grid container>
      
        <Grid item xs={3}>
          <Paper className={classes.paper}>Name:</Paper>
        </Grid>
        <Grid item xs={9}>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Gender:</Paper>
        </Grid>
        <Grid item xs={9}>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="Male"
          control={<Radio color="primary" />}
          label="Male"
          labelPlacement="end"
        /> 
        <FormControlLabel
          value="Female"
          control={<Radio color="primary" />}
          label="Female"
          labelPlacement="end"
        /> 
        
        
         </RadioGroup>
        
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Mobile phone</Paper>
        </Grid>
        <Grid item xs={9}>
          <TextField id="outlined-basic" label="Mobile phone" variant="outlined" />
        
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={0}>Date of Birth:</Paper>
        </Grid>
        <Grid item xs={9}>
       
       
        <FormControl variant="outlined" className={classes.formControl}>
        <Grid container>

        <Grid item xs={4}>


   
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        </Grid>

        <Grid item xs={4}>



<Select
  native
  value={state.age}
  onChange={handleChange}
  label="Age"
  inputProps={{
    name: 'age',
    id: 'outlined-age-native-simple',
  }}
>
  <option aria-label="None" value="" />
  <option value={10}>Ten</option>
  <option value={20}>Twenty</option>
  <option value={30}>Thirty</option>
</Select>
</Grid>
<Grid item xs={4}>



<Select
  native
  value={state.age}
  onChange={handleChange}
  label="Age"
  inputProps={{
    name: 'age',
    id: 'outlined-age-native-simple',
  }}
>
  <option aria-label="None" value="" />
  <option value={10}>Ten</option>
  <option value={20}>Twenty</option>
  <option value={30}>Thirty</option>
</Select>
</Grid>


        </Grid>
      </FormControl>
     
     
        
        </Grid>
  
     
        <Grid item xs={3}>
          
        </Grid>
        <Grid item xs={9}>
        <Button variant="contained" color="primary">
  Save
</Button>
        
        </Grid>
     
     
      </Grid>
    </div>
  );
}

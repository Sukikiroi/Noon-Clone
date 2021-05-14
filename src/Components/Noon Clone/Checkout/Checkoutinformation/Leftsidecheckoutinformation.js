 import React from 'react'
 import { makeStyles } from '@material-ui/core/styles';
 import TextField from '@material-ui/core/TextField';
 import Checkbox from '@material-ui/core/Checkbox';
 import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
 const useStyles = makeStyles((theme) => ({
    addres:{
width:'100%',
height:'50px',
 
'& h2':{
    marginLeft: '15px',
    marginTop:'15px',
fontSize: '16px',
fontWeight: 'bold',
color:'#404553'
}
    },
    addres_input:{
        width:'100%',
        height:'100px',
    
        paddingLeft:'15px',
    },
    addres_building:{
        width:'100%',
        height:'50px',
  marginBottom:'60px',
        paddingLeft:'15px',
        '& TextField':{
            width:'100%'
        }
    },
    addres_label:{
        width:'100%',
        height:'100px',
       
        display:'flex'
    },
    addres_label_title:{
        width:'50%',
        height:'100%',
    
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        '& h2':{
            marginLeft: '15px',
            whiteSpace:'nowrap',
        fontSize: '16px',
        fontWeight: 'bold',
        color:'#404553'
        },
      '& h3':{
        marginLeft: '15px',
        whiteSpace:'nowrap',
    fontSize: '10px',
    fontWeight: 'bold',
    color:'#404553'
      }
    },
    addres_label_Home:{
        width:'25%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        '& FormControlLabel':{
          textTransform:'capitalize',
          fontSize:"10px"
        }
    },
    addres_label_Work:{
        width:'25%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    
}));
 const Leftsidecheckoutinformation = () => {
    const [state, setState] = React.useState({
        checkedA: true,
        Home: true,
        Work: true,
        checkedG: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    const classes = useStyles();
     return (
         <div>
     


            <div className={classes.addres}>
                <h2>Location Information</h2>
            </div>
            <div className={classes.addres_input}>

            <TextField id="standard-basic" label="Address" variant="outlined"  style={{width:'90%'}}/>
            </div>
            <div className={classes.addres_building}>
            <TextField id="standard-basic" label="Appartemnt / Flat  " variant="outlined"  style={{width:'90%'}} />
            </div>
            <div className={classes.addres_label}>
<div className={classes.addres_label_title}>
<h2>Address Label</h2>
<h3>(Optional) </h3>
</div>
<div className={classes.addres_label_Home}>
<FormControlLabel  
        control={
          <Checkbox 
            checked={state.Home}
            onChange={handleChange}
            name="Home"
            color="primary"
          />
        }
        label="Home"
      />
</div>
<div className={classes.addres_label_Work}>
<FormControlLabel
        control={
          <Checkbox
            checked={state.Work}
            onChange={handleChange}
            name="Work"
            color="primary"
          />
        }
        label="Work"
      />
</div>

            </div>
         </div>
     )
 }
 
 export default Leftsidecheckoutinformation
 
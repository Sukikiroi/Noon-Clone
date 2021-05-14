import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    personnelinfo:{
        width:'100%',
        height:'50px',
         
        '& h2':{
            marginLeft: '15px',
            marginTop:'15px',
        fontSize: '16px',
        fontWeight: 'bold',
        color:'#404553'
        }},

        mobilenumber:{
            width:'100%',
            height:'50px',
            display:'flex',
            justifyContent:'center',
            marginBottom:'30px'
        },
        firstname:{
            width:'100%',
            height:'50px',
            display:'flex',
          justifyContent:'center',
            marginBottom:'30px'
        },
        lastname:{
            width:'100%',
            height:'50px',
            display:'flex',
            justifyContent:'center',
            marginBottom:'30px'
        },
        saveinfo:{
            width:'100%',
            height:'50px',
          display:'flex',
          justifyContent:'center',
          
            '& Button':{
            width:'100%',
            backgroundColor:'rgb(56, 102, 223)',
            color:'rgb(255, 255, 255)',
            textTransform:'uppercase'
            }
        }
}));
const Rightsidecheckoutinformation = () => {
    const classes = useStyles();
    return (
        <div>
        
        <div className={classes.personnelinfo}>
                <h2>Personal Information</h2>
            </div>
            <div className={classes.mobilenumber}>
            <TextField id="outlined-basic" label="Mobile Number" style={{width:'90%'}} variant="outlined" />
            </div>
            <div className={classes.firstname}>
            <TextField id="outlined-basic" label="First Name" style={{width:'90%'}} variant="outlined" />
            </div>
            <div className={classes.lastname}>
            <TextField id="outlined-basic" label="Last Name"  style={{width:'90%',color:'red'}}variant="outlined" />
            </div>
            <div className={classes.saveinfo}>
                <Button>Save Information</Button>
            </div>
        </div>
    )
}

export default Rightsidecheckoutinformation

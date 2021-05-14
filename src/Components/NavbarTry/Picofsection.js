 import React from 'react'
 import { makeStyles } from '@material-ui/core/styles';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { FaBeer  } from 'react-icons/fa';
 import counter from './counter.PNG'; 
 const useStyles = makeStyles((theme) => ({
     root:{
        display: 'block',
        width: '200px',
        height: '300px',
        background: "linear-gradient(139deg,#fc644a,#f33258);",
        paddingLeft:'20px',
        marginLeft:'20px',
     },
     title:{
        margin: 'auto',
        width: '180px',
        lineHeight: '1',
        fontSize: '22px',
        color: '#fff',
        fontWeight: '700',
     },
     icon:{

     }
}));
   const Picofsection = () => {
    const classes = useStyles();
     return (
         <div    className={classes.root}>
              <div className={classes.icon}> 
       <br></br>
              </div>
           <div className={classes.title}>VENT FLASH</div>
           <br></br>
           <div> 
           <img src={counter}  alt="Logo" />
           </div>
           <div>
           <img src="https://uidesign.gbtcdn.com/GB/image/2019/20190222_7858/ttt.png?impolicy=hight " alt="" />

           </div>
         </div>
     )
 }
 export default Picofsection
import React from 'react'
import Productgearbest3 from './Productgearbest3'
import { makeStyles } from "@material-ui/core/styles";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    title:{
        width:'100%',
        margin:'auto',
        padding:'0px 20px 0px 20px',
        display:'flex',
        justifyContent:'space-between',
        '& Button':{
            textTransform:'capitalize',
            border:'2px solid rgb(64, 69, 83)'
        },
        '& h1':{
            fontSize:'24px',
            fontWeight:'bold',
        }
       
    },
    root:{
        width:'100%',
        margin:'auto',
        marginBottom:'50px',
        backgroundColor:'Linen'
      
    },
    products:{
        width:'95%',
        margin:'auto',
    
        display:'flex'  ,
        justifyContent:'center',
        alignItems:'center',
    },
    title_container:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        '& img':{
            height:'40px',
            lineheight:'80px',
            marginRight:'10px'
        }
    }
}));
const Sectionfireship = ({Title,children,Section_pic}) => {
    const classes = useStyles();
    return (
        <div  className={classes.root}>
            <div  className={classes.title}>
            <div className={classes.title_container}>
            <img src= {Section_pic} alt="Logo" />
                <h1>{Title}</h1>
            </div>
            <div>
            <Button>View All</Button>
             </div>
            </div>
            <div className={classes.products}>
            {children}
            </div> 
        </div>
    )
}

export default Sectionfireship

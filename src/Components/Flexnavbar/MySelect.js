import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    select: {
       width:'300px',
       height:'40px',
       borderRadius:'5px',
       border:'2px solid grey',
       outline:'none',
       boxShadow:'1px 1px 1px #888888',
       
    },
    fullname:{
        width:'300px',
        boxShadow:'1px 1px 1px #888888',
        height:'40px',
        borderRadius:'5px',
        border:'2px solid grey',
        outline:'none',
        marginLeft:'30px',
        fontSize:'20px',
        backgroundColor:'white',
    }
  }));
const Myselect = () => {
    const classes = useStyles();
    return (
        <div     className={classes.root} >
            <select placeholder='Country'  className={classes.select}>
            <option  selected value="Coutry ">Coutry </option>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>

<input type='text'   required="required" placeholder='Full Name'   className={classes.fullname}/>
<input type='tel' placeholder='Phone'  defaultValue='+213'  className={classes.fullname}/>
        </div>
    )
}

export default Myselect

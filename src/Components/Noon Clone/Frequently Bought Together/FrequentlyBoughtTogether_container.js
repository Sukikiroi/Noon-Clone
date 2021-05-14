import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Frequentlyitem from './FrequentlyItem';
const useStyles = makeStyles((theme) => ({
  
    root:{
        width:'100%',
        height:'300px',
     
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        marginTop:'50px'
    },
    root2:{
        width:'70%',
        height:'300px',
        border:'1px solid rgb(235, 236, 240)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    plus:{
        height:'70%',
        width:'20px',
     
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:'40px'
    },
    buyit:{
        width:'80%',
        height:'40px',
      paddingRight:'100px',
      marginTop:'30px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        '& button':{
            border:'1px solid rgb(43, 76, 215);',
            width:'40%',
            height:'120%',
            borderRadius:'4px',
            color:'#007aff'
        }
    }
}));
const FrequentlyboughttogetherContainer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root0}>
        <div className={classes.root}>
         <div className={classes.root2}>
         <Frequentlyitem  shipping_company_pictur={'https://z.nooncdn.com/s/app/com/noon/images/marketplace-en.png'}  Frequently_pictur={'https://z.nooncdn.com/products/tr:n-t_80/v1605898680/N19708704A_1.jpg'}/>
         <div className={classes.plus}>
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus"><g clip-path="url(#clip0)"><path d="M18.9999 9H11.0001V0.999939C11.0001 0.448059 10.552 0 9.99994 0C9.44806 0 9 0.448059 9 0.999939V9H0.999939C0.448059 9 0 9.44806 0 9.99994C0 10.552 0.448059 11.0001 0.999939 11.0001H9V18.9999C9 19.552 9.44806 20.0001 9.99994 20.0001C10.552 20.0001 11.0001 19.552 11.0001 18.9999V11.0001H18.9999C19.552 11.0001 20.0001 10.552 20.0001 9.99994C20.0001 9.44806 19.552 9 18.9999 9V9Z" fill="black"></path></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
         </div>
        
         <Frequentlyitem  shipping_company_pictur={'https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg'} Frequently_pictur={'https://z.nooncdn.com/products/tr:n-t_80/v1534087557/N15999955A_1.jpg'}/>
         <div className={classes.plus}>
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus"><g clip-path="url(#clip0)"><path d="M18.9999 9H11.0001V0.999939C11.0001 0.448059 10.552 0 9.99994 0C9.44806 0 9 0.448059 9 0.999939V9H0.999939C0.448059 9 0 9.44806 0 9.99994C0 10.552 0.448059 11.0001 0.999939 11.0001H9V18.9999C9 19.552 9.44806 20.0001 9.99994 20.0001C10.552 20.0001 11.0001 19.552 11.0001 18.9999V11.0001H18.9999C19.552 11.0001 20.0001 10.552 20.0001 9.99994C20.0001 9.44806 19.552 9 18.9999 9V9Z" fill="black"></path></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
         </div>
        
         <Frequentlyitem     shipping_company_pictur={'https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg'}  Frequently_pictur={'https://z.nooncdn.com/products/tr:n-t_80/v1555591453/N23883940A_1.jpg'}/>
         <div className={classes.plus}>
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus"><g clip-path="url(#clip0)"><path d="M18.9999 9H11.0001V0.999939C11.0001 0.448059 10.552 0 9.99994 0C9.44806 0 9 0.448059 9 0.999939V9H0.999939C0.448059 9 0 9.44806 0 9.99994C0 10.552 0.448059 11.0001 0.999939 11.0001H9V18.9999C9 19.552 9.44806 20.0001 9.99994 20.0001C10.552 20.0001 11.0001 19.552 11.0001 18.9999V11.0001H18.9999C19.552 11.0001 20.0001 10.552 20.0001 9.99994C20.0001 9.44806 19.552 9 18.9999 9V9Z" fill="black"></path></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
         </div>
        
         <Frequentlyitem   shipping_company_pictur={'https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg'} Frequently_pictur={'https://z.nooncdn.com/products/tr:n-t_80/v1528789171/N15067290A_1.jpg'}/>
       

        </div>
        <div className={classes.buyit}>
            <button>Buy 4 item for 700 SAR</button>
        </div>
        </div>
        </div>
    )
}

export default FrequentlyboughttogetherContainer

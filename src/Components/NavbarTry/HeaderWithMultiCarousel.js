import React from 'react'
import './Multicarousel.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import underheaderpicture from './underheaderpicture.PNG'
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const useStyles = makeStyles((theme) => ({
    headerpicture:{
        width:'100%',
        margin:'auto'
    }
  ,
  underheaderpicture:{
    width:'100%',
    margin:'auto',
    marginTop:'50px'
  }
  }));
const Headerwithmulticarousel = () => {
    const classes = useStyles();
    return (
        <div >
            <div className={classes.headerpicture} >
            <img src= 'https://k.nooncdn.com/cms/pages/20210512/a4f82db54b1b9aa4efa122b4debbf86b/en_toggle.png' alt="Logo" />
            </div>
               <Carousel
            customTransition="all .2"
            autoPlay={true}
            autoPlaySpeed={1000}
            responsive={responsive}  
          >
<div>
<img src= 'https://k.nooncdn.com/cms/pages/20201020/79a2e38e27583a1a5db92d21097f3b8e/en_slider-emaar-uae-emaar.png' alt="Logo" />
     
</div>
<div>
<img src= ' https://k.nooncdn.com/cms/pages/20210513/2496a55ac6c7079f474a4aab7b1d54e9/en_slider-01.gif' alt="Logo" />
     
</div>
<div>
<img src= ' https://k.nooncdn.com/cms/pages/20210510/a4d9bf01d4c9a3f632a8a157654532d2/en_slider-01-ksa.png' alt="Logo" />
     
</div>
         </Carousel> 
         <div className={classes.underheaderpicture} >
            <img src= {underheaderpicture} alt="Logo" />
            </div>
        </div>
    )
}

export default Headerwithmulticarousel

import React from 'react'
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
// Import css files
const useStyles = makeStyles((theme) => ({
    root_div: {
      width: "100%",
 
  marginTop:'40px',
      margin: "auto",
    },
   
  }));

const Sliderslick = () => {
    const classes = useStyles();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className={classes.root_div}>
             <Slider {...settings}>
      <div>
      <img src= ' https://k.nooncdn.com/cms/pages/20210506/64bf0dd0525ec0b452bc94477f0848f5/en_strip-02-ksa.gif' alt="Logo" />
      </div>
      <div>
      <img src= ' https://k.nooncdn.com/cms/pages/20210513/2496a55ac6c7079f474a4aab7b1d54e9/en_slider-01.gif' alt="Logo" />
      </div>
      <div>
      <img src= ' https://k.nooncdn.com/cms/pages/20210510/a4d9bf01d4c9a3f632a8a157654532d2/en_slider-01-ksa.png ' alt="Logo" />
      </div>
      <div>
      <img src= ' https://k.nooncdn.com/cms/pages/20210503/b64a52b840e81ab472b5a5b0c3148d13/en_slider-01.png ' alt="Logo" />
      </div>
      <div>
      <img src= ' https://k.nooncdn.com/cms/pages/20201020/79a2e38e27583a1a5db92d21097f3b8e/en_slider-emaar-uae-emaar.png ' alt="Logo" />
      </div>
     
    </Slider>
        </div>
    )
}

export default Sliderslick

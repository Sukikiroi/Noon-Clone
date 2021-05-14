import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const images = [
    { url: "https://k.nooncdn.com/cms/pages/20210417/d8c3378a2a4a1ad1c857b97b878cfa64/ar_mb-slider-01-KSA.png" },
    { url: "https://k.nooncdn.com/cms/pages/20210411/a7ffe572ae72caa2804c51bc73eac90d/ar_mb-slider-01.png" },
    { url: "https://k.nooncdn.com/cms/pages/20210417/d8c3378a2a4a1ad1c857b97b878cfa64/ar_mb-slider-01-KSA.png" },
    { url: "https://k.nooncdn.com/cms/pages/20210417/d8c3378a2a4a1ad1c857b97b878cfa64/ar_mb-slider-01-KSA.png" },
    { url: "https://k.nooncdn.com/cms/pages/20210417/d8c3378a2a4a1ad1c857b97b878cfa64/ar_mb-slider-01-KSA.png" },
    { url: "https://k.nooncdn.com/cms/pages/20210417/d8c3378a2a4a1ad1c857b97b878cfa64/ar_mb-slider-01-KSA.png" },
    { url: "https://k.nooncdn.com/cms/pages/20210417/d8c3378a2a4a1ad1c857b97b878cfa64/ar_mb-slider-01-KSA.png" },
    { url: "https://k.nooncdn.com/cms/pages/20210417/d8c3378a2a4a1ad1c857b97b878cfa64/ar_mb-slider-01-KSA.png" },
  ];
  const slideImages = [
    'https://k.nooncdn.com/cms/pages/20210411/a7ffe572ae72caa2804c51bc73eac90d/ar_mb-slider-01.png',
    'https://k.nooncdn.com/cms/pages/20210417/d8c3378a2a4a1ad1c857b97b878cfa64/ar_mb-slider-01-KSA.png',
    'https://k.nooncdn.com/cms/pages/20210417/d8c3378a2a4a1ad1c857b97b878cfa64/ar_mb-slider-01-KSA.png'
  ];
const Slider = () => {
    return (
        <div className="slide-container" style={{height:'150px'}}>
        <Slide>
          <div className="each-slide"    style={{height:'150px'}}>
            <div style={{'backgroundImage': `url(${slideImages[0]})`,height:'200px',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`,height:'200px',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`,height:'200px',backgroundRepeat:'no-repeat',backgroundSize:'600px',width:'100%'}}>
             
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slider

import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Carouuselheader = () => {
    return (
        <div >
             <Carousel  showArrows={true} showThumbs={false}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPuuBmAnh4UYq9PHl18YIIW6bEID-zKYUMA&usqp=CAU " />
                    
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPuuBmAnh4UYq9PHl18YIIW6bEID-zKYUMA&usqp=CAU " />
                    
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0N5xMR-enr7E6-DukcZHNbYZpIkt4L03wg&usqp=CAU" />
                   
                </div>
            </Carousel>
        </div>
    )
}

export default Carouuselheader

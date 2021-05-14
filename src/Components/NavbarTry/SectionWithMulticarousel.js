import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Productgearbest from './Productgearbest3';
import { makeStyles } from "@material-ui/core/styles";
import Productgearbest3 from "./Productgearbest3";
import './Multicarousel.css'
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items:2,
    },
  };
  const useStyles = makeStyles((theme) => ({
    root:{
 
marginBottom:'20px',
 
marginLeft:'10px'
    },
    title: {
      width: "100%",
     padding:'0px 20px 0px 20px',
      margin: "auto",
      display:'flex',
      justifyContent:'space-between',
      "& h2":{
fontSize:'1.5rem',
color:'rgb(64, 69, 83)',
fontWeight:'bold'
      },
      '& button':{
        width:'80px',
        height:'30px',
        border:'1px solid black',
        color:'rgb(64, 69, 83)',
        textTransform: 'uppercase',
letterSpacing: '0.2px',
      }
    },
  
  }));
const Sectionwithmulticarousel = ({Title}) => {
    const classes = useStyles();
    return (
        <div  className={classes.root}>
            <div  className={classes.title}>
              <h2>   {Title}</h2>
         <button>View All</button>
            </div>
              <Carousel
            customTransition="all .2"
            autoPlay={true}
            autoPlaySpeed={1000}
            responsive={responsive}  
          >

<Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/storage/item/6561660415148015616/15946/413d59b805c6.jpg_220x220.jpg"
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2020/11/05/source-img/20201105110743_5fa36c7f7e91e.jpg_220x220.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2021/02/26/source-img/20210226170738_6038ba5a6fca5.jpg_220x220.jpg "
              }
            />



<Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/storage/item/6561660415148015616/15946/413d59b805c6.jpg_220x220.jpg"
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2020/11/05/source-img/20201105110743_5fa36c7f7e91e.jpg_220x220.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2021/02/26/source-img/20210226170738_6038ba5a6fca5.jpg_220x220.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/storage/item/6561660415148015616/15946/413d59b805c6.jpg_220x220.jpg"
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2020/11/05/source-img/20201105110743_5fa36c7f7e91e.jpg_220x220.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2021/02/26/source-img/20210226170738_6038ba5a6fca5.jpg_220x220.jpg "
              }
            />

          </Carousel>
        </div>
    )
}

export default Sectionwithmulticarousel

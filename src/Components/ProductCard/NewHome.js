import React ,{useContext}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from './ProductCard'
import { BsColumnsGap } from 'react-icons/bs';
import Container from '@material-ui/core/Container';
import { ProductsContext } from '../Cart Shopping/contexts/ProductsContext';
import Footermobile from '../../Features/Features for Desktop And Mobile/Footer/Footermobile'
 
import ProductForLaptop from '../Cards for Desktop/LaptopProduct'
import ProductForMobil from '../CardForMobile/MyProduct'
import Hidden from '@material-ui/core/Hidden';
import Carousel from "react-multi-carousel";
import './carousel.css'
import "react-multi-carousel/lib/styles.css";
import Section from '../Cart Shopping/pages/store/Productcard/SectionProduct/SectionProducts'
import MobilNavfooter from '../../Features/Features for Desktop And Mobile/Footer/Footermobile'
const useStyles = makeStyles(theme => ({

  product_container:{
    columnCount:'4',
   
    ColumnsGap:1,
    [theme.breakpoints.down('sm')]: {
      columnCount:2,
      ColumnsGap:4,
      rowGap:4,
    },
  }
}));

export default function NewHome() {
  const classes = useStyles();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },

    
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  const { products } = useContext(ProductsContext)
  return (
    <Container fixed>
      <br></br>
      <Hidden lgUp>
 <Carousel containerClass="carousel-container"  autoPlay={  true }  responsive={responsive} >
    

 

 {products.map((product) =>
 <div>
  
 
  <ProductForMobil
  
  product={product}
  rating={product.rating}
  handle_change_is_wished={product.handle_change_is_wished}
  handle_change_is_added_to_cart={product.handle_change_is_added_to_cart}
  key={product.id}
  id={product.id}
  imgSrc={product.imgSrc}
  imgSrc2={product.imgSrc2}
  titleProduct={product.titleProduct}
  discount={product.discount}
  price={product.price}
  freeShipping={product.freeShipping}
  oldPrice={product.oldPrice}
  bestseller={product.bestseller}
  />

</div>
      )
      
      }
     

  </Carousel>
  
  </Hidden>
    

 <Carousel containerClass="carousel-container"  autoPlay={  true }  responsive={responsive} >
    

 

 {products.map((product) =>
 <div>
  
 
  <ProductForLaptop
  
  product={product}
  rating={product.rating}
  handle_change_is_wished={product.handle_change_is_wished}
  handle_change_is_added_to_cart={product.handle_change_is_added_to_cart}
  key={product.id}
  id={product.id}
  imgSrc={product.imgSrc}
  imgSrc2={product.imgSrc2}
  titleProduct={product.titleProduct}
  discount={product.discount}
  price={product.price}
  freeShipping={product.freeShipping}
  oldPrice={product.oldPrice}
  bestseller={product.bestseller}
  />

</div>
      )
      
      }
     

  </Carousel>
  
   
    
  
  <br></br>
 
  
 <MobilNavfooter/>
  </Container>
  );
}

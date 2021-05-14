import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from "@material-ui/core";
import "./productpage.css";
import "./CustomButton.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  ImageWithZoom,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import RedeemIcon from "@material-ui/icons/Redeem";
import CheckIcon from "@material-ui/icons/Check";
 
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Select } from "antd";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState, useEffect, useRef, useMemo, Fragment } from "react";
import Rating from "@material-ui/lab/Rating";
// import PeopleOftenBuy from '../../components/pplOftenbuy/PeopleOftenBuy';
import PeopleOftenBuy from "../../pplOftenbuy/PeopleOftenBuy";
import Timeline from "./Timeline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CartIcon from "./CartIcon.svg";
import FixedBar from "./Fixedbar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Badge } from "@chakra-ui/react";
import ScrollToTop from "react-scroll-up";
import ReactScrollDetect, { DetectSection } from "react-scroll-detect";
import Hidden from "@material-ui/core/Hidden";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "black",
    width: "100%",
    height: "100px",
    overflow: "auto",
    position: "fixed",
    zIndex: "2",
    top: "0",
  },
  sizevalue:{
    width: "90%",
    position:'relative',
    left:'20px'
  },
  colorValue:{
    width: "90%",
    position:'relative',
    left:'20px'
  }
}));
const { Option } = Select;
const ProductPage = () => {
  const [renderonscroll, setrenderonscroll] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [Product_Description, setProduct_Description] = useState("");
  const [price_Unit, setprice_Unit] = useState();
  const [Size, setSize] = useState(["small-38", "medium", "large", "Xlarge"]);
  const [Color, setColor] = useState([]);
  let ColorArray=  [];
  const [PeopleCart, setPeopleCart] = useState(50);

  const [Pictures, setPicture] = useState([
    "https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_kids.png",
    "https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_woman.png",
    "https://www.labasni.com/wp-content/uploads/2015/05/T-shirt-S-Swag-Couleur-bleu-roi-Vente-t-shirts-en-ligne-t-shirts-personnalis%C3%A9s-impression-t-shirt-en-tunisie.png",
  ]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position);
  };
  const handletoch = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position);
  };
  const renderonscrol = () => {
    if (scrollPosition > 650) setrenderonscroll(true);
    else setrenderonscroll(false);
  };

  const handleScrollmobile = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      console.log("bottom");
    } else console.log("boTopttom");
  };
  // Similar to componentDidMount and componentDidUpdate:

  useEffect(() => {
    // Update the document title using the browser API

    console.log(Pictures);
    axios.post(`http://localhost:2000/getProductpage`).then((res) => {
      const Product = res.data[0];
      setProduct_Description(Product.Product_Description);
      setprice_Unit("300");
      console.log(Product);
    });

    axios.post(`http://localhost:2000/getProductVariant`).then((res) => {
        const ProductVariant = res.data;
     
       
        console.log(typeof(ColorArray))
        for (const i in ProductVariant) {

            let ColorName=ProductVariant[i].Color
            ColorArray.push(ProductVariant[i].Color)
             console.log(ProductVariant[i].Color)
         
            // console.log(ProductVariant[i].Size);
            // console.log(ProductVariant[i].price);
            // console.log(ProductVariant[i].inventory_quantity);
      
          }
          setColor(ColorArray)
          console.log(ColorArray)
      });
    
    window.addEventListener("touchmove", handletoch, true);
    renderonscrol();
  },[]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const renderRating = (rating) => {
    const integerPart = Math.floor(rating);
    const decimalPart = rating - integerPart;
    const array = [];
    for (let index = 0; index < integerPart; index++) {
      array.push(<StarIcon />);
    }
    for (let index = 0; index < decimalPart; index++) {
      array.push(<StarHalfIcon />);
    }
    return array.map((star) => star);
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(4);
  const [cur, handlePageChange] = React.useState(0);
  const [section, setSection] = React.useState(0);
 


  let Cur = cur + 1;
  return (
    <ReactScrollDetect
      index={section}
      triggerPoint="center"
      onChange={handlePageChange}
    >
      <div
        onScroll={handleScrollmobile}
        style={{ overflow: "hiden", overflowX: "hiden" }}
      >
        {/* {(Cur > 3 && (
          <Hidden mdUp>
            <FixedBar />
          </Hidden>
        )) ||
          ""} */}
        <Grid container justify="center">
          {/* <Grid item xs={0} sm={1} >a</Grid> */}

          <Grid
            className="productpage__carousel__container"
            container
            item
            xs={12}
            sm={10}
          >
            {/* Left side slider gallery */}

            <Grid item xs={12} sm={8}>
              <div className="productpage__carousel">
                <div className="productpage__carousel__left">
                  <img style={{  }}
                    className={`${
                      currentSlide === 0 &&
                      "productpage__carousel__left__activeimage"
                    }`}
                    id={0}
                    src={Pictures[0]}
                    defaultValue={currentSlide === 0}
                    onClick={(e) => setCurrentSlide(Number(e.target.id))}
                  />
                  <img style={{  }}
                    className={`${
                      currentSlide === 1 &&
                      "productpage__carousel__left__activeimage"
                    }`}
                    id="1"
                    src={Pictures[1]}
                    defaultValue={currentSlide === 1}
                    onClick={(e) => setCurrentSlide(Number(e.target.id))}
                  />
                  <img style={{ }}
                    className={`${
                      currentSlide === 2 &&
                      "productpage__carousel__left__activeimage"
                    }`}
                    id="2"
                    src={Pictures[2]}
                    defaultValue={currentSlide === 2}
                    onClick={(e) => setCurrentSlide(Number(e.target.id))}
                  />
                </div>

                <CarouselProvider
                  visibleSlides={1}
                  totalSlides={6}
                  step={1}
                  naturalSlideWidth={400}
                  naturalSlideHeight={200}
                  hasMasterSpinner
                  currentSlide={currentSlide}
                  className="productpage__carousel__right"
                >
                  {/* <h2>Carousel (With Master Loading Spinner)</h2>
                            <p>
                                This spinner will go away after all the images have loaded. You might want to use
                                Chrome dev tools to throttle the network connection so you can see the spinner.
                        </p> */}
                  <Slider>
                    <Slide index={0}>
                      <Image className="imageInSlider" src={Pictures[0]} />
                    </Slide>
                    <Slide index={1}>
                      <Image className="imageInSlider" src={Pictures[1]} />
                    </Slide>
                    <Slide index={2}>
                      <Image className="imageInSlider" src={Pictures[2]} />
                    </Slide>
                    {/* <Slide index={3}>
                                    <Image className='imageInSlider' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
                                </Slide>
                                <Slide index={4}>
                                    <Image className='imageInSlider' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
                                </Slide>
                                <Slide index={5}>
                                    <Image className='imageInSlider' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
                                </Slide> */}
                  </Slider>
                  <div className="prodcutpage__right__favorite">
                    <FavoriteBorderIcon style={{ fontSize: 24 }} />
                  </div>
                  {/* <ButtonBack>Back</ButtonBack> */}
                  {/* <ButtonNext>Next</ButtonNext> */}
                  {/* <DotGroup /> */}
                </CarouselProvider>
              </div>

              {/* <PeopleOftenBuy /> */}
            </Grid>
            {/* Right side -> product information */}

            <Grid item xs={12} sm={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  height: "100%",
                }}
              >
                <div className="product__rating">
                  
                   <Rating
          name="customized-empty"
          defaultValue={2}
          precision={0.5}
          disabled 
          emptyIcon={<StarBorderIcon fontSize="inherit"
            />
        }
        />
                </div>
                <h1 className="productpqge__right__title">
                  Ew People t-shirt tee
                </h1>
                <div className="product__best__seller">
                  <RedeemIcon />
                  <Badge variant="outline" colorScheme="green">
                    Best Seller
                  </Badge>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h1 variant="body1" className="productpqge__right__price">
                    USD {price_Unit}
                  </h1>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      position: "relative",
                      right: "80px",
                    }}
                  >
                    <CheckIcon />
                    <Badge variant="solid" colorScheme="green">
                      In Stock
                    </Badge>
                  </div>
                  {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: 'red' }} >
                                Low in stock
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: 'red' }} >
                                <ClearIcon />
                                Not available
                            </div> */}
                </div>

                <div className="product__rating">
                  <span>Local taxes included (where applicable)</span>
                </div>

                <div className="prodcutpage__right__dropdown">
                  <h3 style={{ margin: "5px 0" ,position:"relative",left:'20px'}}>Size</h3>
                  <Select id="Size_Value"
     
                    className={classes.sizevalue}
                    size="large"
                    defaultValue={Size[2]}
              
                  >
                      

                    {Size.map((productsize) => (
                        
                      <Option value={productsize}>{productsize}</Option>
                    ))}
                  </Select>
                </div>

                <div className="prodcutpage__right__dropdown">
                  <h3 style={{ margin: "5px 0" ,position:"relative",left:'20px'}}>Colour T-shirt</h3>
                  <Select
                    className="prodcutpage__right__slider"
                    size="large"
                    className={classes.colorValue}
                    defaultValue={ColorArray[0]}
                    
                  >
                    {Color.map((productColor) => (
                      <Option value={productColor}>{productColor}</Option>
                    ))}
                  </Select>
                </div>
                <br></br>
                <DetectSection></DetectSection>
                <button className="button__custom">Add To cart</button>
                <br></br>

                <button className="button__custom">Buy it Now</button>
                <DetectSection></DetectSection>
                <div className="prodcutpage__right__message">
                  <img src={CartIcon} />
                  <h3>
                    <strong>Other people want this.</strong> Over {PeopleCart} people
                    have this in their carts right now.
                  </h3>
                </div>
              </div>
            </Grid>
          </Grid>

          {/* <Grid item xs={0} sm={1}>a</Grid> */}

          {/* 1st grid */}

          <Grid
            className="productpage__carousel__container"
            direction="row-reverse"
            justify="center"
            container
            item
            xs={12}
            sm={10}
          >
            {/* Right side -> product information */}
            {/* <Grid item xs={0} sm={1}>a</Grid> */}

            <Grid item xs={12} sm={4}>
              <div className="prodcutpage__right__two__dropdowns">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <h3 style={{ fontWeight: "bolder", fontSize: 16 ,position:'relative',left:'20px',width:'80%'}}>
                      Description
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>{Product_Description}</p>
                  </AccordionDetails>
                </Accordion>
                <DetectSection></DetectSection>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <h3 style={{ fontWeight: "bolder", fontSize: 16,position:'relative',left:'20px' ,width:'90%' }}>
                      Shipping and return policies
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <div>
                        <h5 style={{ textDecorationStyle: "dotted" }}>
                          Estimated Arrival
                        </h5>
                        <h1>Feb 12 - Feb 16</h1>
                      </div>

                      <Timeline />

                      <div>
                        <p>Cost to ship</p>
                        <div className="product__rating">
                          <span>USD 26.25</span>
                        </div>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <DetectSection></DetectSection>
              </div>
            </Grid>

            <Grid item xs={12} sm={8}>
              <div>
                {/* <PeopleOftenBuy /> */}
              </div>
            
              {/* <PeopleOftenBuy /> */}
            </Grid>
            {/* <Grid item xs={0} sm={1}>a</Grid> */}
          </Grid>
          {/* 2nd grid */}
        </Grid>
        <br></br>
            <br></br>
            <br></br>
            <br></br>
      </div>
    </ReactScrollDetect>
  );
};

export default ProductPage;

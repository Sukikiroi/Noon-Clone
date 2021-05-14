import { Accordion, AccordionSummary, AccordionDetails, Grid, Typography } from '@material-ui/core'
import './productpage.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, ImageWithZoom, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React, { useEffect, useContext } from "react";
import { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import RedeemIcon from '@material-ui/icons/Redeem';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { Select } from "antd";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import PeopleOftenBuy from '../../components/pplOftenbuy/PeopleOftenBuy';
import PeopleOftenBuy from '../pplOftenbuy/PeopleOftenBuy'
import Timeline from './Timeline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const { Option } = Select;
const ProductPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const renderRating = (rating) => {
        const integerPart = Math.floor(rating)
        const decimalPart = rating - integerPart
        const array = []
        for (let index = 0; index < integerPart; index++) {
            array.push(<StarIcon />)
        }
        for (let index = 0; index < decimalPart; index++) {
            array.push(<StarHalfIcon />)
        }
        return (
            array.map(star => (
                star
            ))
        )
    }
    return (
        <Grid container justify='center'>
            {/* <Grid item xs={0} sm={1} >a</Grid> */}
            <Grid className='productpage__carousel__container' container item xs={12} sm={10} >
                {/* Left side slider gallery */}
                <Grid item xs={12} sm={8} >
                    <div className='productpage__carousel' >
                        <div className='productpage__carousel__left'>
                            <img className={`${currentSlide === 0 && 'productpage__carousel__left__activeimage'}`} id={0} src='https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_kids.png' defaultValue={currentSlide === 0} onClick={e => setCurrentSlide(Number(e.target.id))} />
                            <img className={`${currentSlide === 1 && 'productpage__carousel__left__activeimage'}`} id='1' src='https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_woman.png' defaultValue={currentSlide === 1} onClick={e => setCurrentSlide(Number(e.target.id))} />
                            <img className={`${currentSlide === 2 && 'productpage__carousel__left__activeimage'}`} id='2' src='https://www.labasni.com/wp-content/uploads/2015/05/T-shirt-S-Swag-Couleur-bleu-roi-Vente-t-shirts-en-ligne-t-shirts-personnalis%C3%A9s-impression-t-shirt-en-tunisie.png' defaultValue={currentSlide === 2} onClick={e => setCurrentSlide(Number(e.target.id))} />
                            {/* <img className={`${currentSlide === 3 && 'productpage__carousel__left__activeimage'}`} id='3' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' defaultValue={currentSlide === 3} onClick={e => setCurrentSlide(Number(e.target.id))} /> */}
                            {/* <img className={`${currentSlide === 4 && 'productpage__carousel__left__activeimage'}`} id='4' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' defaultValue={currentSlide === 4} onClick={e => setCurrentSlide(Number(e.target.id))} /> */}
                            {/* <img className={`${currentSlide === 5 && 'productpage__carousel__left__activeimage'}`} id='5' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' defaultValue={currentSlide === 5} onClick={e => setCurrentSlide(Number(e.target.id))} /> */}
                        </div>

                        <CarouselProvider
                            visibleSlides={1}
                            totalSlides={6}
                            step={1}
                            naturalSlideWidth={400}
                            naturalSlideHeight={200}
                            hasMasterSpinner
                            currentSlide={currentSlide}
                            className='productpage__carousel__right'
                        >
                            {/* <h2>Carousel (With Master Loading Spinner)</h2>
                            <p>
                                This spinner will go away after all the images have loaded. You might want to use
                                Chrome dev tools to throttle the network connection so you can see the spinner.
                        </p> */}
                            <Slider>
                                <Slide index={0}>
                                    <Image className='imageInSlider' src="https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_kids.png" />
                                </Slide>
                                <Slide index={1}>
                                    <Image className='imageInSlider' src="https://image.spreadshirtmedia.com/content/q_auto,f_auto,w_210/CMS/SSP/product_image_shirt_woman.png" />
                                </Slide>
                                <Slide index={2}>
                                    <Image className='imageInSlider' src="https://www.labasni.com/wp-content/uploads/2015/05/T-shirt-S-Swag-Couleur-bleu-roi-Vente-t-shirts-en-ligne-t-shirts-personnalis%C3%A9s-impression-t-shirt-en-tunisie.png" />
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
                            <div className='prodcutpage__right__favorite' >
                                <FavoriteBorderIcon style={{fontSize:24}} />
                            </div>
                            {/* <ButtonBack>Back</ButtonBack> */}
                            {/* <ButtonNext>Next</ButtonNext> */}
                            {/* <DotGroup /> */}
                        </CarouselProvider>
                    </div>

                    {/* <PeopleOftenBuy /> */}

                </Grid>
                {/* Right side -> product information */}
                <Grid item xs={12} sm={4} >
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',height:'100%'}} >
                        <div className='product__rating' >
                            <span>3456 sales |</span>{renderRating(3)}
                        </div>
                        <h1 className='productpqge__right__title' >Ew People t-shirt tee // hipster t-shirts / hipster clothing</h1>
                        <div className='product__best__seller' >
                            <RedeemIcon />
                            <span>Bestseller</span>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h1 variant='body1' className='productpqge__right__price' >
                                USD 26.25
                            </h1>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight:'bold' }} >
                                <CheckIcon />
                                In stock
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight:'bold',color:'red' }} >
                                Low in stock
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight:'bold',color:'red' }} >
                                <ClearIcon />
                                Not available
                            </div>
                        </div>

                        <div className='product__rating' >
                            <span>Local taxes included (where applicable)</span>
                        </div>

                        <div>
                            <h3>Size</h3>
                            <Select className='prodcutpage__right__slider' size='large' defaultValue="" style={{ width: '100%' }}>
                                <Option value="jack">small-38</Option>
                                <Option value="lucy">medium</Option>
                                <Option value="Yiminghe">large</Option>
                                <Option value="Yiminghee">Xlarge</Option>
                            </Select>
                        </div>

                        <div>
                            <h3>Colour T-shirt</h3>
                            <Select className='prodcutpage__right__slider' size='large' defaultValue="" style={{ width: '100%' }}>
                                <Option value="jack">Black</Option>
                                <Option value="lucy">White</Option>
                                <Option value="Yiminghe">Red</Option>
                                <Option value="Yiminghee">Green</Option>
                            </Select>
                        </div>
                        
                        <button className='button__custom' >Add To cart</button>
                        <button className='button__custom' >Buy it Now</button>

                    </div>
                </Grid>
            </Grid>
            {/* <Grid item xs={0} sm={1}>a</Grid> */}


            {/* 1st grid */}

            <Grid className='productpage__carousel__container' direction='row-reverse' justify='center' container item xs={12} sm={10}  >

                
                {/* Right side -> product information */}
                {/* <Grid item xs={0} sm={1}>a</Grid> */}

                <Grid item xs={12} sm={4} >
                    <div>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <h3>Description</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </p>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <h3>Shipping and return policies</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} >

                                    <div>
                                        <h5 style={{ textDecorationStyle: 'dotted' }} >Estimated Arrival</h5>
                                        <h1>Feb 12 - Feb 16</h1>
                                    </div>

                                    <Timeline />

                                    <div>
                                        <p>Cost to ship</p>
                                        <div className='product__rating' >
                                            <span>USD 26.25</span>
                                        </div>
                                    </div>

                                </div>
                            </AccordionDetails>
                        </Accordion>
                        

                    </div>
                </Grid>

                <Grid item xs={12} sm={8} >

                    <PeopleOftenBuy/>

                </Grid>
                {/* <Grid item xs={0} sm={1}>a</Grid> */}


            </Grid>
            {/* 2nd grid */}


        </Grid>
    )
}

export default ProductPage
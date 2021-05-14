import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Productgearbest3 from "./Productgearbest3";
import Carousel from "react-multi-carousel";
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import Sectionfireship from "./SectionFireship";
import Sectionwithpic from "./SectionWithPic";
import SectionWith3pics from "./SectionWith3pics";
import Sliderslick from "./SliderSlick";
import Sectionwithslick from "./SectionWithSlick";
import './SlickSlide.css';
import Sectionwithmulticarousel from "./SectionWithMulticarousel";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
     
    margin: "auto",
  },

  carousel_product: {
    width: "140%",
    marginTop:'30px',
   
    [theme.breakpoints.up("xs")]: {
      width: "96%",
    },
  },
  SectionpicNoon:{
    width:'100%',
    margin:'auto',
 
  }
}));
const Fireshiphome = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" ,zIndex:'5' ,position:'relative',right:'30px',top:'160px'   }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode:false,
    // nextArrow: (
    //   <div>
    //     <div className="next-slick-arrow"> ⫸ </div>
    //   </div>
    // ),
    // prevArrow: (
    //   <div>
    //     <div className="prev-slick-arrow"> ⫷ </div>
    //   </div>
    // )
  };
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      {/* <Sectionwithpic Picture_section="https://k.nooncdn.com/mon/1619787516297-cko4bnyix9bw2mor1pffkhhq9.png" />
     */}
   {/* <Sectionwithslick Title={'Recomending For you'}>
 
   <Slider  centerPadding='80px'{...settings}>

     
   <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/images/pdm-provider-img/straight-product-img/20190115/T012429/T0124290485/source-img/164805-6024.jpg_220x220.jpg"
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
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
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
          

</Slider>
 
   </Sectionwithslick>
    */}




{/* 
      <Sectionwithpic Picture_section="https://k.nooncdn.com/cms/pages/20210502/967814c0e6fa913820685664f98e1993/ar_PLP-01-KSA.png " />
     */}
    


    <Sectionwithmulticarousel Title={'Recomended For you'}/>

    <div className={classes.SectionpicNoon}>
<img src= ' https://k.nooncdn.com/cms/pages/20210506/64bf0dd0525ec0b452bc94477f0848f5/en_strip-02-ksa.gif' alt="Logo" />
 </div>




    <Sectionwithmulticarousel Title={'Recomended For you'}/>


    <Sectionwithmulticarousel Title={'Recomended For you'}/>



    <Sectionwithmulticarousel Title={'Recomended For you'}/>
      {/* <Sectionfireship
        Section_pic="data:image/png;base64,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"
        Title="Trending"
      >
        <div className={classes.carousel_product}>
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
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6764508960092516352/16171/goods_img-v7/cb30e8ef1976.jpg"
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
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6764508960092516352/16171/goods_img-v7/cb30e8ef1976.jpg"
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6680158437893255168/15991/goods_img-v3/ff36d13e6a2e.jpg  "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/29/goods_img-v2/20201229153031_63687.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/15/goods_img-v1/20201215121711_5fd838c7bda76.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6538757764533600256/15998/goods_img-v2/311b48262089.jpg  "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/15924/goods_img-v2/8a9b0dca8449.jpg  "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6568849533892280320/15681/goods_img-v2/6be0f4b89c38.jpg  "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6764508960092516352/16171/goods_img-v7/cb30e8ef1976.jpg"
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6680158437893255168/15991/goods_img-v3/ff36d13e6a2e.jpg  "
              }
            />
          </Carousel>
        </div>
      </Sectionfireship> */}

      <Sectionwithpic Picture_section="https://k.nooncdn.com/cms/pages/20210429/2909cab11ec12ff16c7a67b27d270f91/ar_mw-hero.png " />

      {/* <Sectionfireship
        Section_pic="   data:image/jpeg;base64,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+ULfTZsNg5rdToS0u1ARw9y9pYx7dnT43WOJo6DEg24LU0TYLBAcJNwrMsld5UDiXaSxvjEx71au6Mt/0+4j5KZkGB6qmO91z69cFbL0eA7FoOoh9UGTexcIGgsep3TGiz1cQ4OgfAXON6Mj/T8SombYH9HaHNa084iPX3XXKPjMOKjC08VdiewsOaThSB2tJc45aXOuSizEvm5tyC+f1MfUPGPD77rXh6BqE327+P1TGYc03lp4H5rSF5cNAENt0WuZzXi67onmGodW43G3r1suXxGH0RcGRNlngcSabw4cCr8LiTRqtqsvHuMiPtxhQe3aBaV9KRaMLXFRocOK3r3jHte0OaZBuDwK55BFiiIikviIiIiIiIiIiIiIiIiIiIiIiIiKn6RY7qqZj2nbK1qPABJ2C5PGYKri6hcBDOBK5Pa2JLKYoskvfa0kxqbX4W3zor6DZO0cgucJWTqRAkgwuywPRymy7u0efr7LR0swwFNpaIAPDyH1K4FTs3EU6JrPAAEWmTcgaWGc5notAqtLtkLkVddGsB1tTUfZb69eKp6bC4gDcr6Bk+CFGmBxNz69bp2dhf1NcNd5Rc8tB1PsClR+y2QrBeoi9qsCIiIi5fpZl8jrWjbf1625rlF9Or0g9padivnmZ4Q0qhaRxsvI9r4Xuq3eNyd7O19fN/ktlF8tg6KOymXbAm3wCxIV30So6qpJFgPv+S6PHZJSq7iD3hZ8P2fXr0jUpxYxGRNhkctYvGWam6o1pgqo6JY//tE+Hr4e5dWuMr5DVouD2doA+a6nA4nrGA8eK7PZFZ7CcLVBBFxNrajiAbgi14GSorNB8bVKREXdWdERERERERERERERERERERERERYPYCIIkLIL1F8AAMoiq+kVPVQdyv8AT6q0UfFs1McOX5rPjafeYeowatPx91OmYeDxXJ9FMv1v6wizdvXrYrtFDy7CikwNCmLP2Zhf09ASPE65+3QW5ydVKq/adbJERF0VUiIiIi57pTl+tmsC49evJdCsHsDgQdisuNwwxNE0znodxGR+h4EhTpv2XSua6GU7Pdz9fJdQq/K8L1QLY/EY5iZn4lWCp7LoupYVrXCDcnq426KVZwLzCLWKYBJAEnfmtiLeROaqRERfUREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX//2Q=="
        Title="Best Seller"
      >
        <div className={classes.carousel_product}>
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
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6764508960092516352/16171/goods_img-v7/cb30e8ef1976.jpg"
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
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6764508960092516352/16171/goods_img-v7/cb30e8ef1976.jpg"
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6680158437893255168/15991/goods_img-v3/ff36d13e6a2e.jpg  "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/29/goods_img-v2/20201229153031_63687.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/15/goods_img-v1/20201215121711_5fd838c7bda76.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6538757764533600256/15998/goods_img-v2/311b48262089.jpg  "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/15924/goods_img-v2/8a9b0dca8449.jpg  "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6568849533892280320/15681/goods_img-v2/6be0f4b89c38.jpg  "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6764508960092516352/16171/goods_img-v7/cb30e8ef1976.jpg"
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6680158437893255168/15991/goods_img-v3/ff36d13e6a2e.jpg  "
              }
            />
          </Carousel>
        </div>
      </Sectionfireship> */}

      <Sectionwithpic Picture_section=" https://k.nooncdn.com/mon/1619788378892-cko4c6g3w967qisqzcvpjtx2f.png" />
      <Sectionfireship
        Section_pic="data:image/png;base64,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"
        Title="Trending"
      >
        <div className={classes.carousel_product}>
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
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6764508960092516352/16171/goods_img-v7/cb30e8ef1976.jpg"
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
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6764508960092516352/16171/goods_img-v7/cb30e8ef1976.jpg"
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6680158437893255168/15991/goods_img-v3/ff36d13e6a2e.jpg  "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/29/goods_img-v2/20201229153031_63687.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/15/goods_img-v1/20201215121711_5fd838c7bda76.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6538757764533600256/15998/goods_img-v2/311b48262089.jpg  "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/15924/goods_img-v2/8a9b0dca8449.jpg  "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6568849533892280320/15681/goods_img-v2/6be0f4b89c38.jpg  "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6764508960092516352/16171/goods_img-v7/cb30e8ef1976.jpg"
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6680158437893255168/15991/goods_img-v3/ff36d13e6a2e.jpg  "
              }
            />
          </Carousel>
        </div>
      </Sectionfireship>
      <Sectionwithpic Picture_section="https://k.nooncdn.com/cms/pages/20210426/177e077381b7239842c93d5b206a481e/ar_strip-01.png" />
      {/* <Sectionfireship
        Section_pic="data:image/png;base64,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"
        Title="Recomended For you"
      >
        <div className={classes.carousel_product}>
          <Carousel
            customTransition="all .2"
            autoPlay={false}
            autoPlaySpeed={1000}
            responsive={responsive}
          >
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/images/pdm-provider-img/straight-product-img/20190115/T012429/T0124290485/source-img/164805-6024.jpg_220x220.jpg"
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
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
              }
            />
            <Productgearbest3
              Imageproduct={
                "https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg "
              }
            />
          </Carousel>
        </div>
      </Sectionfireship> */}

      <SectionWith3pics
        Picture_1="https://k.nooncdn.com/cms/pages/20210423/7abedf2975f7d73e398dabfc8de8e040/ar_other-02-KSA.png"
        Picture_2="https://k.nooncdn.com/cms/pages/20210423/7abedf2975f7d73e398dabfc8de8e040/ar_other-01-KSA.png"
        Picture_3="https://k.nooncdn.com/cms/pages/20210423/7abedf2975f7d73e398dabfc8de8e040/ar_other-03-KSA.png"
      />
    </div>
  );
};

export default Fireshiphome;

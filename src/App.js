import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "react-perfect-scrollbar/dist/css/styles.css";
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import { ChakraProvider } from "@chakra-ui/react";
import Appbar1 from "./Components/Navbar for Desktop and Mobile/Appbar";
import Home from "./Pages/Pages/Home";
import Productpagecontainer from "./Components/Productpage/Container";
import Store from "./Components/Cart Shopping/pages/store/index";
import Checkouts from "./Components/checkoutinfo/CheckoutContainer";
import Cartpage from "./Components/Cart Page/Cart";
import { CartContext } from "./Components/Cart Shopping/contexts/CartContext";
import Containewish from "./Components/Wishlist/Container";
import Filtercategorycontainer from "./Components/Filter Category/Container";
import Allcategory from "./Components/Filter Category/Allcategory";
import BuyItNowContainer from "./Components/BuyItNow/BuyItNowContainer";
import Containerprofile from "./Components/Profile/Containerprofile";
import Imageupload from "./Components/Profile/Imageupload";
import Navbar from "./Components/Navbar/Navbar";
import NewHome from "./Components/ProductCard/NewHome";
import NewProductpage from "./Components/Newproductpage/New/Containerproductpage";
import NewProfile from "./Components/Profile/NewProfile/Containerprofile";
import Testme from "./Components/Cart Shopping/pages/store/Productcard/Test";
import Dropdowncustom from "./Components/Mydropdown/DropdownCustom";
import Navbarcustom from "./Components/Mydropdown/NavbarCustom";
import Navbarresponcive from "./Components/Mydropdown/Navbarresponcive";
import Homeheader from "./Components/Mydropdown/HomeHeader";
import ResponciveHome from "./Components/Mydropdown/ResponciveHome";
import CardTest from "./Components/Mydropdown/CardTest";
import Searchfiled from "./Components/Mydropdown/Searchfiled";
import Navbarbox from "./Components/Mydropdown/Navbarbox";
import Checkoutbox from "./Components/Mydropdown/Checkoutbox";
import NavbarDesktop from "./Components/Mydropdown/DesktopNavbar";
import BottomNavbar from "./Components/Mydropdown/BottomNavbar";
import Homeofproduct from "./Components/Mydropdown/Homeofrpoduct";
import NavbarMobile from "./Components/Mydropdown/NavbarMobile";
import DesktopHomeconteinr from "./Components/Mydropdown/DesktopHomeconteinr";
import Wolfcheckout from "./Components/Wolf checkout/Checkoutcontainer";
import Hidden from "@material-ui/core/Hidden";
import Mobilenavbar from "./Components/Mydropdown/Mobilenavbar";
import Flexnavbar from "./Components/Flexnavbar/Flexnavbar";
import Mobileflexnavbar from "./Components/Flexnavbar/MobileFlexnavbar";
import { Noonnavbar } from "./Components/Flexnavbar/Noonnavbar";
import Myselect from "./Components/Flexnavbar/MySelect";
import Navbardribble from "./Components/Dribble/Navbardribble";
import Slider from "./Components/Sliderhome/Slider";
import { Homesection } from "./Components/SectionProducts/HomeSection";
import Noonnavbar2 from "./Components/NavbarTry/Noonnavbar2";
import Productgearbest from "./Components/NavbarTry/productgearbest";
import Footernoon from "./Components/Footernoon/Footernoon";
import Footernonmobile from "./Components/Footernoon/Footernonmobile";
import Productgearbest2 from "./Components/NavbarTry/Productgearbest2";
import Productnoon from "./Components/NavbarTry/Productnoon";
import Productgearbest3 from "./Components/NavbarTry/Productgearbest3";
import Picofsection from "./Components/NavbarTry/Picofsection";
import Nouveausection from "./Components/SectionProducts/NouveauSection";
import Checkoutflexbox from "./Components/CheckoutFlexbox/Checkoutflexbox";
import Loladtry from "./Components/Wolf checkout/Loladtry";
import Fireshiphome from "./Components/NavbarTry/FireshipHome";
import Cartcontainer from "./Components/Noon Clone/Cart/Cartcontainer";
import Cartcontainerformobile from "./Components/Noon Clone/Cart For Mobile/CartcontainerForMobile";
import Checkoutnoonclone from "./Components/Noon Clone/Checkout/CheckoutNoonClone";
import FrequentlyboughttogetherContainer from "./Components/Noon Clone/Frequently Bought Together/FrequentlyBoughtTogether_container";
import Frequentlypeoplebuy from "./Components/Newproductpage/New/FrequentlyPeopleBuy/FrequentlyPeopleBuy";
import Customeralsoviewed from "./Components/Newproductpage/New/CustomerAlsoViewed/CustomerAlsoViewed";
import Slidernoonpic from "./Components/Noon Clone/NoonPics/SliderNoonpic";
import SectionOneNoonPic from './Components/Noon Clone/NoonPics/SectionOneNoonPic'
import Sliderslick from "./Components/NavbarTry/SliderSlick";
import Headerwithmulticarousel from "./Components/NavbarTry/HeaderWithMultiCarousel";
const App = () => {
  const [EmptyCart, setEmptyCart] = React.useState(true);

  useEffect(() => {
    const Cart = JSON.parse(localStorage.getItem("cart"));

    if (Cart == null) {
      setEmptyCart(true);
    } else {
      setEmptyCart(false);
    }
  }, []);

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/Checkout">
            <Checkoutnoonclone />
          </Route>
          <Route path="/Productpage">
            <Hidden xsDown>
              <Noonnavbar2 />
            </Hidden>
            <Hidden smUp>
              <Mobileflexnavbar />
            </Hidden>
            <NewProductpage />
            <Frequentlypeoplebuy />
            <br></br>

            <Customeralsoviewed />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Hidden xsDown>
              <Footernoon />
            </Hidden>

            <Hidden smUp>
              <Footernonmobile />
            </Hidden>
          </Route>

          <Route path="/Cart">
            <Hidden xsDown>
              <Noonnavbar2 />
            </Hidden>
            <Hidden smUp>
              <Mobileflexnavbar />
            </Hidden>
            {/* {(!EmptyCart && <Checkouts />) || "Your Cart Is Empty"} */}
            <br></br>
            <br></br>
            <Hidden xsDown>
              <Cartcontainer />
            </Hidden>
            <Hidden smUp>
              <Cartcontainerformobile />
            </Hidden>
            <br></br>
            <br></br>

            <br></br>
            <Hidden xsDown>
              <Footernoon />
            </Hidden>

            <Hidden smUp>
              <Footernonmobile />
            </Hidden>
            <br></br>
            <br></br>
            <br></br>
            <Hidden smUp>
              <BottomNavbar style={{ position: "fixed", bottom: "0" }} />
            </Hidden>
          </Route>

          <Route path="/cartpage">
            <Hidden xsDown>
              <Noonnavbar2 />
            </Hidden>
            <Hidden smUp>
              <Mobileflexnavbar />
            </Hidden>
            <Cartpage />
          </Route>
          <Route path="/BuyIt">
            <Noonnavbar2 />
            <BuyItNowContainer />
          </Route>
          <Route path="/Mywishlist">
            <Navbar />
            <Containewish />
          </Route>
          <Route path="/Allcategory">
            <Navbar />
            <Allcategory />
          </Route>
          <Route path="/Profile">
            <Navbar />
            <NewProfile />
          </Route>
          <Route path="/Home">
            {/* <Hidden smDown>
              <NavbarDesktop />
            </Hidden>
            <Hidden xsDown><Mobilenavbar/></Hidden> */}
            <Hidden xsDown>
              {/* <Flexnavbar/> */}
              {/* <NavbarDesktop /> */}
              {/* <Noonnavbar /> */}
              <Noonnavbar2 />
            </Hidden>
            <Hidden smUp>
              <Mobileflexnavbar />
            </Hidden>
            {/* <Myselect/> */}
            {/* <Slider /> */}
            {/* <Slidernoonpic/> */}
            {/* <Sliderslick/> */}
            <Headerwithmulticarousel/>
            <br></br>
            <br></br>
          
            <br></br>
            <br></br>
            <br></br>
            <Fireshiphome />
            <SectionOneNoonPic/>
            {/* <DesktopHomeconteinr /> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <Nouveausection Title={'RECOMMANDÉ POUR VOUS'}>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/storage/item/6561660415148015616/15946/413d59b805c6.jpg_220x220.jpg'}/>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2020/11/05/source-img/20201105110743_5fa36c7f7e91e.jpg_220x220.jpg '}/>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2021/02/26/source-img/20210226170738_6038ba5a6fca5.jpg_220x220.jpg '}/>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg '}/>
            <Productgearbest3 Imageproduct={' https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg '}/>  
            </Nouveausection> */}
            {/* <br></br>
           <br></br>
           <br></br>
           <br></br>
            <Homesection/>
            <br></br>
           <br></br> */}
            {/* <div style={{display:'grid',gridTemplateColumns: "auto auto auto auto auto auto",}}>
            <Picofsection/>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/storage/item/6561660415148015616/15946/413d59b805c6.jpg_220x220.jpg'}/>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2020/11/05/source-img/20201105110743_5fa36c7f7e91e.jpg_220x220.jpg '}/>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2021/02/26/source-img/20210226170738_6038ba5a6fca5.jpg_220x220.jpg '}/>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img-v15/6fd2ced3e06f.jpg '}/>
            <Productgearbest3 Imageproduct={' https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg '}/>
            <Productgearbest3 Imageproduct={' https://gloimg.gbtcdn.com/soa/gb/item/6764508960092516352/16171/goods_img-v7/cb30e8ef1976.jpg'}/>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/soa/gb/item/6680158437893255168/15991/goods_img-v3/ff36d13e6a2e.jpg  '}/>
            <Productgearbest3 Imageproduct={' https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/29/goods_img-v2/20201229153031_63687.jpg '}/>
            <Productgearbest3 Imageproduct={' https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/15/goods_img-v1/20201215121711_5fd838c7bda76.jpg '}/>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/soa/gb/item/6538757764533600256/15998/goods_img-v2/311b48262089.jpg  '}/>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/15924/goods_img-v2/8a9b0dca8449.jpg  '}/>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/soa/gb/item/6568849533892280320/15681/goods_img-v2/6be0f4b89c38.jpg  '}/>
            <Productgearbest3 Imageproduct={' https://gloimg.gbtcdn.com/soa/gb/item/6764508960092516352/16171/goods_img-v7/cb30e8ef1976.jpg'}/>
            <Productgearbest3 Imageproduct={'https://gloimg.gbtcdn.com/soa/gb/item/6680158437893255168/15991/goods_img-v3/ff36d13e6a2e.jpg  '}/>
            </div> */}
            {/* < Wolfcheckout/> */}
            {/* <Checkoutbox/> */}
            {/* <Productgearbest/> */}
            {/* <Productnoon/> */}

            <Hidden xsDown>
              <Footernoon />
            </Hidden>

            <Hidden smUp>
              <Footernonmobile />
            </Hidden>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Hidden smUp>
              <BottomNavbar style={{ position: "fixed", bottom: "0" }} />
            </Hidden>
          </Route>

          <Route path="/">
            <FrequentlyboughttogetherContainer />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default App;

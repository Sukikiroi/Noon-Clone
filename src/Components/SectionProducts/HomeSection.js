import React from "react";
import Homeofproduct2 from "../Mydropdown/Homeofproduct2";
import Section from "./Section";
import Button from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Productgearbest3 from "../NavbarTry/Productgearbest3";
import Picofsection from "../NavbarTry/Picofsection";
import GearbestSection from './GearbestSection'
export const Homesection = () => {
  const useStyles = makeStyles((theme) => ({
    undersection: {
      height: "250px",
      width: "100%",
      backgroundColor: "BlanchedAlmond",
      backgroundImage: `url(${"https://k.nooncdn.com/cms/pages/20210411/2c0899166ae6f73a2c141c6d2f9c2f80/en_sports-01-KSA.png"})`,
      [theme.breakpoints.down("xs")]: {
        backgroundImage: `url(${"https://k.nooncdn.com/cms/pages/20201223/65b8ca8bef9878b7b4110f965d4031ea/en_mb-strip-02.png"})`,

        height: "120px",
        backgroundPosition: "center",
        backgroundSize: "410px",
        backgroundRepeat: "no-repeat",
      },
    },
  }));
  const classes = useStyles();
  return (
    <div>
       <br></br>
      <GearbestSection Title={"RECOMMANDÉ POUR VOUS"}>
       
      <Picofsection />
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
            " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
          }
        />


      </GearbestSection>
   
      <GearbestSection Title={"SUPER DEALS"}>
       
       <Picofsection />
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
             " https://gloimg.gbtcdn.com/soa/gb/item/6561660415148015616/16099/goods_img-v1/6e47a19dea22.jpg "
           }
         />
 
 
       </GearbestSection>
    
    
   
      <Section Title={"SUPER DEALS"}>
        <Picofsection />
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
      </Section>

      <div className={classes.undersection}></div>

      <Section Title={"Trending"}>
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1580295048/N33500326A_1.jpg"
          }
        />
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1583501228/N21686995A_1.jpg"
          }
        />
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1605814220/N41044065A_1.jpg"
          }
        />
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1603040855/N41247606A_1.jpg"
          }
        />
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1603040774/N41247172A_1.jpg"
          }
        />
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1580295048/N33500326A_1.jpg"
          }
        />
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1603040855/N41247606A_1.jpg"
          }
        />
      </Section>

      <Section Title={"New Products"}>
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1583501228/N21686995A_1.jpg"
          }
        />
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1605814220/N41044065A_1.jpg"
          }
        />
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1603040855/N41247606A_1.jpg"
          }
        />
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1603040774/N41247172A_1.jpg"
          }
        />
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1606407160/N32349681A_1.jpg"
          }
        />
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1603040855/N41247606A_1.jpg"
          }
        />
        <Homeofproduct2
          Image={
            "https://k.nooncdn.com/t_desktop-thumbnail-v2/v1603040774/N41247172A_1.jpg"
          }
        />
      </Section>
    </div>
  );
};

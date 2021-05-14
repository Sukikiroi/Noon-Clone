import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  product_item: {
    position: "relative",
    display: "inline-block",
    verticalAlign: "top",
    marginLeft: "-1px",
    padding: "10px",
    width: "177px",
    height: "318px",
    fontFamily: "OpenSans,Arial,Helvetica,sans-serif",
    color: "#666",
    lineHeight: "1",
    border: " 1px solid #eee",
    cursor: "default",

    transition: " all .2s linear",
  },
  product_item_img:{
    padding: 0,
    margin: 0,
    color: '#666',
textDecoration: 'none',
fontSize: 'inherit',
outline: 'none',
},
product_item_discount:{
    position: 'absolute',
right: '10px',
top: '10px',
padding: '10px',
width: '60px',
height: '60px',
backgroundColor: '#f30240',
color: '#fff',
textAlign: 'center',
borderRadius: '50%',
},
product_item_title:{
    fontSize: '14px',
    
    height: '40px',
    lineHeight: '20px',
    overflow: 'hidden',
    color: '#666',
    fontFamily: 'OpenSans,Arial,Helvetica,sans-serif',
},
product_item_price:{

},
product_item_shopprice:{
    minHeight: '20px',
    marginTop: '20px',
    fontSize: '14px',
color: '#999',
textDecoration: 'none',
lineHeight: '1',
fontFamily: 'OpenSans,Arial,Helvetica,sans-serif',
}
 
  
}));
const Productgearbest = () => {
  const classes = useStyles();
  return( 
  <div className={classes.product_item}>
<div    className={classes.product_item_img}>


<a href="https://fr.gearbest.com/flash-sale.html?top-goods=476348701-1433363" title="Gocomma K08 Écouteur Bluetooth 5.0 sans Fil à Conduction Osseuse de Sports" tabindex="0"> 
<img class="js-lazyload lazy-loaded" src="https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2021/01/07/source-img/20210107153227_5ff6b90bb0450.jpg_220x220.jpg" alt="Gocomma K08 Écouteur Bluetooth 5.0 sans Fil à Conduction Osseuse de Sports" data-was-processed="true" style={{opacity: '1'}}></img>
</a>
</div>
<div    className={classes.product_item_discount}>
<strong style={{fontSize: '18px',fontWeight: '400',textAlign: 'center',}}>27</strong>
<em>%</em>
<span>OFF</span>
</div>

<div   className={classes.product_item_title}  >
<a class="gbItem_titleTrack" href="https://fr.gearbest.com/flash-sale.html?top-goods=476348701-1433363" title="Gocomma K08 Écouteur Bluetooth 5.0 sans Fil à Conduction Osseuse de Sports" tabindex="0">
                Gocomma K08 Écouteur Bluetooth 5.0 sans Fil à Conduction Osseuse de Sports
            </a>


</div>

<div    className={classes.product_item_price}>
<div    className={classes.product_item_shopprice}>

<span  style={{verticalAlign: 'middle'}}>RRP:&nbsp;</span>
<div  data-currency="17.86" style={{textDecoration: 'line-through', display: 'inline-block', verticalAlign: 'middle' }}>
    15,13 
</div>
</div>


</div>
  </div>

  )
};

export default Productgearbest;

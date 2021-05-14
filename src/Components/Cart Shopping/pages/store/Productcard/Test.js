import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BsColumnsGap } from "react-icons/bs";
import Container from "@material-ui/core/Container";
import { ProductsContext } from "../../../contexts/ProductsContext";
import Productcard from "./Product";
import Hidden from "@material-ui/core/Hidden";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({
  product_container: {
    columnCount: "4",

    ColumnsGap: 1,
    [theme.breakpoints.down("sm")]: {
      columnCount: 2,
      ColumnsGap: 4,
      rowGap: 4,
    },
  },
}));

export default function NewHome() {
  const classes = useStyles();
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
      items: 1,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map((product) => (
        <div>
          <Productcard
            product={product}
            handle_change_is_wished={product.handle_change_is_wished}
            handle_change_is_added_to_cart={
              product.handle_change_is_added_to_cart
            }
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
            rating={product.rating}
          />
        </div>
      ))}
    </div>
  );
}

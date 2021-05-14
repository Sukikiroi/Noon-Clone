import React, { useContext,useState } from 'react'
import Product from '../Productcard/Product'
import { Grid } from "@material-ui/core"
import SectionProducts from '../Productcard/SectionProduct/SectionProducts'
import { ProductsContext } from '../../../contexts/ProductsContext';


const Home = () => {
    const [productlist, setProductlist] = useState([])
    const handle_change_is_wished = (pkey) => {
        setProductlist(prev => productlist.map(product => product.id === pkey ? { ...product, is_in_wishlist: !product.is_in_wishlist } : product))
    }

    const handle_change_is_added_to_cart = (pkey) => {
        setProductlist(prev => productlist.map(product => product.id === pkey ? { ...product, is_added_to_cart: !product.is_added_to_cart } : product))
    }
    const { products} =  useContext( ProductsContext)  
    return (
        <div>

            <SectionProducts title='Top Trending' >
                {products.map(product => (

                    <Product  product={product}
              
                    key={product.id}
                    id={product.id}
                    handle_change_is_wished={product.handle_change_is_wished}
                    handle_change_is_added_to_cart={product.handle_change_is_added_to_cart}
                    imgSrc={product.imgSrc}
                    imgSrc2={product.imgSrc2}
                    titleProduct={product.titleProduct}
                    discount={product.discount}
                    price={product.price}
                
                         />
                         
                ))}
            </SectionProducts>
            <SectionProducts title='Wow' >
                {products.map(product => (

                    <Product  product={product}
                    handle_change_is_wished={product.handle_change_is_wished}
                    handle_change_is_added_to_cart={product.handle_change_is_added_to_cart}
                    key={product.id}
                    id={product.id}
                    imgSrc={product.imgSrc}
                    imgSrc2={product.imgSrc2}
                    titleProduct={product.titleProduct}
                    discount={product.discount}
                    price={product.price}
                   
                         />
                         
                ))}
            </SectionProducts>

           


        </div>
    )
}

export default Home

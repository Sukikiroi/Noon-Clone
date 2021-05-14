import React, { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from './CartReducer';

export const CartContext = createContext()

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const storagewished = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];
const initialState = { cartItems: storage, ...sumItems(storage), checkout: false ,wishlist:storagewished};

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const increase = (payload) => {
        dispatch({type: 'INCREASE', payload})
    }
    const addNote = (payload,ntt) => {
        dispatch({type: 'ADDNOTE', payload,nott:ntt })
    }

    const wished = payload => {
        dispatch({type: 'ADD_WISHLIST', payload})
    }
    const removewished = payload => {
        dispatch({type: 'REMOVE_WISHLIST', payload})
    }

    const decrease = payload => {
        dispatch({type: 'DECREASE', payload})
    }

    const addProduct = payload => {
        dispatch({type: 'ADD_ITEM', payload})
    }

    const removeProduct = payload => {
        dispatch({type: 'REMOVE_ITEM', payload})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }

    const handleCheckout = () => {
        console.log('CHECKOUT', state);
        dispatch({type: 'CHECKOUT'})
    }

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        wished,
        handleCheckout,
        removewished,
        addNote,
        ...state
    } 

    return ( 
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;

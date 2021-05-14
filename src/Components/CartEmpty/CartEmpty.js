import React from 'react'
import emptycart from './emptycart.svg'
import './cartempty.css'

const Cartempty = () => {
    return (
        <div className='cartempty' >
            <img className='cartempty__image' src={emptycart} />
            <h3 className='cartempty__message'>Your cart is empty</h3>
            <button className='cartempty__button'>Check out our offering</button>
        </div>
    )
}

export default Cartempty

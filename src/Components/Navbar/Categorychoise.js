import React from 'react'
import './categorychoose.css'

const Categorychoise = ({image,name}) => {
    return (
        <div className='categorychoices2' >
            <img className='categorychoices__image' src={image} />
            {name}
        </div>
    )
}

export default Categorychoise

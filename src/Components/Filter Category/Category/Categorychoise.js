import React from 'react'
import './categorychoose.css'

const Categorychoise = ({image,name}) => {
    return (
        <a className='categorychoices'  href={"Filtercategorycontainer/"+name}>
            <div>
            <img className='categorychoices__image' src={image} />
            <div className='categorychoices__name' >{name}</div>
            </div>
        </a>
    )
}

export default Categorychoise

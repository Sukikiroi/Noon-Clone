import React from 'react'
import './sectionproducts.css'
import { Typography } from "@material-ui/core";

const SectionProducts = ({ title, children }) => {
    return (
        <div>
            <Typography variant='h5'>
                {title}
            </Typography>
            <div className='sectionproducts' >

                {children}
            </div>
        </div>
    )
}

export default SectionProducts

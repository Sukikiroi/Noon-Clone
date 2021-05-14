import React from 'react'
import './downloadapp.css'

const Downloadapp = () => {
    return (
        <div className='downloadapp' >
            Save $3 with App & New User Only
            <div className='downloadapp__section2' >
                <img className='downloadapp__qr' src='https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/f/6/2/f621f61ff6_50038379_codeqr-futura.jpg' />
                <div>
                    <img src='https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png'  class="downloadapp_appStore"/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png' class="downloadapp_googlePlay"/>
                </div>
            </div>
        </div>
    )
}

export default Downloadapp

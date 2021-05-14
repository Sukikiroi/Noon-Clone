import React from 'react'
import PlaceIcon from '@material-ui/icons/Place';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import { Tooltip } from 'antd';

const Timeline = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} >

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',width:'100%' }} >
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }} >
                    <PlaceIcon style={{ backgroundColor: 'lightgray', borderRadius: '50px', padding: 1 }} />
                    <hr style={{ border: '2px solid lightgrey', width: '100%' }} />
                </div>
                <h3>Feb 22</h3>
                <Tooltip title='You can write here some text if you want or no' placement='bottom' >
                    <p>Order placed</p>
                </Tooltip>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',width:'100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }} >
                    <hr style={{ border: '2px solid lightgrey', width: '100%' }} />
                    <LocalShippingIcon style={{ backgroundColor: 'lightgray', borderRadius: '50px', padding: 1 }} />
                    <hr style={{ border: '2px solid lightgrey', width: '100%' }} />
                </div>
                <h3>Feb 23-25</h3>
                <Tooltip title='You can write here some text if you want or no' placement='bottom' >
                    <p>Order ships</p>
                </Tooltip>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end',width:'100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }} >
                    <hr style={{ border: '2px solid lightgrey', width: '100%' }} />
                    <CardGiftcardIcon style={{ backgroundColor: 'lightgray', borderRadius: '50px', padding: 1 }} />
                </div>
                <h3>Feb 26-Mars 12</h3>
                <Tooltip title='You can write here some text if you want or no' placement='bottom' >
                    <p>Delivered !</p>
                </Tooltip>
            </div>

        </div>
    )
}

export default Timeline
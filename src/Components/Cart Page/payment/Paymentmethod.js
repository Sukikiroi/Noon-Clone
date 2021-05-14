import { Divider, FormControlLabel, makeStyles, Radio, RadioGroup, Typography } from '@material-ui/core'
import clsx from 'clsx';
import React from 'react'
import { useHistory } from 'react-router-dom';
import PaymentFirstRow from '../../assets/PaymentFirstRow';
import './payment.css'


const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 30,
        height: 30,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 30,
            height: 30,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
});


// Inspired by blueprintjs
function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

var paypal = <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" viewBox="0 0 33 33" aria-labelledby="paymentspaypal-paypal" role="img" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M22.544 26.548c-.14.93-.844.93-1.524.93h-.387l.272-1.738c.016-.105.106-.183.21-.183h.178c.463 0 .9 0 1.126.266.133.16.174.396.123.723zm-.296-2.43h-2.565c-.175 0-.325.13-.352.305l-1.035 6.648c-.02.13.08.25.21.25h1.317c.124 0 .228-.09.247-.212l.293-1.885c.03-.175.178-.304.353-.304h.812c1.69 0 2.664-.827 2.92-2.465.114-.716.003-1.28-.328-1.673-.368-.434-1.015-.664-1.873-.664z" fill="#238EC2"></path><path d="M4.252 26.548c-.14.93-.843.93-1.523.93h-.39l.27-1.738c.018-.105.107-.183.213-.183H3c.463 0 .9 0 1.126.266.134.16.175.396.124.723zm-.296-2.43H1.392c-.176 0-.325.13-.352.305L.003 31.07c-.02.13.08.25.21.25H1.44c.176 0 .325-.13.352-.304l.28-1.793c.027-.175.177-.304.352-.304h.812c1.69 0 2.664-.827 2.92-2.465.113-.716.003-1.28-.33-1.673-.364-.434-1.01-.664-1.87-.664z" fill="#253667"></path><path d="M9.91 28.933c-.12.71-.676 1.185-1.386 1.185-.356 0-.64-.115-.825-.335-.183-.217-.25-.527-.194-.872.11-.7.676-1.192 1.376-1.192.35 0 .632.117.82.338.187.223.26.535.207.878zm1.71-2.417h-1.227c-.105 0-.194.078-.21.183l-.055.345-.086-.126c-.266-.39-.858-.52-1.45-.52-1.357 0-2.516 1.04-2.74 2.496-.12.727.048 1.422.456 1.907.375.446.91.63 1.546.63 1.094 0 1.7-.71 1.7-.71l-.054.346c-.02.13.08.25.21.25h1.107c.175 0 .324-.13.352-.305l.662-4.25c.02-.13-.08-.25-.212-.25z" fill="#253667"></path><path d="M28.2 28.933c-.117.71-.674 1.185-1.385 1.185-.356 0-.64-.115-.824-.335-.18-.217-.25-.527-.19-.872.11-.7.676-1.192 1.375-1.192.35 0 .632.117.82.338.187.223.26.535.207.878zm1.713-2.417h-1.228c-.105 0-.195.078-.21.183l-.055.345-.086-.126c-.266-.39-.86-.52-1.45-.52-1.357 0-2.516 1.04-2.742 2.496-.117.727.05 1.422.457 1.907.373.446.91.63 1.545.63 1.093 0 1.7-.71 1.7-.71l-.055.346c-.02.13.08.25.212.25h1.106c.175 0 .325-.13.352-.305l.664-4.25c.02-.13-.08-.25-.21-.25z" fill="#238EC2"></path><path d="M18.162 26.518h-1.234c-.118 0-.23.058-.295.157L14.93 29.21l-.72-2.436c-.046-.153-.185-.257-.343-.257h-1.213c-.147 0-.25.145-.202.285l1.36 4.033-1.282 1.823c-.1.144 0 .342.175.342h1.235c.117 0 .226-.058.293-.155l4.105-5.99c.098-.142-.003-.338-.176-.338" fill="#253667"></path><path d="M31.36 24.3l-1.052 6.77c-.02.13.08.25.21.25h1.06c.175 0 .324-.13.35-.304l1.042-6.648c.02-.13-.08-.25-.212-.25H31.57c-.104 0-.193.078-.21.183" fill="#238EC2"></path><path d="M15.008 5.497c.044-.28.22-.51.46-.625.11-.053.23-.082.358-.082h5.184c.614 0 1.186.04 1.71.126.15.024.295.052.437.084.14.032.278.067.41.107l.197.06c.257.088.497.19.717.307.26-1.673 0-2.812-.895-3.843C22.598.497 20.818.01 18.54.01h-6.614c-.466 0-.862.342-.935.807L8.24 18.47c-.054.35.212.664.56.664h4.084L15.01 5.497" fill="#253667"></path><path d="M24.48 5.474c.26-1.673 0-2.812-.896-3.843C22.598.497 20.818.01 18.54.01h-6.614c-.466 0-.862.342-.935.807L8.24 18.47c-.054.35.212.664.56.664h4.084l-.28 1.806c-.048.305.184.58.49.58h3.44c.408 0 .755-.3.82-.706l.032-.177.65-4.156.04-.227c.064-.407.41-.707.818-.707h.515c3.334 0 5.944-1.37 6.707-5.33.32-1.654.154-3.035-.69-4.006-.254-.295-.57-.538-.94-.736" fill="#238EC2"></path><path d="M24.48 5.474c.26-1.673 0-2.812-.896-3.843C22.598.497 20.818.01 18.54.01h-6.614c-.466 0-.862.342-.935.807L8.24 18.47c-.054.35.212.664.56.664h4.084l1.026-6.575-.03.204c.07-.465.464-.807.93-.807h1.94c3.81 0 6.795-1.565 7.667-6.092.026-.134.048-.264.068-.392" fill="#20274F"></path></g><title id="paymentspaypal-paypal">Paypal</title></svg>
var masterCard = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.39 86.9" width="15%" height="15%" aria-labelledby="paymentsmastercard-2-mastercard" role="img" focusable="false">
    <title id="paymentsmastercard-2-mastercard">Mastercard</title>
    <g class="a" style={{opacity:0}}>
        <rect style={{fill:'#fff'}} class="b" width="131.39" height="86.9"></rect>
    </g>
    <rect style={{fill:'#ff5f00'}} class="c" x="48.37" y="15.14" width="34.66" height="56.61"></rect>
    <path style={{fill:'#eb001b'}} class="d" d="M51.94,43.45a35.94,35.94,0,0,1,13.75-28.3,36,36,0,1,0,0,56.61A35.94,35.94,0,0,1,51.94,43.45Z"></path>
    <path style={{fill:'#f79e1b'}} class="e" d="M120.5,65.76V64.6H121v-.24h-1.19v.24h.47v1.16Zm2.31,0v-1.4h-.36l-.42,1-.42-1h-.36v1.4h.26V64.7l.39.91h.27l.39-.91v1.06Z"></path>
    <path style={{fill:'#f79e1b'}} class="e" d="M123.94,43.45a36,36,0,0,1-58.25,28.3,36,36,0,0,0,0-56.61,36,36,0,0,1,58.25,28.3Z"></path>
</svg>


const Paymentmethod = () => {

    const history = useHistory();
    function handleClick__go_to_checkout() {
        history.push("/checkout");
    }

    return (
        <div className='paymentmethod'>
            {/* <Typography variant='h6' >How will you pay</Typography> */}
            <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                {/* <FormControlLabel value="female" control={<StyledRadio />} label={masterCard} />
                <FormControlLabel disabled value="male" control={<StyledRadio />} label={paypal} /> */}
                <FormControlLabel value="other" control={<StyledRadio />} label="Cash on delivery"  checked/>
            </RadioGroup>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                <Typography variant='body1' >Item(s) total</Typography>
                <Typography variant='body1' >USD 330.99</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                <Typography variant='body1' >discount</Typography>
                <Typography variant='body1' >-USD 30.25</Typography>
            </div>

            <Divider style={{ margin: '15px 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                <Typography variant='h6' >Subtotal</Typography>
                <Typography variant='body1' >USD 230.99</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                <Typography variant='body1' >Shipping</Typography>
                <Typography variant='body1' >49.55</Typography>
            </div>

            <Divider style={{ margin: '15px 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                <Typography variant='body1' >Total (2 items)</Typography>
                <Typography variant='body1' >USD 319.99</Typography>
            </div>

            <button onClick={handleClick__go_to_checkout} className='paymentmethod__button' >Proceed to checkout</button>

        </div>
    )
}

export default Paymentmethod

// import React from 'react'

// const PaymentFirstRow = () => {
//     return (
//         <div>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.39 86.9" width="100%" height="100%" aria-labelledby="paymentsmastercard-2-mastercard" role="img" focusable="false">

//                 <title id="paymentsmastercard-2-mastercard">Mastercard</title>
//                 <g class="a">
//                     <rect class="b" width="131.39" height="86.9"></rect>
//                 </g>
//                 <rect class="c" x="48.37" y="15.14" width="34.66" height="56.61"></rect>
//                 <path class="d" d="M51.94,43.45a35.94,35.94,0,0,1,13.75-28.3,36,36,0,1,0,0,56.61A35.94,35.94,0,0,1,51.94,43.45Z"></path>
//                 <path class="e" d="M120.5,65.76V64.6H121v-.24h-1.19v.24h.47v1.16Zm2.31,0v-1.4h-.36l-.42,1-.42-1h-.36v1.4h.26V64.7l.39.91h.27l.39-.91v1.06Z"></path>
//                 <path class="e" d="M123.94,43.45a36,36,0,0,1-58.25,28.3,36,36,0,0,0,0-56.61,36,36,0,0,1,58.25,28.3Z"></path>
//             </svg>

//             <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 54 18" version="1.1" aria-labelledby="paymentsvisa-2-visa" role="img" focusable="false">
//             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                 <path d="M20.4888889,0.322218392 L13.4222222,17.7675946 L8.8,17.7675946 L5.33333333,3.82049964 C5.11111111,2.94592933 4.93333333,2.66974923 4.31111111,2.3015091 C2.94183443,1.61896514 1.49263492,1.1238228 0,0.828548573 L0.0888888889,0.322218392 L7.51111111,0.322218392 C8.51437428,0.32690813 9.36403311,1.08954942 9.51111111,2.11738903 L11.3333333,12.1979626 L15.8666667,0.322218392 L20.4888889,0.322218392 Z M38.5777778,12.0598726 C38.5777778,7.45687094 32.4444444,7.18069084 32.4888889,5.15537012 C32.4888889,4.51094989 33.0666667,3.86652966 34.3555556,3.68240959 C35.8342967,3.5394088 37.3230136,3.80962598 38.6666667,4.46491987 L39.4222222,0.782518556 C38.1172974,0.263564533 36.7311549,-0.00170820448 35.3333333,8.27692349e-06 C31.0222222,8.27692349e-06 28,2.39356913 27.9555556,5.75376033 C27.9111111,8.28541123 30.1333333,9.66631173 31.7777778,10.494852 C33.4222222,11.3233923 34.0444444,11.9217825 34.0444444,12.6582628 C34.0444444,13.8090132 32.6666667,14.3613734 31.4222222,14.3613734 C29.8583806,14.4061465 28.3105619,14.0252266 26.9333333,13.256653 L26.1333333,17.0771444 C27.6723314,17.7168939 29.3197317,18.029953 30.9777778,17.9977447 C35.5555556,18.0437747 38.5333333,15.6962439 38.5777778,12.0598726 L38.5777778,12.0598726 Z M49.9555556,17.7675946 L54,17.7675946 L50.4888889,0.322218392 L46.7555556,0.322218392 C45.9362429,0.312052784 45.1949487,0.823879561 44.8888889,1.61105885 L38.3111111,17.7675946 L42.8888889,17.7675946 L43.7777778,15.1438837 L49.3777778,15.1438837 L49.9555556,17.7675946 Z M45.0666667,11.5995724 L47.3777778,5.06331008 L48.7111111,11.5995724 L45.0666667,11.5995724 Z M26.7111111,0.322218392 L23.1111111,17.7675946 L18.7555556,17.7675946 L22.3555556,0.322218392 L26.7111111,0.322218392 Z" fill="#1A1F71" fill-rule="nonzero"></path>
//             </g>
//             <title id="paymentsvisa-2-visa">Visa</title></svg>

//             <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 15 70 40" aria-labelledby="paymentsamex-2-american-express" role="img" focusable="false">
// <g fill="#006FCF">
// <path d="M55.6,40.3v-3.4h1.1V13.6H14V30l1.1-1.4v5.6H14v22h42.7V43.9c-0.1,0-1,0.1-1.1,0.1v-1.8V40.3L55.6,40.3z"></path>
// <path fill="#FFFFFF" d="M56.7,43.9v-7h-0.4H30.2l-0.7,1l-0.7-1h-7.6v7.5h7.6l0.7-1l0.7,1H35v-1.6h-0.1c0.6,0,1.1-0.1,1.6-0.3v1.9h3.3     v-1.1l0.8,1.1H55c0.4,0,0.8-0.1,1.1-0.2C56.4,44.1,56.6,44,56.7,43.9L56.7,43.9z M51.5,34.3h3.2v-7.5h-3.4v1.2l-0.8-1.2h-3v1.5     l-0.7-1.5h-4.9c-0.2,0-0.5,0-0.7,0.1c-0.2,0-0.4,0.1-0.6,0.1c-0.1,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.3,0.2-0.4,0.2v-0.3v-0.3H23.8     l-0.4,1.3l-0.4-1.3h-3.7v1.5l-0.7-1.5h-3.1L14,30.1v3.6v0.7h2.2l0.4-1.1h0.8l0.4,1.1h16.6v-1.1l0.8,1.1h4.6v-0.2v-0.3     c0.1,0.1,0.2,0.1,0.4,0.2c0.1,0.1,0.3,0.1,0.4,0.2c0.2,0.1,0.3,0.1,0.5,0.1c0.3,0,0.5,0.1,0.8,0.1h2.8l0.4-1.1h0.8l0.4,1.1h4.6     v-1.1L51.5,34.3L51.5,34.3z"></path>
// <path d="M26.5,39.1v-1h-4v5h4v-1h-2.8v-1h2.8v-1h-2.8v-1H26.5L26.5,39.1z M30.7,43.1h1.5l-2-2.5l2-2.5h-1.5l-1.2,1.6     l-1.2-1.6h-1.5l2,2.5l-2,2.5h1.5l1.2-1.6L30.7,43.1L30.7,43.1z M32.4,38.1v5h1.2v-1.7h1.5c1.1,0,1.8-0.7,1.8-1.7     c0-1-0.7-1.7-1.7-1.7H32.4L32.4,38.1z M35.7,39.8c0,0.3-0.2,0.6-0.6,0.6h-1.4v-1.2h1.4C35.5,39.2,35.7,39.4,35.7,39.8L35.7,39.8z      M38.8,41.3h0.6l1.5,1.8h1.5l-1.7-1.9c0.9-0.2,1.4-0.8,1.4-1.6c0-0.9-0.7-1.6-1.7-1.6h-2.7v5h1.2V41.3L38.8,41.3z M40.2,39.1     c0.4,0,0.7,0.3,0.7,0.6c0,0.3-0.2,0.6-0.7,0.6h-1.4v-1.2H40.2L40.2,39.1z M47,39.1v-1h-4v5h4v-1h-2.8v-1h2.8v-1h-2.8v-1H47L47,39.1     z M50.3,42.1h-2.6v1h2.5c1.1,0,1.7-0.7,1.7-1.6c0-0.9-0.6-1.4-1.6-1.4h-1.2c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h2.2     l0.4-1h-2.6c-1.1,0-1.7,0.7-1.7,1.6c0,0.9,0.6,1.5,1.6,1.5h1.2c0.3,0,0.5,0.2,0.5,0.5C50.8,41.9,50.6,42.1,50.3,42.1L50.3,42.1z      M55.1,42.1h-2.6v1H55c1.1,0,1.7-0.7,1.7-1.6c0-0.9-0.6-1.4-1.6-1.4H54c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h2.2l0.4-1     h-2.6c-1.1,0-1.7,0.7-1.7,1.6c0,0.9,0.6,1.5,1.6,1.5h1.2c0.3,0,0.5,0.2,0.5,0.5C55.6,41.9,55.3,42.1,55.1,42.1L55.1,42.1z"></path>
// <path d="M18.6,33.1h1.4l-2.1-5h-1.6l-2.2,5h1.3l0.4-1.1h2.4L18.6,33.1L18.6,33.1z M16.6,30L17,29l0.4,0.9l0.4,1.1h-1.6     L16.6,30L16.6,30z M21.4,29.7l0-1.4l1.4,4.8h1.1l1.4-4.8l0,1.3v3.4h1.2v-5h-2.1l-1,3.6l-1-3.6h-2.1v5h1.2V29.7L21.4,29.7z      M31.4,29.1v-1h-4v5h4v-1h-2.8v-1h2.8v-1h-2.8v-1H31.4L31.4,29.1z M33.5,31.3h0.6l1.5,1.8h1.5l-1.7-1.9c0.9-0.2,1.4-0.8,1.4-1.6     c0-0.9-0.7-1.6-1.7-1.6h-2.7v5h1.2V31.3L33.5,31.3z M34.9,29.1c0.4,0,0.7,0.3,0.7,0.6c0,0.3-0.2,0.6-0.7,0.6h-1.4v-1.2H34.9     L34.9,29.1z M37.4,33.1h1.2v-2.2v-2.8h-1.2v2.8V33.1L37.4,33.1z M41.7,33.1L41.7,33.1l0.6-1.1h-0.4c-0.8,0-1.3-0.5-1.3-1.4v-0.1     c0-0.8,0.4-1.4,1.3-1.4h1.3v-1.1h-1.4c-1.6,0-2.4,1-2.4,2.5v0.1C39.4,32.1,40.3,33.1,41.7,33.1L41.7,33.1z M47,33.1h1.4l-2.1-5     h-1.6l-2.2,5h1.3l0.4-1.1h2.4L47,33.1L47,33.1z M45,30l0.4-0.9l0.4,0.9l0.4,1.1h-1.6L45,30L45,30z M49.8,30.1l0-0.4l0.3,0.4l1.9,3     h1.4v-5h-1.2V31l0,0.4L52,31l-1.9-2.9h-1.5v5h1.2V30.1L49.8,30.1z"></path>
// </g>
// <title id="paymentsamex-2-american-express">American Express</title></svg>
//         </div >
//     )
// }

// export default PaymentFirstRow
import React, { useState, useEffect } from 'react';

import Countdown from "react-countdown";
// Random component
const Completionist = () => <span>The price of this item will revert back to $85.00 at the end of this countdown.!</span>;
export default function FullWidthGrid() {
  

    return (
  <div>
    <h1> 
    
    <Countdown date={Date.now() + 6000}>
    {/* <Completionist /> */}
  </Countdown>
      </h1>
  </div> 

);
}

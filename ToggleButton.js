
import React, { useState } from "react";

export default function ToggleButton(){
    const [isOn, setIsOn] = useState(false);

    return(
        <>
        <h2>Toggle Button</h2>
        <button onClick={() => setIsOn(i => !i)} >{ 
            isOn ? 'ON' : 'OFF'
        }</button>
        </>
    )
 }

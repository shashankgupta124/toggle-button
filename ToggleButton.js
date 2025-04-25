
import React, { useState } from "react";

export default function ToggleButton(){
    const [isOn, setIsOn] = useState(false);

    return(
        <button onClick={() => setIsOn(i => !i)} >{ 
            isOn ? 'ON' : 'OFF'
        }</button>
    )
 }

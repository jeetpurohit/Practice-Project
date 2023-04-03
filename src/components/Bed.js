import "./Style.css"

import React from 'react'
import bedsheet from "../assets/Rectangle13.png"

const Bed = () => {
    return (
        <div className="bed">
            <div className="">
                <img className="bedsheet" src={bedsheet} alt="bedsheet" />
            </div>
            <div className="product">
                <h1>BEDSHEET SET</h1>
                <h4>$50.00  <strike> $220.00 </strike></h4>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,sed do elusmood tempor</p>
                <button className="btn">VIEW NOW</button>
            </div>
        </div>
    )
}

export default Bed

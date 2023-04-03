import "./Style.css"

import React from 'react'
import towel from "../assets/Rectangle6.png"
import gbox from "../assets/Rectangle7.png"
import plates from "../assets/Rectangle8.png"
import largbox from "../assets/Rectangle10.png"
import round from "../assets/Rectangle11.png"
import metal from "../assets/Rectangle12.png"


const Design = () => {
    return (
        <div className="card">
            <div className="grid-container">
                <div className="grid-items">
                    <div><img className="towel" src={towel} alt="towel" /></div>
                    <div className="t1">LINEN BEACH TOWEL <br /> 30$</div>
                </div>
                <div className="grid-items">
                    <div><img className="gbox" src={gbox} alt="gbox" /></div>
                    <div className="t1">Square Clear Glass Box   <br /> 30$</div>
                </div>
                <div className="grid-items">
                    <div><img className="plates" src={plates} alt="plates" /></div>
                    <div className="t1">4-pack Small Ceramic Plates<br /> 30$</div>
                </div>
                <div className="grid-items">
                    <div><img className="largbox" src={largbox} alt="largbox" /></div>
                    <div className="t1">Large Clear Glass Box   <br /> 30$</div>
                </div>
                <div className="grid-items">
                    <div><img className="round" src={round} alt="round" /></div>
                    <div className="t1">Round Jute Placemat   <br /> 30$</div>
                </div>
                <div className="grid-items">
                    <div><img className="metal" src={metal} alt="metal" /></div>
                    <div className="t1">Metal Wire Basket   <br /> 30$</div>
                </div>

            </div>

        </div>
    )
}

export default Design

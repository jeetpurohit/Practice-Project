import "./Style.css"

import React from 'react'
import inter from "../assets/image3.png"
import poat from "../assets/image4.png"

const Vintage = () => {
  return (
<div className="jeet">
    <div className="img">
      <img className="inter" src={inter} alt="inter" />

      <div className="inter-data">
        <h1>INY VINTAGE CHAIR</h1>
        <button className="btn">VIEW NOW</button>
      </div>

      <div className="imgee">
        <img className="poat" src={poat} alt="poat" />
        <div className="poat-data">
          <h1>LARGE TERRACOTA <br />VASE</h1>
          <button className="btn">VIEW NOW</button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Vintage

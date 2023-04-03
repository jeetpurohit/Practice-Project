import "./Style.css"
import chair from "../assets/image2.png"
import React from 'react'

const Rectangle = () => {
  return (
    <div className="imge">
        <img className="chair" src={chair} alt="chair"/>

    <div className="data">
        <p>HOT DEAL THIS WEEK</p>
        <h1>SALE UP 50% <br />MORDRN FURNITURE</h1>
        <button className="btn">VIEW NOW</button>
    </div>
    

    </div>

    
  )
}
export default Rectangle
 


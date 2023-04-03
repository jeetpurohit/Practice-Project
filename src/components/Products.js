import "./Style.css"

import React from 'react'
import foot from "../assets/Rectangle26.png"
import seat from "../assets/Rectangle27.png"
import glass from "../assets/Rectangle28.png"
import egg from "../assets/Rectangle29.png"
import bambo from "../assets/Rectangle33.png"
import basket from "../assets/Rectangle34.png"
import cups from "../assets/Rectangle30.png"
import napkin from "../assets/Rectangle31.png"
import plate from "../assets/Rectangle8.png"


const Products = () => {
  return (
  <>
  <div className="card">

      <h1 >TOP RATING</h1>
  </div>
    <div className="card">
      <div className="grid-container">
        <div className="grid-item">
          <div><img className="foot" src={foot} alt="foot" /></div>
          <div className="a1">Tray <br /> with Foot <br /> 30$</div>
        </div>
        <div className="grid-item">
          <div> <img className="seat" src={seat} alt="seat" /> </div>
          <div className="b2">Twill <br /> Seat Cushion <br />30$ </div>
        </div>
        <div className="grid-item">
          <div><img className="glass" src={glass} alt="glass" /> </div>
          <div className="c3">Fluted Beverage <br /> Glass <br />30$ </div>
        </div>
        <div className="grid-item">
          <div><img className="egg" src={egg} alt="egg" /> </div>
          <div className="c3">Ceramic <br /> Egg Cup <br />30$ </div>
        </div>
        <div className="grid-item">
          <div><img className="bambo" src={bambo} alt="bambo" /> </div>
          <div className="c3">Small <br />Bamboo Box  <br />30$ </div>
        </div>
        <div className="grid-item">
          <div><img className="basket" src={basket} alt="basket" /> </div>
          <div className="c3">Metal Cutlery <br />Basket  <br />30$ </div>
        </div>
        <div className="grid-item">
          <div><img className="cups" src={cups} alt="cups" /> </div>
          <div className="c3">4-pack Ceramic <br />Cups  <br />30$ </div>
        </div>
        <div className="grid-item">
          <div><img className="napkin" src={napkin} alt="napkin" /> </div>
          <div className="c3"> 2-pack Linen  <br />Napkins  <br />30$ </div>
        </div>
        <div className="grid-item">
          <div><img className="plate" src={plate} alt="plate" /> </div>
          <div className="c3"> Glazed Stoneware <br /> Plate <br />30$ </div>
        </div>
      </div>
      
    </div>
          <button className="btnn"> LOAD MORE PRODUCTS</button>

    </>
  )
}

export default Products

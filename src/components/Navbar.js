import "./Style.css"

import React from 'react'
import { Link } from "react-router-dom"
import truk from "../assets/Vector.png"
import caseback from "../assets/case.png"
import support from "../assets/support.png"
import srch from "../assets/search.png"
import shop from "../assets/Group43.png"
import hrt from "../assets/Heart.png"
import man from "../assets/Group40.png"


const Navbar = () => {
  return (
    <>
      <div className="header">

        <h1>MOODY STUDIO</h1>
        <div className="social">

          <img className="srch" src={srch} alt="srch" />
          <img className="man" src={man} alt="man" />
          <img className="shop" src={shop} alt="shop" />
          <img className="hrt" src={hrt} alt="hrt" />

        </div>

      </div>
      <div className="nev-menu">
        <ul className="menu">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/Store">Store </Link>
          </li>
          <li>
            <Link to="/Acessories">Accessories </Link>
          </li>

          <li>
            <Link to="/Brand">Brand </Link>
          </li>
          <li>
            <Link to="/Pages">Pages </Link>
          </li>
          <li>
            <Link to="/AboutUs">AboutUs </Link>
          </li>
          <li>
            <Link to="/News">News </Link>
          </li>
          <li>
            <Link to="/ContactUs">ContactUs </Link>
          </li>
        </ul>
      </div>
      <div className="truck">
        <img className="truk" src={truk} alt="truk" />
        <p>free shiping</p>

        <div className="cc">
          <img className="caseback" src={caseback} alt="caseback" />
          <p>100% MONEY BACK</p>

        </div>

        <div className="dd">
          <img className="support" src={support} alt="support" />
          <p>100% MONEY BACK</p>

        </div>

      </div>
    </>
  )
}

export default Navbar

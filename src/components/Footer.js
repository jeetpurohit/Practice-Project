import "./Style.css"

import React from 'react'
import {FaFacebook , FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-contant">
            <h1>URBAN OUTFITTERS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.</p>
            <p>121 king street, Melbourne 3000 <br />
            +61 3 8376 6284 <br />
            contact@urbanoutfitters.com
            </p>
            <div className="social">
                    <FaFacebook size={20} style={{ color: "#fff", marginRight: "2.5rem" }} />
                    <FaInstagram size={20} style={{ color: "#fff", marginRight: "2.5rem" }} />
                    <FaTwitter size={20} style={{ color: "#fff", marginRight: "2.5rem" }} />
                    <FaYoutube size={20} style={{ color: "#fff", marginRight: "2.5rem" }} />
                    </div>
            
        </div>
        <div className="loacation">
            <h4>SHOPPING</h4>
            <p>Your cart</p>
            <p>Your orders</p>
            <p>Compared items</p>
            <p>Wishlist items</p>
            <p>Shipping detail </p>

        </div>
        <div>
            <h4>MORE LINK</h4>
            <p>Blog</p>
            <p>Gift Center</p>
            <p>Buying Guides</p>
            <p>New Arrivals</p>
            <p>Clearance</p>
        </div>
        <div className="line">
            <h4>FROM THE BLOG</h4>

            <p style={{display:"flex"}}>
                 <h2>26</h2>may
                  <br /> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. <br />3 comments </p>
            
           <div className="ab">
           <p style={{display:"flex"}}>
             <h2>27</h2> may <br />
           Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. <br />3 comments
            </p>
           </div> 
        </div>
        
      
    </div>
  )
}

export default Footer

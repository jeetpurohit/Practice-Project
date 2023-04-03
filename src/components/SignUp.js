import "./Style.css"

import React from 'react'
import {HiOutlineMail} from "react-icons/hi"


const SignUp = () => {
  return (
<>
    <div className="collection">
        <div>

        <h1>SING UP FOR THE NEWSLETTER</h1>
        <p>Subscribe for the latest stories and promotions</p>
        </div>

        <div className="abc">
            <form>
                <label>
                    <input type="email" placeholder="Enter your e-mail address"/>
                </label>
            </form>
            <div className="mailsvg" >

            <button style={{height:"32px"}}><HiOutlineMail size={30}/></button>
            </div>
        </div>
      
    </div>
</>
  )
}

export default SignUp

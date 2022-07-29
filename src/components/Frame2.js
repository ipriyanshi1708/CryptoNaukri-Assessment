import React from 'react'
import "./Frame2.css"
import googleicon from "../icons_google.svg"
import {Link} from "react-router-dom"

const Frame2 = () => {
  return (
    <div>
    <a href="/">
    <div className="back">Back</div>
    </a>
    <div className="step">STEP 01/03</div>
<div className="personal_info">Personal Info.</div>
<div className="register">Register Individual Account!</div>
      <div className="register_text">For the purpose of industry regulation, your details are required.</div>

      <form >
      <label className='fullname labeltag'>Your Fullname*</label>
      <input type="text" placeholder='Invictus innocent' className='name_input' required/>
      <label className='email labeltag'>Email Address*</label>
      <input type="email" placeholder='Enter email address' className='email_input' required/>
      <label className='password labeltag'>Enter Password*</label>
      <input type="password" placeholder='Enter email address' className='password_input' required/>
      <div className="show">Show</div>
      <input type="checkbox" className='checkbox' required />
      <label className='labeltag agree'>I agree to terms & conditions
      </label>
      <Link to="/Frame3">
      <button className='btn'>Register Account</button>
      </Link>
      <div className="or labeltag">or</div>
      <button className='googlebtn'>Register with Google</button>
      <img src={googleicon} alt="googleicon" className='google_icon' />
      </form>
    </div>
  )
}

export default Frame2

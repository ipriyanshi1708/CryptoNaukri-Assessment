import React from 'react'
import "./Frame4.css"
import group from "../Group.svg"
import {Link} from "react-router-dom"

const Frame4 = () => {
  return (
    <div>
          <a href="/Frame3">
              <div className="back">Back</div>
          </a>
          <div className="step">STEP 03/03</div>
          <div className="personal_info bank">Bank Verification</div>
          <div className="register">Complete Your Profile!</div>
      <div className="register_text">For the purpose of industry regulation, your details are required.</div>

      <form>
        <label className='labeltag verification'>Bank verification number (BVN)</label>
        <input type="text" className='verification_box' placeholder="090912345567" />
        <img src={group} alt="group" className='group' />
        <Link to="/"> 
        <button className="btn frame4btn">Save & Continue</button>
        </Link>
        <div className="labeltag safe frame4safe">Your info is safely secured</div>
      </form>
    </div>
  )
}

export default Frame4

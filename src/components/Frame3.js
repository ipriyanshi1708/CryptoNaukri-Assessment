import React from 'react'
import "./Frame3.css"
import vector from "../Vector.svg"
import { Link } from "react-router-dom"

const Frame3 = () => {
  return (
    <div>
          <a href="/">
              <div className="back">Back</div>
          </a>
          <div className="step">STEP 02/03</div>
          <div className="personal_info">Residency Info.</div>
          <div className="register">Complete Your Profile!</div>
          <div className="register_text">For the purpose of industry regulation, your details are required.</div>

          <form>
            <label className="labeltag phone_label">Phone Number
            </label>
            <input type="text" placeholder='090912345567' className='number_box' />
            <img src={vector} alt="vector" className='vector' />
              <select className='dropdown1 labeltag'>
                  <option value="+234">+234</option>
                  <option value="+91">+91</option>
                  <option value="+432">+432</option>
                  <option value="+71">+71</option>
              </select>
            <label className="labeltag address_label">Your Address</label>
            <input type="text" placeholder='Please enter address' className='address_box' />
            <label className="labeltag residence_label">Country of Residence</label>
              <select className='dropdown2 labeltag' placeholder='Please Select'>
                  <option value="india">India</option>
                  <option value="japan">Japan</option>
                  <option value="australia">Australia</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="indonesia">Indonesia</option>
                  <option value="china">China</option>
                  <option value="bangladesh">Bangladesh</option>
                  <option value="africa">Africa</option>
              </select>
              <Link to="/Frame4">
              <button className="btn">Save & Continue</button>
              </Link>
              <div className="labeltag safe frame3safe">Your info is safely secured</div>
          </form>
    </div>
  )
}

export default Frame3

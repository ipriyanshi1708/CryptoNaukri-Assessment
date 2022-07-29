import React from 'react'
import Individual_logo from "../Individual_logo.svg"
import user from "../user.svg"
import "./Frame1.css"
import Arrow from "../Arrow.svg"
import Image2 from "../Image2.svg"
import briefcase from "../briefcase.svg"
import {Link} from "react-router-dom"

const Frame1 = () => {
  return (
    <div>
      
      <div className="signin">Already have an account? Sign In</div>
      <div className="joinus">Join Us</div>
      <div className="text">To begin this journey, tell us what type of account you'd opening.</div>
      <div className="box1">
      <Link to="/Frame2">
      <img src={Arrow} alt="arrow" className='arrow' />
      </Link>
      </div>
      <img src={Individual_logo} alt="individual_logo" className='individual_logo' />
      <img src={user} alt="user" className='user' />
      <div className="individual">Individual</div>
      <div className="individual_text">Personal account to manage all your activities</div>
      <div className="box2"></div>
      <img src={Image2} alt="image2" className='business_image' />
      <img src={briefcase} alt="briefcase" className='briefcase' />
      <div className="business">Business</div>
      <div className="business_text">Own or belong to a company, this is for you.</div>
    </div>
  )
}

export default Frame1

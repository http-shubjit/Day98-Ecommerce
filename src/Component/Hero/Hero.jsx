import React from 'react'
import './Hero.css'
import handicon from '../Assets/hand_icon.png'
import arrowicon from '../Assets/arrow.png'
import heroimg from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="heroleft">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="handhandicon">
            <p>new</p>
            <img src={handicon} alt="" />
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className="herolatestbtn">
          <div>Latest Collection</div>
          <img src={arrowicon} alt="" />
        </div>
      </div>
      <div className="heroright">
        <img src={heroimg} alt="" />
      </div>
    </div>)
}

export default Hero
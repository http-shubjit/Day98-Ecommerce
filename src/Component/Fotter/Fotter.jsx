import React from 'react'
import './Fotter.css'
import fotterlogo from '../Assets/logo_big.png'
import instagramicon from '../Assets/instagram_icon.png'
import pintresticon from '../Assets/pintester_icon.png'
import whtasappicon from '../Assets/whatsapp_icon.png'
const Fotter = () => {
  return (
    <div className="fotter">
      <div className="fotterlogo">
        <img src={fotterlogo} alt="" />
        <p>SHOPPER</p>
      </div>

      <ul className="fotterlink">
        <li>Company</li>
        <li>Product</li>
        <li>Oficess</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="fottersocialicon">
        <div className="fottericoncontainer">
          <img src={instagramicon} alt="" />
        </div>
        <div className="fottericoncontainer">
          <img src={pintresticon} alt="" />
        </div>
        <div className="fottericoncontainer">
          <img src={whtasappicon} alt="" />
        </div>
      </div>
      <div className="fottercopyright">
        <hr />
        <p>Copyright @2024-All Right Reserved</p>

      </div>
    </div>
  )
}

export default Fotter
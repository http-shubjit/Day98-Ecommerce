import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>GET EXCLUSIVE OFFER ON YOUR EMAIL</h1>
      <p>Subscribe to our newsletter and stay update</p>
      <div><input type="email" placeholder='Enter Email' />
        <button>Subscribe</button>
      </div>

    </div>)
}

export default Newsletter
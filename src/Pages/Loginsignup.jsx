import React from 'react'
import './Loginsignup.css'

const Loginsignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignupcontainer">
        <h1>Sign up</h1>
        <div className="loginsignupfiel">
          <input type="text" name="" id="" placeholder='Your Name' />
          <input type="email" name="" id="" placeholder='Your Email' />
          <input type="password" name="" id="" placeholder='Password' />
        </div>
        <button >Continue</button>
        <p className='loginsignuplogin'>Already Have Account? <span>Login here</span></p>
        <div className="logisignupagree">
          <input type="checkbox" name="" id="checkbox" />
          <label htmlFor="checkbox">By Continuing , iagre to the term of use & condition Property</label>
        </div>

      </div>
    </div>


  )

}

export default Loginsignup
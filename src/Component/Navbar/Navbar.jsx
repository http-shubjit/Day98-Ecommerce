import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";


import logo from '../Assets/logo.png'
import carticon from '../Assets/cart_icon.png'
import './Navbar.css'
import { Shopcontext } from '../../Context/Shopcontext';

const Navbar = () => {
  const { gettotalcartitem } = useContext(Shopcontext)
  const [menu, setmenu] = useState("SHOP")

  console.log("redering")
  return (
    <div className='navbar'>
      <div className="navlogo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="navmenu">
        <li onClick={() => setmenu("SHOP")}> <Link to="/" style={{ textDecoration: 'none' }}>SHOP </Link> {menu === "SHOP" ? <hr /> : <></>}</li>
        <li onClick={() => setmenu("MENS")}> <Link to="/mens" style={{ textDecoration: 'none' }}>MENS </Link>   {menu === "MENS" ? <hr /> : <></>}</li>
        <li onClick={() => setmenu("WOMENS")}> <Link to="/womens" style={{ textDecoration: 'none' }}>WOMENS</Link>  {menu === "WOMENS" ? <hr /> : <></>}</li>

        <li onClick={() => setmenu("KIDS")}><Link to='/kids' style={{ textDecoration: 'none' }}>KIDS</Link>
          {menu === "KIDS" ? <hr /> : <></>}</li>
      </ul>
      <div className="navlogincart">
        <Link to='login' > <button>LOGIN</button></Link>
        <Link to='/cart'><img src={carticon} alt="" /></Link>

        <div className="navcartcount">{gettotalcartitem()}</div>
      </div>
    </div>
  )
}

export default Navbar
import React, { useContext } from 'react'
import './Cartitems.css'
import { Shopcontext } from '../../Context/Shopcontext'


import removeicon from '../Assets/cart_cross_icon.png'
const Cartitems = () => {
  const { gettotalcartamount, allproducrt, cartitem, removefromcard } = useContext(Shopcontext)

  return (
    <div className='cartitems'>
      <div className="cartitemformatmain">
        <p>Products</p>
        <p>Tittle</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allproducrt.map((e) => {
        if (cartitem[e.id] > 0) {
          return <div>
            <div className="classitemformat cartitemformatmain">
              <img src={e.image} className='cartitemproducticon' alt="" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitemquantity'>{cartitem[e.id]}</button>
              <p>${e.new_price * cartitem[e.id]}</p>
              <img src={removeicon} className='carticonremover' alt="" onClick={() => { removefromcard(e.id) }} />
            </div>
            <hr />
          </div>

        }
        return null
      })}
      <div className="cartitemdown">
        <div className="cartitemtottal">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitemtotalitem">
              <p>subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cartitemtotalitem">
              <p>Shiping Fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cartitemtotalitem">
              <h3>Total</h3>
              <h3>${gettotalcartamount()}</h3>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cartitemspromocode">
          <p>If You Have Promo Code Ente It Here</p>
          <div className="cartitempromobox">
            <input type="text" placeholder='Promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitems
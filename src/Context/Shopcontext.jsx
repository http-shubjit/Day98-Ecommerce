import React, { useState } from "react";
import { createContext } from "react";
import allproducrt from '../Component/Assets/all_product'


const getdefaultcart = () => {
  let cart = {};
  for (let index = 0; index < allproducrt.length + 1; index++) {
    cart[index] = 0;

  }
  return cart
}

const Shopcontext = createContext()

const Shopcontextprovider = (props) => {


  let [cartitem, setcartitem] = useState(getdefaultcart())

  let addtocard = (itemId) => {

    setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

  }
  let removefromcard = (itemId) => {
    setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

  }

  const gettotalcartamount = () => {
    let totalamount = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        let iteminfo = allproducrt.find((product) => product.id === Number(item))
        totalamount += iteminfo.new_price * cartitem[item]
      }
    }
    return totalamount

  }

  const gettotalcartitem = () => {
    let totalaitem = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        totalaitem += cartitem[item]
      }


    }
    return totalaitem

  }


  const contextvalue = { allproducrt, cartitem, addtocard, removefromcard, gettotalcartamount, gettotalcartitem }

  return (
    <Shopcontext.Provider value={contextvalue}>
      {props.children}
    </Shopcontext.Provider>
  )
}
export default Shopcontextprovider;
export { Shopcontext }
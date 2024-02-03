import React, { useContext } from 'react'
import './Shopcategory.css'
import { Shopcontext } from '../Context/Shopcontext'
import dropdownicon from '../Component/Assets/dropdown_icon.png'
import Item from '../Component/Items/Item'
const Shopcategory = (props) => {
  const { allproducrt } = useContext(Shopcontext)


  return (

    <div className="shopcategory">
      <img src={props.banner} alt="" className='shopcategorybanner' />
      <div className="shopcategoryindexsort">
        <p>
          <span>Showing 1-12</span>Out Of 36Products
        </p>
        <div className="shopcategorysort">
          Sort by <img src={dropdownicon} alt="" />
        </div>
      </div>
      <div className="shopcategoryproduct">
        {allproducrt.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.new_price} oldprice={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>

      <div className="shopcategoryloadmore">
        Explore More
      </div>
    </div>


  )
}

export default Shopcategory
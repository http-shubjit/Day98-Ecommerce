import React from 'react'
import './Popular.css'
import dataproduct from '../Assets/data'
import Item from '../Items/Item'
const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popularitem">
        {dataproduct.map((item, i) => <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.new_price} oldprice={item.old_price} />)}
      </div>


    </div>
  )
}

export default Popular
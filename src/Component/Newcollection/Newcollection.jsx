import React from 'react'
import './Newcollection.css'
import newcollection from '../Assets/new_collections'
import Item from '../Items/Item'

const Newcollection = () => {
  return (
    <div className="newcollection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newcollection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.new_price} oldprice={item.old_price} />
        })}
      </div>
    </div>


  )
}

export default Newcollection
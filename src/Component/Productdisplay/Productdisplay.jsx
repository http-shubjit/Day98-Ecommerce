import React, { useContext } from 'react'
import './Productdisplay.css'
import staricon from '../Assets/star_icon.png'
import stardullicon from '../Assets/star_dull_icon.png'
import { Shopcontext } from '../../Context/Shopcontext'

const Productdisplay = (props) => {
  const { product } = props;
  const { addtocard } = useContext(Shopcontext)
  return (
    <div className="productdisplay">
      <div className="productdisplayleft">
        <div className="productimglist">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplayimg">
          <img src={product.image} alt="" className='productdisplaymainimg' />
        </div>
      </div>
      <div className="productdisplayright">
        <h1>{product.name}</h1>
        <div className='productdisplayrightstar'>
          <img src={staricon} alt="" />
          <img src={staricon} alt="" />
          <img src={staricon} alt="" />
          <img src={staricon} alt="" />
          <img src={stardullicon} alt="" />
          <p>(120)</p>
        </div>
        <div className="productdisplayrightprices">

          <div className="productdisplayrightpricesold">
            ${product.old_price}
          </div>
          <div className="productdisplayrightpricesnew">
            ${product.new_price}
          </div>

        </div>
        <div className="productdisplayrightdescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, delectus provident est optio animi unde molestias eum asperiores quo, neque veritatis recusandae voluptas, nobis aliquid repudiandae dolorum nam consectetur! Fugit?
        </div>
        <div className="productdisplayrightsize">
          <h1>select size</h1>
          <div className="productdisplayrightsizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => { addtocard(product.id) }}
        >ADD TO CART</button>
        <p className='productdisplayrightcategory'> <span>Category:</span>Women,Tshirt,Corp Top </p>
        <p className='productdisplayrightcategory'> <span>Tags:</span>Modern,Latest </p>
      </div>
    </div>
  )
}

export default Productdisplay
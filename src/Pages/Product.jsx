import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Component/Breadcrums/Breadcrum';
import Productdisplay from '../Component/Productdisplay/Productdisplay';
import { Shopcontext } from '../Context/Shopcontext'
import Descriptionbox from '../Component/DescriptionBox/Descriptionbox';
import Relatedproduct from '../Component/Relatedproducts/Relatedproduct';


const Product = () => {
  const { allproducrt } = useContext(Shopcontext)
  const { productId } = useParams();


  const product = allproducrt.find((e) => e.id === Number(productId))

  return (
    <div className="product">
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <Descriptionbox />
      <Relatedproduct />

    </div>
  )
}

export default Product
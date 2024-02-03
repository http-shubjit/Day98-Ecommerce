import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offer from '../Component/Offers/Offer'
import Newcollection from '../Component/Newcollection/Newcollection'
import Newsletter from '../Component/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <Newcollection />
      <Newsletter />
    </div>
  )
}

export default Shop
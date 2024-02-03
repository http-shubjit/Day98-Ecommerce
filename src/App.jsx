import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Component/Navbar/Navbar'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Shopcategory from './Pages/Shopcategory'
import Product from './Pages/Product'
import Loginsignup from './Pages/Loginsignup'
import Fotter from './Component/Fotter/Fotter'
import menbanner from '../src/Component/Assets/banner_mens.png'
import womenbanner from '../src/Component/Assets/banner_women.png'
import kidbanner from '../src/Component/Assets/banner_kids.png'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory category="men" banner={menbanner} />} />
          <Route path='/womens' element={<Shopcategory category="women" banner={womenbanner} />} />
          <Route path='/kids' element={<Shopcategory category="kid" banner={kidbanner} />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Loginsignup />} />
        </Routes>
        <Fotter />
      </BrowserRouter>




    </div >
  )
}

export default App
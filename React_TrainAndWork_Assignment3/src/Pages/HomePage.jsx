import React from 'react'
import Slider from '../Components/HomeComponents/Slider'
import Banner from '../Components/HomeComponents/Banner'
import ProductList from '../Components/HomeComponents/ProductList'
import Client from '../Components/HomeComponents/Client'

function HomePage() {
  return (
    <div>
        {/* <Slider/> */}
        <Banner/>
        <ProductList/>
        <Client/>
    </div>
  )
}

export default HomePage
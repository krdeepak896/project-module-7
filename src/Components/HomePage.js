import { CounterContext } from './CounterContext'
import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Product from './Products/Product'
import Footer from './Footer/Footer'

function HomePage() {

  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <CounterContext.Provider value={{counter, setCounter}}>
        <Navbar />
        <Banner />
        <Product />
      </CounterContext.Provider>
        <Footer />
    </div>
  )
}

export default HomePage
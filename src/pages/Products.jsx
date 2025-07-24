import React, { useEffect } from 'react'
import Poster from '../components/products/Poster'
import Card from '../components/Card'
import ProductShow from '../components/products/ProductShow'

function Products() {
  useEffect(() => {
    document.title = "Explore Our Brews | CoffeeCraft Collection";
  }, [])
  return (
    <>
    <Poster/>
    <ProductShow/>
    
    </>
  )
}

export default Products
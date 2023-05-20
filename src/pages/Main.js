import './App.css';
import Nav from '../components/NavigationBar'
import React from 'react';
import Product from '../components/Product'
// import img1 from './components/photos/camera-32871_640.png'
// import img2 from './components/photos/istockphoto-1289373642-170667a.jpg'
// import img3 from './components/photos/charge-159707__340.webp'
// import img4 from './components/photos/speakers.jpeg'
import Carousel from '../components/Carousel';
import { useState } from 'react'
import Data from '../Data'
import Footer from '../components/Footer'

function App({basketItems, totalPrice, handleProductClick, emptyBasket, increment, count}) {
const [value, setValue] = useState('')




function handleSearch(item){
  setValue(item.target.value)
}



// useState below handles delete
const [product, setItem] = useState(Data)
// useState below handles autofill on product

const filteredData = product.filter((eachProduct) => eachProduct.productName.includes(value))


function deleteProduct(id){
  const newState = product.filter((item) => item.id !== id)
  setItem(newState)
}

const shopProducts = filteredData.map((item) => {
  return (
    <Product 
      key = {item.id}
      id = {item.id}
      img={item.img}
      price={item.price}
      title = {item.productTitle}
      overview={item.overview}
      basketTotal = {() => handleProductClick(item.price)}
      basketItems={() => basketItems(item)}
      increment = {() => increment()}
      handleDelete={() => deleteProduct(item.id)}

    />
  )
})



  return (
    <>
    <Nav incrementCount = {count} 
    clearBasket = {emptyBasket} 
    total = {totalPrice} 
    search={Data}
    searchValue={value}
    handleSearchValue={(event) => handleSearch(event)}
    setSearchValue={setValue}
    basketItems={basketItems}
    count={count}
     
    />
    <Carousel/>
    <div className='product-container'>{shopProducts}</div>
    <Footer/>
    </>

  )
}

export default App;

// Hello
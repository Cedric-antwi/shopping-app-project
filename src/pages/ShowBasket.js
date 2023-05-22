import React from 'react'
import { Link } from 'react-router-dom'
import BasketProducts from '../components/BasketProducts'



export default function ShowBasket({basketItems, totalPrice, decrement, increment, count, handleProductClick, itemQuantity, incrementItemsQ, decrementItemsQ}){

    // console.log(basketItems[1].defaultQuantity)

    const basketProducts = basketItems.map((item) => {
    if (count > 0){
        return (
          
          <BasketProducts
                key = {item.id}
                id = {item.id}
                img={item.img}
                title={item.productTitle}
                data={item}
                decrement={decrement}
                increment={increment}
                count={count}
                handleProductClick={handleProductClick}
                basketItems={basketItems}
                itemQuantity={itemQuantity}
                incrementItemsQ={incrementItemsQ}
                decrementItemsQ={decrementItemsQ}
            />
          
        )
    }
    })
    
    return (
        <>
        <button><Link to ={`/home`}>↩ Back to home page</Link></button>
        <h2 className='basket'>Your Basket</h2>
        {count === 0 && <h1 className="items-none">No items in basket</h1>}
        {count > 0 && <><p>Total Order Price: £{totalPrice}</p>
        <p>Basket : {count}</p></>}
        {basketProducts}
        </>
    )
}
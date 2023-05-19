import React from 'react'
import { Link } from 'react-router-dom'
import BasketProducts from '../components/BasketProducts'



export default function ShowBasket({basketItems, count, totalPrice}){
    // const location = useLocation();
    // const data = location.state?.state;
    // console.log(props.products)
    // console.log(props.basket)
    console.log(basketItems)

    const basketProducts = basketItems.map((item) => {
        return (
          
          <BasketProducts
                key = {item.id}
                id = {item.id}
                img={item.img}
                title={item.productTitle}
                cost={item.price}
                count={count}
                // thisState={basketItems}
                // set={set}
            />
          
        )
    })

    return (
        <>
        <button><Link to ={`/home`}>↩ Back to home page</Link></button>
        <h2 className='basket'>Your Basket</h2>
        <p>Total Order Price: £{totalPrice}</p>
        {basketProducts}
        </>
    )
}
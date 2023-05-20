import React from "react"
// import {useState} from 'react'

function BasketProducts(props){
    // const [basketQ, setBasketQ] = useState(props.data)

    // for (props.data.defaultQuantity in props.data) {
    //     console.log(props.data)
    // }
    // console.log(props.data)
    return (       
        <>
            <div className="basket-products">
            <div className='basket-img-box'>
                <img alt='' src={props.img} height="125px" width="225px"/>
            </div>
            <div className='basket-info'>
                <p>{props.title}</p>
                <p>Cost:£ {props.data.price}</p>
                <p>Quantity:{props.data.defaultQuantity}<button onClick={() => {props.increment(props.basketItems); props.handleProductClick(props.data.price); props.incrementItemsQ(props.data)}}>+</button><button onClick={() => {props.decrementItemsQ(props.data ,props.data.price)}}>-</button></p>
            </div>

        </div>
        </>
    )
}

export default BasketProducts
// add back props.increment and decrement

//gnna give decrement and increment function to dec/incItemsQ functions
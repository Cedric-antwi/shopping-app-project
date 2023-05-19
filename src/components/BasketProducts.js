import React from "react"
// import {useState} from 'react'
function BasketProducts(props){
    // const [price, setPrice] = useState(0)

    // const handleRemoveItem = (id) => {
    //     const arr = props.thisState.filter((item) => item.id !== id)
    //     props.set(arr)
    //     handlePrice()
    // }

    // const handlePrice = () => {
    //     let ans = 0
    //     props.thisState.map((item) => (ans += item.amount * item.price))
    //     setPrice(ans)
    // }
    return (
        <>
            <div className="basket-products">
            <div className='basket-img-box'>
                <img alt='' src={props.img} height="200px" width="300px"/>
            </div>
            <div className='basket-info'>
                <p>{props.title}</p>
                <p>Cost:£ {props.cost}</p>
                <p>Quantity: {}</p>
            </div>

        </div>
        </>
    )
}

export default BasketProducts

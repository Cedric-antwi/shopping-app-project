import React from "react"
// import {useState} from 'react'
function BasketProducts(props){
    return (
        <>
            <div className="basket-products">
            <div className='basket-img-box'>
                <img alt='' src={props.img} height="125px" width="225px"/>
            </div>
            <div className='basket-info'>
                <p>{props.title}</p>
                <p>Cost:£ {props.cost}</p>
                <p>Quantity:{props.data.defaultQuantity}<button>+</button><button>-</button></p>
            </div>

        </div>
        </>
    )
}

export default BasketProducts

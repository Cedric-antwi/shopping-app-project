import React from "react"


document.body.style.backgroundColor = "whitesmoke"
function BasketProducts(props){

    // function opacity(){
    //     if (props.data.defaultQuantity < 1){
    //         document.getElementById('basket-products').style.opacity = 0.5
    //     }
    // }
    return (       
        <>
        {/* {props.data.defaultQuantity < 1 && opacity()} */}
            <div className="basket-products" id="basket-products">
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

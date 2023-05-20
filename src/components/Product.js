import React from "react"
import { Link } from 'react-router-dom'

function Product(props){

    return (
        <>
        <div className="products">
            <div className="product-container">
                <img src={props.img} alt='tech products' height="250px" width="350px" id="product1"/>
                <div className="title">{props.title}</div>
                <button className="basket-btn" onClick={event => {props.increment(); props.basketTotal(props.price); props.basketItems()} }>Add to Basket</button>
                <span id="price">£:{props.price}</span>
                {/* <button className='delete' onClick={() => props.handleDelete()}>Delete Item</button> */}
                <button><Link to={`/overview/${props.id}`}>Overview</Link></button>
            </div>
        </div>
        </>
    )
}

export default Product

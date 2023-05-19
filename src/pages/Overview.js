import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../Data'
import { Link } from 'react-router-dom'


export default function Overview() {
    let { id } = useParams()

    // console.log(Data)
    
    

    // let product = <div className="product-container">
    //     <img src={props.database} alt='tech products' height="250px" width="350px" id="product1"/>
    //     <div className="title">{props.database}</div>
    // </div>
    
    return (
        <>
        <button><Link to ={`/home`} >↩ Back to home page </Link></button>
        <h2>Product Details</h2>
        <div className='p-overview'>
        <h3>{Data[(id - 1)].productTitle}</h3>
        <img src={Data[(id - 1)].img} alt='tech products' height="250px" width="350px" id="product1"/>
        <p className='p-overview-desc'>{Data[(id - 1)].overview}</p>
        </div>

        </>
    )
}
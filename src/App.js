import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './pages/Main'
import Overview from './pages/Overview'
import NoPage from './pages/NoPage'
import ShowBasket from './pages/ShowBasket'
import Data from './Data'
import React, {useState} from 'react'

export default function App2(){

const [basket, setBasket] = useState([])
const [count, setCount] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);
// ====ToDo====
// Decrement for basket
const increment = () => {
  setCount(count + 1);
};
const emptyBasket = () => {
  setCount(0);
  setTotalPrice(0);
  setBasket([])
};
const handleProductClick = (price) => {
  setTotalPrice((prevTotalPrice) => prevTotalPrice + parseFloat(price));
};


const basketItems = (item) => {
    console.log("here",item)
    if (basket.includes(item)){
        setCount(count + 1)
        item.defaultQuantity += 1
    } else {
        setBasket([...basket, item])  
    }

}


    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App />} />
                    <Route path="/home" element={<App 
                    basketItems={basketItems} 
                    totalPrice={totalPrice}
                    handleProductClick={handleProductClick}
                    emptyBasket={emptyBasket}
                    increment={increment}
                    count={count}
                    
                    />} />
                    <Route path="/overview/:id" element={<Overview/>} />
                    <Route path="/Basket" element={<ShowBasket basketItems={basket} count={count} totalPrice={totalPrice} data={Data} />}/>
                    <Route path="*" element={<NoPage />} /> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

// For the route with the path * we are saying all paths that arent defined should resort to this file path, no page.
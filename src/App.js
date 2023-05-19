import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './pages/Main'
import Overview from './pages/Overview'
import NoPage from './pages/NoPage'
import ShowBasket from './pages/ShowBasket'
// import Data from './Data'
import React, {useState} from 'react'

export default function App2(){

const [basket, setBasket] = useState([])
// const [quantity, setQuantity] = useState(0)


const basketItems = (item) => {
    // if (basket.indexOf(item) === -1) return basket;
    setBasket([...basket, item])
}


    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App />} />
                    <Route path="/home" element={<App basketItems={basketItems}/>} />
                    <Route path="/overview/:id" element={<Overview/>} />
                    <Route path="/Basket" element={<ShowBasket basketItems={basket} />}/>
                    <Route path="*" element={<NoPage />} /> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

// For the route with the path * we are saying all paths that arent defined should resort to this file path, no page.
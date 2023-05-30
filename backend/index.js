import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import {createPool} from "mysql2"

const app = express();
app.use(bodyParser.json())
dotenv.config();

const poolconnection = createPool({
    host: "127.0.0.1",
    user: "root",
    password: "Cedric2000",
    database: "shopping_app_db",
    connectionLimit: 12
})

app.get('/home', (req, res) => {
    poolconnection.query("select * from products", async (error, result) => {
        if (error) {
            throw new Error(error, 'something went wrong')
        }
        await res.send(result)
    })
})

app.get('/home/overview/:id', (req, res) => {
    const id = req.params.id
    poolconnection.query(`select * from products where id = ${id}`, async (error, result) => {
        if (error) {
            throw new Error(error, 'something went wrong')
        }
        await res.send(result)
    })
})
// get product from product table, post/insert product to basket/basket table
// add to basket
// was 'working' when changed to app.post
app.get('/basket/:id', (req, res) => {
    const id = req.params.id
    poolconnection.query(`select * from products where ID = ${id};`, async (error, result) => {
        if (error) {
            throw new Error('error1', error)
        } else {
            console.log(result)
            let insert = "insert into basket(ID, item_name, total_price, img, overview, item_id) values(?, ?, ?, ?, ?, ?)";
            poolconnection.query(insert,[result[0].ID, result[0].item_name, result[0].total_price, result[0].img, result[0].overview, id]
                 ,async (error, result2, fields) => {
                    await res.send(result2)
                // if (error) {
                //     throw new Error('error2', error)
                // } else {
                //     await res.send(result2)
                // }
            })
        }})
    })

app.post('/basket/:id', (req, res) => {
    const id = req.params.id
    poolconnection.query(`select * from products where ID = ${id};`, async (error, result) => {
        if (error) {
            throw new Error('error1', error)
        } else {
            console.log(result)
            let insert = "insert into basket(ID, item_name, total_price, img, overview, item_id) values(?, ?, ?, ?, ?, ?)";
            poolconnection.query(insert,[result[0].ID, result[0].item_name, result[0].total_price, result[0].img, result[0].overview, id]
                    ,async (error, result2, fields) => {
                    await res.send(result2)
            })
        }})
    })




// create table basket (
// 	ID int primary key,
//     item_name VARCHAR(255) NOT NULL,
//     total_price decimal(10, 2) NOT NULL,
//     img VARCHAR(2048) NOT NULL,
//     overview VARCHAR(255) NOT NULL,
//     item_id int,
//     foreign key(item_id) references products(ID)
// );


// app.get('/', (req, res) => {
//     res.send("hello")
// })

// app.get('/home', (req, res) => {
//     res.send(productData)
// })

// app.get('/overview/:id', (req, res) => {
//     const productId = req.params.id
//     const item = productData.filter(item => item.id === Number(productId))
//     console.log(item)
//     res.send(item)
// })
// // adds to a new array called basker
// //you need to use postman to check post reqs
// app.post('/addtobasket', (req, res) => {
//     const productId = req.params.id
//     const item = productData.filter(item => item.id === Number(productId))
//     basket.push(item)
//     res.send(basket)
// })

// app.listen(2000, (req, res) => {
//     console.log('listening on localhost 2000')
// })
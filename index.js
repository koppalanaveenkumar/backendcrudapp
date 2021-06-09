// app.js
const express = require('express');
const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
const app = express();
dotenv.config();

// Imports routes for the products
const product = require('./routes/product.route');

// Set uo mongoose connection

const db = require('./utilities/db.config');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
db.connectToDB();
// http://localhost:1234/products/test
app.use('/products', product)
// initialize our express app


app.listen(process.env.PORT, ()=>{
    console.log("Server started at PORT: " + `${process.env.PORT}`)
})
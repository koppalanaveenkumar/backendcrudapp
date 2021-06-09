// app.js
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();


// Imports routes for the products
const product = require('./routes/product.route');

// Set uo mongoose connection
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://naveenkumar:naveenkumar@ecommerce.wxgng.mongodb.net/fake?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true}),(err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Server Started")
    }
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// http://localhost:1234/products/test
app.use('/products', product)
// initialize our express app


app.listen(1234, ()=>{
    console.log("Server started at PORT: 1234")
})
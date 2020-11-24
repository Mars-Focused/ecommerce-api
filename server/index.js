const express = require('express')
const getProducts = require('./getProducts')
const products = require('../products.json')
const app = express()
const port = 3000

app.get('/api/products', (req, res) => {
    res.status(200).send(products)
})

app.listen(port, () => {
    console.log(`Ready at port: ${port}`)
})

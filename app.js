const express = require('express')
const transactionsRoutes = require('./src/routes/transactions.routes')
const productsRoutes = require('./src/routes/products.routes')
const userRoutes = require('./src/routes/users.routes')
const loginRoutes = require('./src/routes/sing.routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/sing', loginRoutes)
app.use('/users', userRoutes)
app.use('/products', productsRoutes)
app.use('/transactions', transactionsRoutes)

module.exports = app
const express = require('express')
const authRoutes = require('./routes/auth')
const orderRoutes = require('./routes/order')
const categoryRoutes = require('./routes/category')
const positionRoutes= require('./routes/position')
const analyticsRoutes = require('./routes/analytics')
const app = express()

app.use('/api/auth', authRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/position', positionRoutes)
app.use('/api/analytics', analyticsRoutes)


module.exports = app

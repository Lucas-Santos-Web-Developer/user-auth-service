const express = require('express')
const userRoutes = require('./src/routes/users')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', userRoutes)

app.listen(3000, () => console.log("servidor rodando"))
require('dotenv').config()

const express = require('express')
const app = express()
const router = require('./routes/blog')
const mongoose = require('mongoose')
const cors = require('cors');   



app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {})
    .catch((error) => {
        console.log(error)
    })

app.get('/', ( req, res, next) => {
    res.json({msg: 'Welcome to the app'})
    next()
})

app.use('/api/blog', router)


app.listen(process.env.PORT, () => {
    console.log(`Connected to DB. Listening on port ${process.env.PORT}`)
})
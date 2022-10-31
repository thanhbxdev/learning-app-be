const express = require('express')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://thanhbxdev:dlikelovek1@learning-app.pmgctz2.mongodb.net/?retryWrites=true&w=majority')
        console.log('connect DB')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

connectDB()
const app = express()

app.get('/', (req, res) => req.send("Hello World"))

const PORT = 5000

app.listen(PORT, () => console.log(`Server running PORT ${PORT}`))
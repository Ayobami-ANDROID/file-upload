const express = require('express')
const app = express()
const connectDB = require('./db/ConnectDb')
const dotenv = require('dotenv')
const router = require('./routes/user')
dotenv.config()

app.use(express.json())
app.use('/user',router)

const start = async () =>{
    try {
        await connectDB(process.env.Mongo_Url)
        app.listen(5000,()=>{
            console.log('listening on port 5000')
        })
    } catch (error) {
        console.log(error)
    }
}

start()
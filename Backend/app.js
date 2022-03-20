const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/book-routes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/books',router)


mongoose.connect("mongodb+srv://<username>:<password>@cluster0.jowek.mongodb.net/bookstore?retryWrites=true&w=majority"
).then(()=>{console.log("connected database")})
.then(()=>{
    app.listen(4000);
}).catch((err)=>{
    console.log(err);
})

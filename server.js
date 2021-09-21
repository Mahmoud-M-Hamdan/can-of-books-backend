'use strict'
const express = require('express') // require the express package
const app = express()
require("dotenv").config();

const cors = require('cors');
const PORT = process.env.PORT
const MONGO_SERVER = process.env.MONGO_SERVER
const {deleteBookController,createBookController,getBookController,updateBookController}=require('./Controllers/controller')

app.use(express.json())
app.use(cors())

const mongoose = require("mongoose");
// const { bookModel,bookSeed } = require("./Models/model");



mongoose.connect(`${MONGO_SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true });
// app.get('/seed-data', getBooks)
app.get('/',getBookController);
app.put('/update-book/:id',updateBookController)
app.delete('/delete-book/:id',deleteBookController)
app.post('/create-book',createBookController)


// function getBooks(req, res) {
//     bookModel.find({ }, function (err, bookData) {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(bookData)
//         }

//     })
// }
//bookSeed();




app.get('/', // our endpoint name
    function (req, res) { // callback function of what we should do with our request
        res.send('Hello World') // our endpoint function response
    })

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})


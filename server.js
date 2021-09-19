'use strict'
const express = require('express') // require the express package
const app = express()
require("dotenv").config();

const cors = require('cors');
const PORT = process.env.PORT
const MONGO_SERVER = process.env.MONGO_SERVER



app.use(cors())

const mongoose = require("mongoose");
const { bookModel } = require("./model");



mongoose.connect(`${MONGO_SERVER}/bookStore`, { useNewUrlParser: true, useUnifiedTopology: true });
app.get('/seed-data', getBooksByOwnerEmail)



function getBooksByOwnerEmail(req, res) {
    let ownerEmail = req.query.ownerEmail;
    bookModel.find({ email: ownerEmail }, function (err, bookData) {
        if (err) {
            res.send(err);
        } else {
            res.send(bookData)
        }

    })
}
/*
fillBestBooksWithData();
*/

function fillBestBooksWithData() {

    booksList.map(book => {
        let myBook = new bookModel({ title:book.title,description: book.description,status:book.status , email: book.email })
        myBook.save();
    });
}


app.get('/', // our endpoint name
    function (req, res) { // callback function of what we should do with our request
        res.send('Hello World') // our endpoint function response
    })

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})
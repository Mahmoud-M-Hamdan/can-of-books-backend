const mongoose = require("mongoose");

const Book = new mongoose.Schema({

    title: String,
    description: String,
    status: String,
    email: String


});


// This creates our model from the above schema, using mongoose's model method
const bookModel = mongoose.model("Product", Book)


booksList = [
    {
        title: "Mastery",
        description: "Lorem ipsum......",
        status: "Readed",
        email: 'book@gmailcom'
    },
    {
        title: "Mastery",
        description: "Lorem ipsum......",
        status: "Readed",
        email: 'book@gmailcom'
    },
    {
        title: "Mastery",
        description: "Lorem ipsum......",
        status: "Readed",
        email: 'book@gmailcom'
    },

]

function bookSeed() {

    booksList.map(book => {
        let myBook = new bookModel({
            title: book.title,
            description: book.description,
            status: book.status,
            email: book.email
        })
        myBook.save();
    });
}


// Export the Article model
module.exports = {

    bookModel,
    bookSeed
}



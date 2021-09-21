'use strict'
const { bookModel } = require('../Models/model')



const getBookController = (req, res) => {

    bookModel.find().then(data =>

        res.status(200).json(data)

    )

}

const createBookController = (req, res) => {

    let booklist = req.body
    let newBook = new bookModel(booklist)
    newBook.save()
    bookModel.find().then(data => {
        res.status(200).json(data)
    })
}

const deleteBookController = (req, res) => {

    let bookId = req.params.id
    bookModel.findByIdAndDelete(bookId).then(() => {

        bookModel.find().then(data => {
            res.status(200).json(data)

        })

    })


}

const updateBookController =async (req, res) => {

    let bookId = req.params.id
    let updateBook = req.body
    bookModel.findOne({ _id: bookId }).then(book => {
        book.title = updateBook.title;
        book.description = updateBook.description;
        book.status = updateBook.status;
        book.email = updateBook.email;
        book.save()
    })
  let  updateListBook = await bookModel.find({})
        res.status(200).json(updateListBook)


    }





    module.exports = { deleteBookController,createBookController, updateBookController, getBookController }




// const getBookController=(req,res)=>{
//     bookModel.find({}).then(data=>{
//         res.status(200).json(data)
//     })
// }

// const controllerCreateBook=async (req,res)=>{

// let {title,description,status,email}=req.body
// let newBoook=new bookModel({
//     "title": title,
//     "description": description,
//     "status": status,
//     "email": email,
// })
// newBoook.save()
// let BoookList=await bookModel.find({});
// res.status(201).json(BoookList);

// }


// const controllerDeleteBook=  (req,res)=>{
//     let id=req.params.id;
//     bookModel.findByIdAndDelete(id,async (err,data)=>{
//         if(err){
//             res.status(500).send("an error occured");
//         }
//         let BoookList= await bookModel.find({});
//         res.json(BoookList);

//     })
// }


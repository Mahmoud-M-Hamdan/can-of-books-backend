'use strict'


const {bookModel}=require("./model");

let bookController= (req,res)=>{
    bookModel.find().then(data=>{
         res.json(data);
     })  
}


module.exports={
    bookController,
}
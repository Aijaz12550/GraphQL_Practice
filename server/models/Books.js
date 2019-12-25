const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    name:String,
    id:String
})

const Book = mongoose.model('books', BookSchema )

module.exports = Book;
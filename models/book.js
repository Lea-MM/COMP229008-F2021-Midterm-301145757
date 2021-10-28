/*  File Name: book.js
    Author's Name: Lea Marie Magbalot
    Student ID: 301145757
    Web App Name: Favorite Book List
*/


let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);
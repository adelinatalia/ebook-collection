const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        lowercase: true,
        minlength: [3, 'Minimum title length is 3 characters'],
    },
    description: {
        type: String,
        lowercase: true,
        required: [false, 'Please enter description']
    },
    author: {
        type: String,
        lowercase: true,
        required: [false, 'Please enter an author'],
        minlength: [2, 'Minimum author length is 2 characters'],
    },
    cover: {
        type: String,
        required: [false, 'Please enter a cover'],
    },
    path: {
        type: String,
        lowercase: true,
        required: [false, 'Please enter a path'],
    },
    year: { type: Number, required: false }
});

const Book = mongoose.model('book', bookSchema);
module.exports = Book;
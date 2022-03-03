const Book = require("../models/Book");

module.exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.render('books', { books: books });
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.postBook = async (req, res) => {
    const { title, description, author, year, path, cover } = req.body;
    // console.log("file:", req.files)
    try {
        const book = await Book.create({
            title, description,
            author, year,
            cover,
            path
            // path: "/uploads/" + req.files.file[0].filename,
            // cover: "/uploads/" + req.files.cover[0]
        });
        book.save();
        res.status(201).json({ book: book._id });
    }
    catch (err) {
        console.log("err")
    }
}

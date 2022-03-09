const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRouts');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
});

// view engine
app.set('view engine', 'ejs');

// mongoose connection
const URI = process.env.DB_URL;
mongoose.connect(URI,
    err => {
        if (err) throw err;
        console.log('connected to MongoDB')
    });

// server listener
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server has been started on port: ${port}`)
    console.log("process.env.PORT:", process.env.PORT)
})

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('index'));
// app.get('/books', requireAuth, getBooks, (req, res) => res.render('books'));
app.get('/add-book', requireAuth, (req, res) => res.render('addBook'));
app.use(authRoutes);
app.use(bookRoutes);

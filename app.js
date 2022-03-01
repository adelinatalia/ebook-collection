const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
// const { URI } = require("./config");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

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
const port = 3000
app.listen(port, () => {
    console.log(`Server has been started on port: ${port}`)
})

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/books', requireAuth, (req, res) => res.render('books'));
app.use(authRoutes);

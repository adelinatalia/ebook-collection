const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const bookController = require('../controllers/bookController');
const uploadBook = require("../middleware/uploadBook");

const router = Router();

router.get('/books', requireAuth, bookController.getBooks);
// router.get('/:id', bookController.getBook);
router.post('/add-book', uploadBook, bookController.postBook);
// router.put('/:id', bookController.putBook);
// router.delete("/:id/:filename", auth, bookController.deleteBook)

module.exports = router;
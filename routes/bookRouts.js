const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const bookController = require('../controllers/bookController');
// const uploadBook = require("../middleware/uploadBook");

const router = Router();

router.get('/books', requireAuth, bookController.getBooks);
// router.get('/:id', requireAuth, bookController.getBook);
router.post('/add-book', bookController.postBook);
// router.post('/add-book', uploadBook, bookController.postBook);
// router.put('/:id', requireAuth, bookController.putBook);
// router.delete("/:id/:filename", requireAuth, bookController.deleteBook)

module.exports = router;
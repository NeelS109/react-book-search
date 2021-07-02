const router = require("express").Router();
const booksController = require("../../controllers/googleController");

// Matches with "/api/books"
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

router.route("/taco")
.get((req, res) => res.send('im a little tea pot'))


router.route("/:id")
.delete(booksController.delete);

module.exports = router;
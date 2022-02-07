const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// create comments through the pizza id
// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// delete comments through the pizza id
// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;

const router = require('express').Router();
const { addThought, removeThought } = require('../../controllers/thought-controller');

// route for adding thought
router.route('/:userId').post(addThought);

// route for deleting thought
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;
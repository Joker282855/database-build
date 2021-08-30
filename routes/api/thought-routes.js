const router = require('express').Router();
const { addThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

// route for adding thought
router.route('/:userId').post(addThought);

// route for deleting thought
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// get all the post for the Users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// set up for the routes for the get route, post route, and update route, 
router 
    .route('/:id')
    .get(getUsersById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
const router = require('express').Router();

router.use((req, res) => {
    res.status(404).send('You have an error')
});

module.exports = router;
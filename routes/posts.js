const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({posts: 
        {
            title: 'my first post', 
            description: 'data that you should not be able to view without validation'
        }
    });
})

module.exports = router;
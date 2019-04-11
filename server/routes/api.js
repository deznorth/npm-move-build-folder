const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('hello world!');
});

router.get('/secret', (req,res) => {
    res.json({
        message: 'It works!'
    });
});

module.exports = router;
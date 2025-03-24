const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'user.html'));

})

router.post('/users', (req, res, next) => {
    res.redirect('/users/logged');
})

router.post('/users/logged', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'logged.html'));
})

module.exports = router;
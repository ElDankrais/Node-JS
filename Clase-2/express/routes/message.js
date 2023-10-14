const express = require('express');
const path = require('node:path');

const router = express.Router();

router.get('/add-message', (req, res, next) => {
   res.sendFile(path.join(__dirname, '../', 'web', 'add-message.html'));
});

router.post('/message', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
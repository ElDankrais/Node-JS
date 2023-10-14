const express = require('express');

const router = express.Router();

router.use('/papiado', (req, res, next) => {
    console.log('In the middleware');
    res.send('Papiado');
});

module.exports = router;
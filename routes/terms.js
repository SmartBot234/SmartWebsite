var express = require('express');
var router = express.Router();

router.get('/terms', (req, res) => {
    res.render('tos.ejs')
})

module.exports = router;

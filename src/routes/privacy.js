var express = require('express');
var router = express.Router();

router.get('/privacy', (req, res) => {
    res.render('privacy.ejs')
})

module.exports = router;

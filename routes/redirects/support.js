var express = require('express');
var router = express.Router();

router.get('/support', (req, res) => {
    res.redirect('https://discord.gg/9e9TG64Cqn')
})

module.exports = router;

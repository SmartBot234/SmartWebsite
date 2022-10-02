var express = require('express');
var router = express.Router();

router.get('/invite/admin', (req, res) => {
    res.redirect('https://discord.com/oauth2/authorize?client_id=810526674025316412&permissions=8&scope=bot%20applications.commands')
})

module.exports = router;

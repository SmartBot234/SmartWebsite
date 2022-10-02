var express = require('express');
var router = express.Router();

router.get('/invite', (req, res) => {
    res.redirect('https://discord.com/api/oauth2/authorize?client_id=810526674025316412&permissions=1541826673911&scope=bot%20applications.commands')
})

module.exports = router;

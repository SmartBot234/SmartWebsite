var express = require('express');
const fs = require('fs')
var router = express.Router();

router.get(`/api/${process.env.api}/setcount`, (req, res) => {
    const server = req.query.s;
    const member = req.query.m;  

    if (!server) return res.status(401).send("Failed")
    if (!member) return res.status(401).send("Failed")

    let data = [
        {
            server_count: server,
            member_count: member,
        }
    ]

    fs.writeFileSync('./info.json', JSON.stringify(data))
    res.status(200).send("Changed member count and server count!")
})
module.exports = router;

const express = require('express')
const path = require("path")
require('dotenv').config({path:__dirname+'/../.env'})
const app = express()
const PORT = process.env.PORT;

app.set('view-engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

var home = require('./routes/home.js');
var privacy = require('./routes/privacy.js');
var terms = require('./routes/terms.js');
var setcount = require('./routes/APIs/setcount')
var invite = require('./routes/redirects/invite')
var support = require('./routes/redirects/support')
var inviteadmin = require('./routes/redirects/inviteadmin')
var notfound = require('./routes/notfound')

app.use(express.static(__dirname + '/public'));

app.use('/', home)
app.use('/', privacy)
app.use('/', terms)
app.use(`/`, setcount)
app.use(`/`, invite)
app.use(`/`, inviteadmin)
app.use(`/`, support)

// Keep this as the last route
app.use(`/`, notfound)

app.listen(PORT, () => {console.log(`Server started on port ${PORT} 🚀`)});

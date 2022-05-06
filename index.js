const express = require('express')
const passport = require('passport')
const cookies = require('cookie-session')
require('./models/User')
require('./service/passport')
const authRountes = require('./routes/authRoutes')
const keys = require('./config/keys')
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
mongoose.connect(keys.mongoURI)

const app = express();
app.use(cookieSession({
    maxAge: 30 *24 * 60 * 60 *1000,
    keys: [keys.keyCookie]
}))
app.use(passport.initialize())
app.use(passport.session())
authRountes(app)

app.get('/list', (req, res) => res.send([1,2,3]))


const PORT = process.env.PORT || 5001
app.listen(PORT)

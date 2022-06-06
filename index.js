const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./service/passport');

mongoose.connect(keys.mongoURI);
const User = mongoose.model('users')
 const app = express();
 var cors = require('cors');
 app.use(cors());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.keyCookie]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
app.get('/list', (request, response) => {
    response.send({data: [1,2,3,4,5]})
});
app.get("/users", (request, response) => {
  
  response.send({
    data: {
      length: User.length
    }
  })
})
const PORT = process.env.PORT || 5001;
app.listen(PORT);

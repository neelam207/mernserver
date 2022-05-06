const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = mongoose.model('users')
const keys = require('../config/keys')
passport.serializeUser(function(user, done) {
    console.log("serializeUser")
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id).then((user) => {
        done(null, user)
    })
  });
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},(accessToken, refreshToken, profile, done) => {
   
    User.findOne({googleId: profile.id}).then((existingUser) => {
        console.log("User", existingUser)
        if(existingUser) {
            done(null, existingUser)
        } else {
            new User({googleId: profile.id, name: profile.displayName, email: profile.emails[0].value, picture: profile.photos[0].value}).save().then((user) => {
                done(null, user)
            })
        }

    }).catch((error) => {
        done("Error While Query User")
        console.log("Error While Query User", error)
    }) 
    
}))
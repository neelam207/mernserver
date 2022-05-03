const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},(accessToken, refreshToken, profile, done) => {
    console.log("Started========")
    console.log("A", accessToken);
    console.log("B", refreshToken)
    console.log("C", profile)
    done(JSON.stringify(profile))
    
}))
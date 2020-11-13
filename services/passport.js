const passport = require('passport');

const keys = require('../config/keys');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


//config google auth
passport.use( new GoogleStrategy({
    clientID: keys.clientGoogleID,
    clientSecret: keys.clientGoogleSecret,
    callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
        console.log("accessToken ", accessToken);
        console.log("refreshToken ", refreshToken);
        console.log("profile ", profile);
}));

//config facebook auth
passport.use( new FacebookStrategy({
    clientID: keys.clientFacebookID,
    clientSecret: keys.clientFacebookSecret,
    callbackURL: '/auth/facebook/callback',
},(accessToken, refreshToken, profile, done) => {
        console.log("accessToken ", accessToken);
        console.log("refreshToken ", refreshToken);
        console.log("profile ", profile);
}));
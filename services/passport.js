const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


const User = mongoose.model('users');


passport.serializeUser((user,done) => {
    console.log(user.id)
    done(null, user.id)
});
passport.deserializeUser((id,done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
})
//config google auth
passport.use( new GoogleStrategy({
    clientID: keys.clientGoogleID,
    clientSecret: keys.clientGoogleSecret,
    callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id})
            .then(existingUser => {
                if(existingUser){
                    //we already have a record with the given profile ID
                    done(null, existingUser);
                }else{
                    //we do not have a user record with this ID, make a new record
                    new User({googleId: profile.id, nameGoogle: profile.displayName}).save()
                            .then(user => done(null,user))
                            .catch(error => console.error(error))
                }
            }).catch(error => console.error(error));

       
}));

//config facebook auth
passport.use( new FacebookStrategy({
    clientID: keys.clientFacebookID,
    clientSecret: keys.clientFacebookSecret,
    callbackURL: '/auth/facebook/callback',
},(accessToken, refreshToken, profile, done) => {
        User.findOne({facebookId: profile.id})
            .then(existingUser => {
                if(existingUser){
                    //we already have a record with the given profile ID
                    done(null, existingUser);
                }else{
                    new User({facebookId: profile.id, nameFacebook: profile.displayName}).save()
                        .then(user => done(null,user))
                        .catch(error => console.error(error));
                }
            });

}));
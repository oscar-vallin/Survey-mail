const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


const User = mongoose.model('users');

passport.serializeUser((user,done) => {
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
    proxy: true //if our request is a proxy, it's ok
}, async (accessToken, refreshToken, profile, done) => {
 
    const existingUser = await User.findOne({googleId: profile.id});
            if(existingUser){
                //we already have a record with the given profile ID
               return done(null, existingUser);
            }else{
                //we do not have a user record with this ID, make a new record
                const user = await new User({
                    googleId: profile.id, 
                    nameGoogle: profile.displayName, 
                    email: profile.emails[0].value,
                    image: profile.photos[0].value
                    }).save()
               return done(null,user)
            }
        }
    )
);

// config facebook auth
passport.use( new FacebookStrategy({
    clientID: keys.clientFacebookID,
    clientSecret: keys.clientFacebookSecret,
    callbackURL: '/auth/facebook/callback',
    profileFields:  ['name', 'email', 'displayName', 'photos'],
    proxy: true,
}, async (token, refreshToken, profile, cb) => {

    const existingUser = await User.findOne({facebookId: profile.id});

    if(existingUser){
        //we already have a record with the given profile ID
         return cb(null, existingUser);
    }else{
        const user  = await new User({
            facebookId: profile.id, 
            nameFacebook: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value
            }).save()
           return  cb(null,user);
    }
}));
